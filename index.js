import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();
const client = new OpenAI({
    apiKey: process.env.GEN_AI_KEY,
    baseURL: "https://api.groq.com/openai/v1",
});

async function run(question) {
    try {
        const response = await client.responses.create({
            instructions: "give result in 10 words",
            model: "llama-3.1-8b-instant",
            input: question,
        });

        // const response = await client.responses.create({
        //     model: "llama-3.1-8b-instant",
        //     input: [
        //         { role: "system", content: "You are a helpful assistant. give me only definitions." },
        //         {role:"developer",content:"give simple definition with example"},
        //         {
        //             role: "user",
        //             content: "what is debouncing and throttling in node js"
        //         }
        //     ]
        // });

        console.log(response.output_text);
    } catch (error) {
        console.error("Error:", error.message);
    }
}

process.stdout.write("Ask your Question :")
process.stdin.on("data", async (data) => {
    const question = data.toString().trim();
    run(question);
});
