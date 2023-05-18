// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'In detail describe your project.'
    },
    {
        type: 'input',
        name: 'installations',
        message: 'What are some installations used in your project?'
    },
    {
        type: 'confirm',
        name: 'table',
        message: 'Would you like to add a Table of Contents?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What usage information can you add?'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What have you contribuited to the project?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How can you test your project?'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
