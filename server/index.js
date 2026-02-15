require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const RAGEngine = require("./rag");

const app = express();
const PORT = process.env.PORT || 3001;
const HF_TOKEN = process.env.HF_API_TOKEN;
const LLM_MODEL = "Qwen/Qwen2.5-7B-Instruct";

app.use(cors());
app.use(express.json());

const rag = new RAGEngine(HF_TOKEN);

const SYSTEM_PROMPT = `You are a helpful assistant on Haykel Sriha's portfolio website.
Answer questions about Haykel based ONLY on the following context.
If the information is not in the context, say you don't have that information.
Be concise, friendly, and professional. Answer in 2-4 sentences when possible.`;

app.post("/api/chat", async (req, res) => {
  try {
    const {message} = req.body;

    if (!message || typeof message !== "string") {
      return res.status(400).json({error: "Message is required"});
    }

    const results = await rag.search(message, 3);
    const context = results.map(r => r.text).join("\n\n---\n\n");

    const response = await rag.hf.chatCompletion({
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
});

app.get("/api/health", (req, res) => {
  res.json({status: "ok", chunks: rag.chunks.length});
});

async function start() {
  try {
    const dataDir = path.join(__dirname, "data");
    await rag.initialize(dataDir);
    app.listen(PORT, () => {
      console.log(`Chatbot server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to initialize:", error);
    process.exit(1);
  }
}

start();
