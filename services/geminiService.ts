
import { GoogleGenAI } from "@google/genai";

export const generateLoveNote = async (
  name: string, 
  tone: 'sweet' | 'funny' | 'poetic'
): Promise<string> => {
  // Selalu buat instance baru sebelum memanggil API untuk mendapatkan key terbaru dari env
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

  const prompts = {
    sweet: `Write a very short, sweet, and cute love message (2-3 sentences) for someone named ${name} in Indonesian. Use emojis. Make it heartwarming.`,
    funny: `Write a short, funny, and slightly roasting love message (2-3 sentences) for someone named ${name} in Indonesian. Mention how annoying but lovable they are. Use emojis.`,
    poetic: `Write a short, romantic 4-line poem for someone named ${name} in Indonesian. Make it rhyme and sound beautiful. Use emojis.`
  };

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompts[tone],
      config: {
        temperature: 0.8,
        topP: 0.95,
        thinkingConfig: { thinkingBudget: 0 }
      }
    });

    const text = response.text;
    return text || "Aku sayang kamu selamanya! ❤️";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Meskipun AI sedang error, cintaku padamu tidak pernah error! ❤️";
  }
};
