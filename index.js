import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();
const client = new OpenAI({
    apiKey: process.env.GEN_AI_KEY
})

const response = await client.responses.create({
    input:"my name is aman and i am a software developer",
    model:"gpt-4o-mini"
})

console.log(response.output_text);
