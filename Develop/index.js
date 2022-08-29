// packages needed for this application

const inquirer = require("inquirer")
const fs = require('fs'); //read/write files
// array of objects hold the questions to use with inguirer
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "Please write a description for your project",
        name: "description"
    },
    {
        type: "input",
        message: "What are the installation instructions for your project?",
        name: "install",
        
    },
    {
        type: "input",
        message: "What are the instructions to use for your project?",
        name: "use1",
        
    },
    {
        type: "input",
        message: "What are some examples that your project can be used for?",
        name: "use2",       
    },
    {
        type: "input", // make conditional if yes stay in order, if not skip to further question
        message: "Where there any contributors to your project?",
        name: "credit1",
        
    },
    {
        type: "input",
        message: "Please list type their name",
        name: "credit2",
        
    },
    {
        type: "input", 
        message: "What are their github usernames?",
        name: "credit3",
    }, //create way to add more contributors 
    {
        type: "list",
        message: "How would you want to set up your contributions section?",
        name: "contributions",
        choices: ["Use Contributor Convenant", "Create Own" , "Ignore Section"],
        
    },
    {
        type: "input", //create way to list more than one test
        message: "Describe a test?",
        name: "test",
   },
   {
        type: "checklist",
        message: "What licenses would you like to add to your project? Select all that you would like",
        name: "liscense",
        choices: ["", "" , ""], //grab a list of liscenses for the user to pick
    
    },
    {
        type: "input",
        message: "What is your github username?",
        name: "github",
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email",
        //validation:,
    },
];



// TODO: Create a function to write README file
function writeToFile(README, data) { 
    fs.writeFile('README.MD', data, (err) => err ? console.error(err) : console.log('Success!')
    );

}

// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions


// TODO: Create a function to initialize app
function init() { 
    inquirer.prompt( questions)
    .then(answer => {
            console.table(answer);
            console.log(answer.install);
        })

}
// Function call to initialize app
init();





// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README