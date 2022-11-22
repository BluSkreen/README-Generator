// packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// an array of questions for user input
const questions = [
  {
    name: "path",
    type: "input",
    message: "What is the path?",
  },
  {
    name: "github",
    type: "input",
    message: "What is your github?",
  },
  {
    name: "email",
    type: "input",
    message: "What is your email?",
  },
  {
    name: "title",
    type: "input",
    message: "What is the title?",
  },
  {
    name: "description",
    type: "input",
    message: "Give it a description.",
  },
  {
    name: "usage",
    type: "input",
    message: "What is the usage?",
  },
  {
    name: "other",
    type: "checkbox",
    message: "What else will be included?",
    choices: ["Table of Contents", "install", "credits", "contribute"],
  },
  {
    name: "install",
    type: "input",
    message: "What are the installation instructions?",
    when: (response) => response.other.includes("install"),
  },
  {
    name: "credits",
    type: "input",
    message: "Who are the contributors?",
    when: (response) => response.other.includes("credits"),
  },
  {
    name: "contribute",
    type: "input",
    message: "How can people contribute?",
    when: (response) => response.other.includes("contribute"),
  },
  {
    name: "license",
    type: "list",
    message: "What license will this use?",
    choices: ["MIT", "GPL-3.0", "Apache-2.0", "CDDL-1.0", "MPL-2.0", "other"],
  },
  {
    name: "otherLicense",
    type: "input",
    message: "What license will this use?",
    when: (response) => response.license === "other",
  },
];

// write README file
function writeToFile({ path, content }) {
  // console.log(`${path}\n${content}`);

  // use the path from response and concat the filename README.md
  // write the markdown text thats paired with "content" to a file
  fs.writeFile(path + "README.md", content, (err) => {
    err ? console.error(err) : console.log("success");
  });
}

// initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    // if "other" license was chosen then replace .license
    if (response.otherLicense != undefined) {
      response.license = response.otherLicense;
    }
    // console.log(response.license);
    // console.log(response);

    // put markdown text in response object
    const markdown = generateMarkdown(response);
    response["content"] = markdown;
    writeToFile(response);
  });
}

// initialize app
init();
// ./readMeFile/
