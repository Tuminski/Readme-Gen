// requiring inquirer and fs
const inquirer = require("inquirer");

// questions for inquirer to ask
const questions = [
    {
        type: "input",
        name: "username",
        message:  "What is your GitHub username?"
    }, 
    {
        type: "input",
        name: "projectTitle",
        message: "What is the name of your project?"
    },
    {
        type: "input",
        name: "description",
        message:  "Please provide a brief description of your project."
    },
];


// inquirer asks questions
inquirer.prompt(questions).then(function(answers){
    console.log(answers);
})





// =========================================

function writeToFile(fileName, data) {
}

function init() {

}

init();