# CommandToDo

CommandToDo is a powerful AI-powered CLI application that simplifies your workflow by converting normal text into actionable commands. It integrates an AI model, based on Gemini, to help automate tasks and streamline productivity by generating accurate terminal commands from plain language instructions.

<p align="center">
   
   https://github.com/user-attachments/assets/0f651d1c-371b-4ba1-90e2-ec775afeedbd
   
<p>

## Features

- AI-Powered Command Generation: Leverage the Gemini AI model to convert natural language text into terminal commands.
- Seamless Task Automation: Automate repetitive tasks with simple prompts.
- Extensible: Easily customizable for different types of commands (e.g., Linux, Git, Docker).

## Comming Feature

- Cross-Platform: Works on macOS, Linux, and Windows.

## Prerequisites

- Node.js (v14 or higher)
- NPM (comes with Node.js)
- Gemini API Key: Make sure you have access to the Gemini AI API.
- Windows Powershell

## Dependencies

This project uses the following npm packages:

- **@clack/prompts**: A library for creating interactive command-line prompts.
- **@google/generative-ai**: A client library for interacting with Google's generative AI services.
- **chalk**: A library for styling terminal string output with colors.
- **dotenv**: A module that loads environment variables from a `.env` file into `process.env`.
- **clipboardy**: A library for accessing the system clipboard (copy and paste functionality).

## Installation

- Clone this repository:

```bash
git clone https://github.com/yourusername/CommandToDo.git
cd CommandToDo
```

- Install the required Node.js dependencies:

```bash
npm install
Set up your environment variables:
```

- Create a .env file in the root directory and add your Gemini API key:

```bash
GEMINI_API_KEY=your-api-key
```

## Usage

Once the setup is complete, you can start using CommandToDo from your terminal:

```bash
node index.js
```

## Example

You can type in natural language prompts, and the AI will generate the corresponding command:

```bash
> Install express in this project
$ npm install express

> Create a new directory called 'my-project'
$ mkdir my-project
```
