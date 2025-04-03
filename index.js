import { GoogleGenAI } from "@google/genai";
import { fazerPergunta } from "./pergunta.js";


const ai = new GoogleGenAI({ apiKey: "AIzaSyCcKCZ_We7eShHFk3yFZNUvV48iqoaLfaI" });

async function main() {
  let prompt = "Você é um coach de programação, e deve ajudar com as melhores técnicas de programação. A dúvida é : "
  prompt += await fazerPergunta("Qual sua dúvida de programação?");
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
    });
    console.log(response.text);
  } catch (error) {
    console.error("Error generating content:", error.message);
  }
}

await main();