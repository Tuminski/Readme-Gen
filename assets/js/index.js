// requiring inquirer, fs, generateMarkdown, and axios
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const axios = require("axios");

// github question for inquirer to ask
const gitHubQuestion = [
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?"
    }
];

// project questions for inquirer to ask
const questions = [
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
    {
        type: "input",
        name: "installation",
        message:  "What do you need to install in order for your application to work?"
    },
    {
        type: "input",
        name: "usage",
        message:  "How do you use your application?"
    },
];


// call combinedData function when you run node index.js
combinedData();


// async function to combine all data from the inquirer prompts
async function combinedData() {
    try {

        // ask user for their github username
        await inquirer.prompt(gitHubQuestion).then(function(response){
            // console.log(response);   // <----- console.logs an object
            // console.log(response.username);
            return username = response.username; // <------ this is a string
        });
        
        // console.log(username);

        // use username from above to make an axios call to get user's image
        await axios
            .get(`https://api.github.com/users/${username}`)
            .then(function(res){
                // console.log(res.data.avatar_url);
                // console.log(res.data.email);
                return gitHubImage = res.data.avatar_url; // <-----this is a string
            });

        // console.log(gitHubImage);

        // use username from above to make an axios call to get a user's email
        await axios
            .get(`https://api.github.com/users/${username}`)
            .then(function(res){
                // console.log(res.data.avatar_url);
                // console.log(res.data.email);
                return gitHubEmail = res.data.email;  // <------ this is a string
            });

        // console.log(gitHubEmail);  

        // ask user about their project
        await inquirer.prompt(questions).then(function(response){
            //console.log(response);
            return responses = response;  // <------- response is an object with the answers from inquirer
        });
        
        // console.log(typeof responses);  // <------- this is an object

        // console.log(gitHubImage);
        // console.log(gitHubEmail);
        // console.log(responses);

        // add username, gitHubImage, and gitHubEmail as objects into the responses object
        responses.username = username;
        responses.image = gitHubImage;
        responses.email = gitHubEmail;
        console.log(responses);

        // write data to readme using generateMarkdown
        writeToFile("readme.md", generateMarkdown(responses));

    } catch (err){
        console.log(err);
    }
}




// =================== PROVIDED FUNCTIONS ======================

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err){
        if(err){
            console.log(err);
        }
            console.log("Data entered!");
            // console.log(data);
    });
}



function init() {

}

init();




// ============= NOTES ============================

// ================ WORKING CODE FOR INQUIRER GITHUB INFO ====================

// github questions for inquirer to ask
// const gitHubQuestion = [
//     {
//         type: "input",
//         name: "username",
//         message: "What is your GitHub username?"
//     }
// ];


// inquirer asks github question
// inquirer.prompt(gitHubQuestion).then(function(response){
//     const queryUrl = `https://api.github.com/users/${response.username}`;

//     axios
//         .get(queryUrl)
//         .then(function(res){
            
//             // write the image to the readme file
//             writeToFile("readme.md", generateMarkdown(res));
//         });

// })

// =============================================================================


// =================== WORKING CODE FOR INQUIRER PROJECT INFO ==================

// inquirer asks project questions
// inquirer.prompt(questions).then(function(response){



// // //     // Need to do the API call to Github

// // //     // after the API call, Create the readme file

        
//         console.log(response);
// // //     // write data to readme.md
//         writeToFile("readme.md", generateMarkdown(response));
         


// });

// ==============================================================================