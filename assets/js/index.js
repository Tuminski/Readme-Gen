// requiring inquirer and fs
const inquirer = require("inquirer");
const fs = require("fs");

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
    fs.writeFile("readme.md", JSON.stringify(answers), function(err){
        if(err){
            console.log(err);
        }
            console.log("Data entered!");
    });
});





// =========================================

function writeToFile(fileName, data) {
}

function init() {

}

init();