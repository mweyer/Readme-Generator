const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./generateMarkdown")

const questions = [
    {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'title'
        
    },
    {
        type: 'input',
        message: 'Provide a description of your project.',
        name: 'description'
        
    },
    {
        type: 'input',
        message: 'What are the instructions for installation?',
        name: 'installation'
        
    },
    {
        type: 'input',
        message: 'How do you use this app?',
        name: 'usage'
        
    },
    {
        type: 'input',
        message: 'Who contributed?',
        name: 'contribution'
        
    },
    {
        type: 'input',
        message: 'What license did you use?',
        name: 'license',
        choices:['The MIT License', 'The GPL License', 'Apache License', 'GNU License', 'N/A'],
        
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email'
    }
];

function writetoFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Saved")
})}

function init() {
    inquirer.prompt(questions).then(function (data) {
        writetoFile("Readme.md", generateMarkdown(data));
    });
}

init();
