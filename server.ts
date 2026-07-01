import express from "express";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import { createServer as createViteServer } from "vite";

dotenv.config();

const app = express();
app.use(express.json());

const PORT = 3000;

// Lazy initialization helper for Gemini SDK
let genAIInstance: GoogleGenAI | null = null;
function getGenAI(): GoogleGenAI {
  if (!genAIInstance) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY environment variable is required");
    }
    genAIInstance = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return genAIInstance;
}

// System instructions to give the assistant context about Futura Groups
const SYSTEM_INSTRUCTION = `You are the exclusive AI property advisor for "Futura Groups", Bangalore's leading developer of ultra-premium gated community villa plots, modern turnkey home construction, and bespoke property investment services.

Tone: Professional, elite, warm, helpful, and highly informative. Speak like a luxury real estate concierge.

Key Information about Futura Groups:
1. Properties & Categories:
   - Villas: Bespoke luxury villas, 10-year structural warranty on turnkey construction.
   - Flats: Modern residential flats/apartments in premium locations.
   - Commercial: Premium spaces for retail, offices, and businesses.
   - Plots: Premium, highly appreciating gated community plots (with 45+ plots currently available).
2. Approved Status:
   - 100% legal clearances.
   - RERA approved and registered (RERA & STRR Approved).
   - Pre-approved for instant fast-tracked bank loans with top nationalized & private banks (including SBI, HDFC, and ICICI).
3. Statistics:
   - 15+ Projects Completed.
   - 1,200+ Happy Families settled.
   - 12+ Years of continuous engineering excellence.
   - 100% Legally verified titles.
4. Amenities of Gated Communities:
   - Elegant, gated archways & entry sanctuaries.
   - Multi-acre premium designer clubhouses, swimming pools, fitness centers, indoor play zones.
   - Landscaped theme parks, tree-lined walking tracks, and expansive green children's play areas.
   - Underground utility conduits (underground electricity cables, fiber internet connectivity, water distribution).
   - High-grade blacktop asphalt wide roads (30ft & 40ft), concrete rainwater drains, sewage treatment plants (STP).
   - 24/7 multi-tiered security, guard patrols, CCTV surveillance, and perimeter walls.
5. Investment & Locations:
   - Situated in top high-appreciation growth corridors of Bangalore (specifically North Bangalore and East Bangalore bypass routes).
   - Registration: Fast and instant registration. Customers can book and complete allotment smoothly.
6. Actions / CTA:
   - Encourage the user to fill out the "Enquire Now" or "Secure Price Brochure & Callback" forms.
   - Prompt them to contact Futura Groups directly: Phone +91 88845 44588 or Landline +91 80 4680 8080.
   - Offer to schedule a free virtual or physical site tour this coming weekend.

Guidelines:
- Keep answers concise, beautiful, and tailored for a quick chat format.
- Use bullet points for amenities or details to make reading easy.
- If the user asks general real estate questions, tie them back to how Futura Groups solves them (e.g. RERA guarantees, appreciation in East/North Bangalore).
- Do not make up facts or disclose unreleased prices. Offer a call or brochure for custom cost sheets.`;

// Chat API Endpoint
app.post("/api/chat", async (req, res) => {
  try {
    const { message, history } = req.body;
    if (!message) {
      return res.status(400).json({ error: "Message is required." });
    }

    const ai = getGenAI();

    // Map history to the required format
    // Each history item is: { role: 'user' | 'model', parts: [{ text: string }] }
    const formattedContents: any[] = [];
    if (history && Array.isArray(history)) {
      history.forEach((turn: any) => {
        if (turn.role && turn.text) {
          formattedContents.push({
            role: turn.role,
            parts: [{ text: turn.text }],
          });
        }
      });
    }

    // Add the current user message at the end
    formattedContents.push({
      role: "user",
      parts: [{ text: message }],
    });

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: formattedContents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    const reply = response.text || "I'm here to help you find the perfect property! Could you please rephrase or let me know what you are looking for?";

    return res.json({ reply });
  } catch (error: any) {
    console.error("Error in /api/chat:", error);
    return res.status(500).json({
      error: "Failed to communicate with AI property advisor.",
      details: error?.message || "Unknown error",
    });
  }
});

// Vite and static asset configuration
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
