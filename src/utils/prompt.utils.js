const userMessage = process.argv.slice(2).join(" ");

export const prompt = `I want you to act as a cmd commands expert. 
                I will type message and you will reply with complete script for cmd.
                I want you to only reply with the script output, and nothing else. do not write explanations.
                Do not write comments. Do not write code block. 
                do not type commands unless I instruct you to do so. The message is: ${userMessage}`;
