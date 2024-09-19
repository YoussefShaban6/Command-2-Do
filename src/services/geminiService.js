import {
  HarmBlockThreshold,
  HarmCategory,
  GoogleGenerativeAI,
} from "@google/generative-ai";
import * as clackPrompt from "@clack/prompts";
import chalk from "chalk";
import { prompt } from "../utils/prompt.utils.js";
import { geminiApiKey } from "../config/apiConfig.js";

const genAI = new GoogleGenerativeAI(geminiApiKey);

const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_NONE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_NONE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
    threshold: HarmBlockThreshold.BLOCK_NONE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
    threshold: HarmBlockThreshold.BLOCK_NONE, // Allows low and above probability content
  },
];

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  safetySettings: safetySettings,
});

console.log("");
clackPrompt.intro(chalk.bgBlue("Command 2 Do"));

const spin = clackPrompt.spinner();
spin.start(chalk.green("loading"));

const result = await model.generateContent(prompt);

const command = result.response.text();

spin.stop("Your Script");

console.log(`\n${command}\n`);

const select = await clackPrompt.select({
  message: "Run the script?",
  options: [
    { value: "yes", label: "✅ Yes", hint: "recommended" },
    { value: "revise", label: "📝 Revise" },
    { value: "cancel", label: "❌ Cancel" },
  ],
  required: true,
});

export { select, command };
