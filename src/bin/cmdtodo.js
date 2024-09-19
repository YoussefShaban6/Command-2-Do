import { exec } from "node:child_process";
import clipboardy from "clipboardy";
import { select, command } from "../services/geminiService.js";

const userInput = select;

if (userInput === "yes") {
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Stderr: ${stderr}`);
      return;
    }
    console.log(`Stdout: ${stdout}`);
  });
} else if (userInput === "revise") {
  clipboardy.writeSync(command);
  console.log("Command copied to clipboard.");
  // Optionally, you can provide a way to edit the command here
} else if (userInput === "cancel") {
  console.log("Operation cancelled.");
}
