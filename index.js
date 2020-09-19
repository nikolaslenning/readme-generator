const fs = require("fs");
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user

const questions = [
    {
        type: "input",
        name: "title",
        message: "Project Title:"
      },
      {
        type: "input",
        name: "description",
        message: "Short Project Description explaining the what, why and how:"
      },
      {
        type: "input",
        name: "table",
        message: "Table of Contents"
      },
      {
        type: "input",
        name: "installation",
        message: "What are the steps required for installation?"
      },
      {
        type: "input",
        name: "usage",
        message: "Any instructions or examples for usage?"
      },
      {
        type: "input",
        name: "license",
        message: "License"
      },
      {
        type: "input",
        name: "contributing",
        message: "List your contributing collaberators and their GitHub profiles?"
      },
      {
        type: "input",
        name: "tests",
        message: "Any written tests for your application?"
      },
      {
        type: "input",
        name: "questions",
        message: "Questions"
      }
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    

}

// function call to initialize program
init();
