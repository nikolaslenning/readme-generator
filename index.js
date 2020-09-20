const fs = require("fs");
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');



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
        type: "confirm",
        name: "table",
        message: "Would you care to include a Table of Contents?"
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
        type: "list",
        name: "license",
        message: "Choose an open source license:",
        choices: [ "MIT" , "Apache" , "Mozzila" , "GNU" ]
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
          name: 'email',
          message: 'Please enter your email address'
      },
      {
          type: "input",
          name: 'github',
          message: 'Please enter your Github username'
      }


];

// function to write README file
function writeToFile(fileName, data,) {
    fs.writeFile(fileName, data, function (error) {
        if (error) {
            return console.log(error);
        } console.log('success!');
    })
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then(function(response){
        const markdown = generateMarkdown(response);
        writeToFile(`${response.title}.md`, markdown);
    })
}

// function call to initialize program
init();
