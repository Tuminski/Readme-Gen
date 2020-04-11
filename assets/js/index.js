// requiring inquirer, fs, and generateMarkdown
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// questions for inquirer to ask
const questions = [
    {
        type: "input",
        name: "username",
        message:  "What is your GitHub username?"
    }, 
    {
        type: "input",
        name: "title",
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

    // Need to do the API call to Github

    // after the API call, Create the readme file

    // write data to readme.md
    writeToFile("readme.md", generateMarkdown(answers))
})
 





// =================== Provided functions ======================

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err){
        if(err){
            console.log(err);
        }
            console.log("Data entered!");
            // console.log(typeof data);
    });
}



function init() {

}

init();