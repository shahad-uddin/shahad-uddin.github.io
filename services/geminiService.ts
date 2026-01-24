
import { GoogleGenAI } from "@google/genai";
import { MessageRole, ChatMessage } from "../types";

// Always initialize with named parameter and use process.env.API_KEY directly
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getHostingAdvice = async (history: ChatMessage[], userPrompt: string): Promise<string> => {
  try {
    // Generate content using the recommended model and configuration
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        // Ensure the conversation history follows the required structure
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
        // System instruction should be placed inside the config object
        systemInstruction: `You are a helpful Bangladeshi Web Hosting Expert assistant for "BD Hosting Pro". 
          Your goal is to help users understand web hosting, domain registration, and how to use local payment methods like bKash/Nagad via PutulHost.
          Always mention that they can pay with local currency (BDT) without a credit card.
          If they ask for a recommendation, guide them toward PutulHost using this affiliate link structure: https://control.putulhost.com/aff.php?aff=4374.
          Answer in a friendly tone using a mix of English and Bengali (Banglish) which is common in BD tech circles.
          Keep answers concise and SEO-friendly.`,
        temperature: 0.7,
        topP: 0.9,
      }
    });

    // Access the .text property directly (not as a method)
    return response.text || "দুঃখিত, আমি এই মুহূর্তে উত্তর দিতে পারছি না। অনুগ্রহ করে আবার চেষ্টা করুন।";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Something went wrong. Please check your connection.";
  }
};