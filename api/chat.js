const fs = require("fs");
const path = require("path");
const {HfInference} = require("@huggingface/inference");

const EMBEDDING_MODEL = "sentence-transformers/all-MiniLM-L6-v2";
const LLM_MODEL = "Qwen/Qwen2.5-7B-Instruct";
const CHUNK_SIZE = 500;
const CHUNK_OVERLAP = 100;

const SYSTEM_PROMPT = `You are a helpful assistant on Haykel Sriha's portfolio website.
Answer questions about Haykel based ONLY on the following context.
If the information is not in the context, say you don't have that information.
Be concise, friendly, and professional. Answer in 2-4 sentences when possible.`;

let cachedChunks = null;
let hf = null;

function chunkText(text, source) {
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

function cosineSimilarity(a, b) {
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

async function getEmbedding(text) {
  return await hf.featureExtraction({
    model: EMBEDDING_MODEL,
    inputs: text
  });
}

async function initializeChunks() {
  if (cachedChunks) return cachedChunks;

  const dataDir = path.join(__dirname, "..", "server", "data");
  const files = fs.readdirSync(dataDir).filter(f => f.endsWith(".md"));

  let allChunks = [];
  for (const file of files) {
    const content = fs.readFileSync(path.join(dataDir, file), "utf-8");
    const chunks = chunkText(content, file);
    allChunks = allChunks.concat(chunks);
  }

  for (const chunk of allChunks) {
    chunk.embedding = await getEmbedding(chunk.text);
  }

  cachedChunks = allChunks;
  return cachedChunks;
}

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({error: "Method not allowed"});
  }

  try {
    const {message} = req.body;

    if (!message || typeof message !== "string") {
      return res.status(400).json({error: "Message is required"});
    }

    if (!hf) {
      hf = new HfInference(process.env.HF_API_TOKEN);
    }

    const chunks = await initializeChunks();
    const queryEmbedding = await getEmbedding(message);

    const scored = chunks.map(chunk => ({
      ...chunk,
      score: cosineSimilarity(queryEmbedding, chunk.embedding)
    }));
    scored.sort((a, b) => b.score - a.score);
    const results = scored.slice(0, 3);

    const context = results.map(r => r.text).join("\n\n---\n\n");

    const response = await hf.chatCompletion({
      model: LLM_MODEL,
      messages: [
        {role: "system", content: SYSTEM_PROMPT + "\n\nContext:\n" + context},
        {role: "user", content: message}
      ],
      max_tokens: 300,
      temperature: 0.7
    });

    const reply = response.choices[0].message.content.trim();

    res.json({
      reply,
      sources: results.map(r => r.source)
    });
  } catch (error) {
    console.error("Chat error:", error);
    res.status(500).json({
      error: "Sorry, I encountered an error. Please try again."
    });
  }
};
