// packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// an array of questions for user input
const questions = [
  "What is the path?", // input
  "What is your github?", // input
  "What is your email?", // input
  "What is the title?", // input
  "Give it a description.", // input
  "What is the usage?", // input
  "What else will be included?", // checkbox
  "What license will this use?", // list
];

// TODO: Create a function to write README file
function writeToFile({ path, content }) {
  // console.log(`${path}\n${content}`);
  fs.writeFile(path + "README.md", content, (err) => {
    err ? console.error(err) : console.log("success");
  });
}

// TODO: Create a function to initialize app
function init() {
  const [pathQ, githubQ, emailQ, titleQ, descriptionQ, usageQ, otherQ, licenseQ] = questions;

  inquirer
    .prompt([
      {
        name: "path",
        type: "input",
        message: pathQ,
      },
      {
        name: "github",
        type: "input",
        message: githubQ,
      },
      {
        name: "email",
        type: "input",
        message: emailQ,
      },
      {
        name: "title",
        type: "input",
        message: titleQ,
      },
      {
        name: "description",
        type: "input",
        message: descriptionQ,
      },
      {
        name: "usage",
        type: "input",
        message: usageQ,
      },
      {
        name: "other",
        type: "checkbox",
        message: otherQ,
        choices: ["Table of Contents", "install", "credits"],
      },
      {
        name: "license",
        type: "list",
        message: licenseQ,
        choices: ["MIT", "GPL-3.0L", "Apache-2.0", "CDDL-1.0", "MPL-2.0"],
      },
    ])
    .then((response) => {
      console.log(response);
      const markdown = generateMarkdown(response);
      response["content"] = markdown;
      writeToFile(response);
    });
}

// Function call to initialize app
init();
// ./readMeFile/