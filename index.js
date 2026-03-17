import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();
const client = new OpenAI({
    apiKey: process.env.GEN_AI_KEY,
    baseURL: "https://api.groq.com/openai/v1",
});

async function run() {
    try {
        const response = await client.responses.create({
            model: "llama-3.1-8b-instant",
            input:"my name is aman i have calculation 200*200 ",
        });

        console.log(response.output_text);
    } catch (error) {
        console.error("Error:", error.message);
    }
}

run();

