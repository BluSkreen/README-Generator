// packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// an array of questions for user input
const questions = [
  "What is your github?", // input
  "What is your email?", // input
  "What is the title?", // input
  "Give it a description.", // input
  "What is the usage?", // input
  "What else will be included?", // checkbox
  "Is there a table of contents?", // confirm
  "What license will this use?", // list
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  const [githubQ, emailQ, titleQ, descriptionQ, usageQ, tocQ, tocQTwo, licenseQ] = questions;

  inquirer
    .prompt([
      {
        type: "input",
        message: githubQ,
        name: "github",
      },
      // {},{},{},{},{},{},{},
    ])
    .then((response) => {
      const data = JSON.stringify(response);
      console.log(data);
    });

//   inquirer
//     .next([
//       {
//         type: "input",
//         message: emailQ,
//         name: "email",
//       },
//     ])
//     .then((nextResponse) => {
//       const data = JSON.stringify(nextResponse);
//       console.log(data);
//     });

  // generateMarkdown(data);
  // writeToFile(fileName, data);
}

// Function call to initialize app
init();
