const fs = require("fs");
const path = require("path");
const {HfInference} = require("@huggingface/inference");

const EMBEDDING_MODEL = "sentence-transformers/all-MiniLM-L6-v2";
const CHUNK_SIZE = 500;
const CHUNK_OVERLAP = 100;

class RAGEngine {
  constructor(hfToken) {
    this.hf = new HfInference(hfToken);
    this.chunks = [];
  }

  loadDocuments(dataDir) {
    const files = fs.readdirSync(dataDir).filter(f => f.endsWith(".md"));
    const documents = [];
    for (const file of files) {
      const content = fs.readFileSync(path.join(dataDir, file), "utf-8");
      documents.push({content, source: file});
    }
    return documents;
  }

  chunkText(text, source) {
    const chunks = [];
    const paragraphs = text.split(/\n\n+/);
    let currentChunk = "";

    for (const paragraph of paragraphs) {
      if (
        (currentChunk + "\n\n" + paragraph).length > CHUNK_SIZE &&
        currentChunk.length > 0
      ) {
        chunks.push({text: currentChunk.trim(), source});
        const words = currentChunk.split(" ");
        const overlapWords = words.slice(-Math.floor(CHUNK_OVERLAP / 5));
        currentChunk = overlapWords.join(" ") + "\n\n" + paragraph;
      } else {
        currentChunk = currentChunk
          ? currentChunk + "\n\n" + paragraph
          : paragraph;
      }
    }
    if (currentChunk.trim()) {
      chunks.push({text: currentChunk.trim(), source});
    }
    return chunks;
  }

  async getEmbedding(text) {
    const result = await this.hf.featureExtraction({
      model: EMBEDDING_MODEL,
      inputs: text
    });
    return result;
  }

  async initialize(dataDir) {
    console.log("Loading documents from", dataDir);
    const documents = this.loadDocuments(dataDir);

    let allChunks = [];
    for (const doc of documents) {
      const chunks = this.chunkText(doc.content, doc.source);
      allChunks = allChunks.concat(chunks);
    }

    console.log(`Created ${allChunks.length} chunks. Generating embeddings...`);

    for (const chunk of allChunks) {
      const embedding = await this.getEmbedding(chunk.text);
      this.chunks.push({...chunk, embedding});
    }

    console.log(
      `RAG engine initialized with ${this.chunks.length} embedded chunks.`
    );
  }

  cosineSimilarity(a, b) {
    let dotProduct = 0;
    let normA = 0;
    let normB = 0;
    for (let i = 0; i < a.length; i++) {
      dotProduct += a[i] * b[i];
      normA += a[i] * a[i];
      normB += b[i] * b[i];
    }
    return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
  }

  async search(query, topK = 3) {
    const queryEmbedding = await this.getEmbedding(query);

    const scored = this.chunks.map(chunk => ({
      ...chunk,
      score: this.cosineSimilarity(queryEmbedding, chunk.embedding)
    }));

    scored.sort((a, b) => b.score - a.score);
    return scored.slice(0, topK);
  }
}

module.exports = RAGEngine;
