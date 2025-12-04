import { GoogleGenAI } from "@google/genai";
import { SeoResult } from "../types";

// Helper to get client with key check
const getAiClient = async (): Promise<GoogleGenAI> => {
  // Use cast to any to avoid type conflict with global AIStudio definition
  const win = window as any;
  if (win.aistudio && win.aistudio.hasSelectedApiKey) {
    const hasKey = await win.aistudio.hasSelectedApiKey();
    if (!hasKey) {
      throw new Error("API Key not selected");
    }
  } else {
    // Fallback for dev environments without the special window object
    if (!process.env.API_KEY) {
      console.warn("No API Key found in environment or selection tool.");
    }
  }
  return new GoogleGenAI({ apiKey: process.env.API_KEY });
};

export const generateSeoInsights = async (): Promise<SeoResult> => {
  try {
    const ai = await getAiClient();
    
    // Updated prompt to target specific keywords requested by user
    const prompt = `
      Find the most popular and trending search queries (SEO keywords) in Russia related to:
      "XR products", "Interactive stands for exhibitions", "Virtual reality for business", "Augmented reality for events", "Immersive business solutions".
      
      Return a list of the top 8 specific search phrases used by businesses looking for these services.
      Also provide a 1 sentence summary for a meta description tag that includes "XR", "Interactive stands", and "Business solutions".
    `;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        tools: [{ googleSearch: {} }],
      },
    });

    const text = response.text || "";
    
    // Parse keywords from text (simple heuristic for this demo)
    const lines = text.split('\n').filter(l => l.trim().length > 0);
    const keywords = lines
      .filter(l => l.match(/^[0-9-•*]/)) // bullet points
      .map(l => l.replace(/^[0-9-•*.]+\s*/, '').trim())
      .slice(0, 8);
    
    const summaryMatch = text.match(/Summary:?\s*(.*)/i) || lines.find(l => l.length > 50 && !l.match(/^[0-9-•*]/));
    const summary = summaryMatch ? (typeof summaryMatch === 'string' ? summaryMatch : summaryMatch[1]) : "Интерактивные XR стенды и решения для бизнеса.";

    const sources = response.candidates?.[0]?.groundingMetadata?.groundingChunks
      ?.map(c => c.web ? { title: c.web.title || 'Source', uri: c.web.uri || '#' } : null)
      .filter((s): s is { title: string; uri: string } => s !== null) || [];

    return {
      keywords: keywords.length > 0 ? keywords : ["Интерактивные стенды", "XR для бизнеса", "VR обучение", "AR маркетинг"],
      summary: summary || "XR решения для демонстрации продуктов и обучения.",
      sources
    };

  } catch (error) {
    console.error("SEO Gen Error:", error);
    return {
      keywords: ["XR продукты", "Интерактивные стенды", "Виртуальная реальность", "Дополненная реальность", "Иммерсивный опыт"],
      summary: "Эффективные XR-решения для бизнеса: стенды, обучение и продажи.",
      sources: []
    };
  }
};

export const generateVeoVideo = async (
  prompt: string, 
  onProgress: (msg: string) => void
): Promise<string> => {
  try {
    const ai = await getAiClient();
    
    onProgress("Инициализация модели Veo...");
    
    let operation = await ai.models.generateVideos({
      model: 'veo-3.1-fast-generate-preview',
      prompt: prompt,
      config: {
        numberOfVideos: 1,
        resolution: '720p',
        aspectRatio: '16:9'
      }
    });

    onProgress("Генерация видео... Это может занять около минуты.");

    while (!operation.done) {
      await new Promise(resolve => setTimeout(resolve, 5000)); // Poll every 5s
      onProgress("Обработка кадров...");
      operation = await ai.operations.getVideosOperation({ operation: operation });
    }

    const videoUri = operation.response?.generatedVideos?.[0]?.video?.uri;
    
    if (!videoUri) {
      throw new Error("Video URI not found in response");
    }

    // Append API key for download
    return `${videoUri}&key=${process.env.API_KEY}`;

  } catch (error) {
    console.error("Veo Error:", error);
    throw error;
  }
};

// Helper for API Key Selection
export const checkAndRequestApiKey = async (): Promise<boolean> => {
  const win = window as any;
  if (win.aistudio) {
    const hasKey = await win.aistudio.hasSelectedApiKey();
    if (!hasKey) {
       await win.aistudio.openSelectKey();
       // Assume success after dialog interaction for this flow
       return true; 
    }
    return true;
  }
  return true; // Fallback for env usage
};