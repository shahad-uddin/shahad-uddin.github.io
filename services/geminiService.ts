import { GoogleGenAI } from "@google/genai";
import { MessageRole, ChatMessage } from "../types";

export const getHostingAdvice = async (history: ChatMessage[], userPrompt: string): Promise<string> => {
  // Always initialize according to the required Google GenAI SDK pattern
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history.map(msg => ({
          role: msg.role === MessageRole.USER ? 'user' : 'model',
          parts: [{ text: msg.text }]
        })),
        {
          role: 'user',
          parts: [{ text: userPrompt }]
        }
      ],
      config: {
        systemInstruction: `You are a helpful Bangladeshi Web Hosting Expert assistant for "BD Hosting Pro". 
          Your goal is to help users understand web hosting, domain registration, and how to use local payment methods like bKash/Nagad via PutulHost.
          Always mention that they can pay with local currency (BDT) without a credit card.
          If they ask for a recommendation, guide them toward PutulHost using this affiliate link: https://control.putulhost.com/aff.php?aff=4374.
          Answer in a friendly tone using a mix of English and Bengali (Banglish).`,
        temperature: 0.7,
      }
    });

    return response.text || "দুঃখিত, আমি এই মুহূর্তে উত্তর দিতে পারছি না।";
  } catch (error) {
    console.error("Gemini API Error:", error);
    if (!process.env.API_KEY) {
      return "API Key is missing. Please configure the API_KEY secret in your GitHub repository.";
    }
    return "Something went wrong. Please check your connection or try again later.";
  }
};