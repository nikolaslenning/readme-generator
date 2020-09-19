const fs = require("fs");
const inquirer = require('inquirer');
const util = require('util');



// array of questions for user
function promptUser() {
    return inquirer.prompt([
      {
        type: "input",
        name: "title",
        message: "Project Title"
      },
      {
        type: "input",
        name: "description",
        message: "Project Description"
      },
      {
        type: "input",
        name: "table",
        message: "Table of Contents"
      },
      {
        type: "input",
        name: "installation",
        message: "Installation"
      },
      {
        type: "input",
        name: "usage",
        message: "Usage"
      },
      {
        type: "input",
        name: "license",
        message: "License"
      },
      {
        type: "input",
        name: "contributing",
        message: "Contributing"
      },
      {
        type: "input",
        name: "tests",
        message: "Tests"
      },
      {
        type: "input",
        name: "questions",
        message: "Questions"
      }
    ])
}
const questions = [

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
