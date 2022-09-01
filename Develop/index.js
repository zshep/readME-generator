// packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer")
const fs = require('fs'); //read/write files


// array of objects hold the questions to use with inguirer
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
        default: "Missing Title",
    },
    {
        type: "input",
        message: "Please write a description for your project",
        name: "description",
        default: "Missing description",
    },
    {
        type: "input",
        message: "What are the installation instructions for your project?",
        name: "install",
        default: "Missing installation",

    },
    {
        type: "input",
        message: "What are the instructions to use for your project?",
        name: "use1",
        default: "Missing instructions 1"
    },
    {
        type: "input",
        message: "What are some examples that your project can be used for?",
        name: "use2",
        default: "Missing exampes of instructions",
    },
    {
        type: "confirm", 
        message: "Where there any contributors to your project?",
        name: "credit1",
        default: false,
    },
    {
        type: "input",
        message: "Please list type their name",
        name: "credit2",
        default: "Missing contributor names",
        when: (answers) => answers.credit1 === true,
    },
    {
        type: "input", 
        message: "What are their github usernames?",
        name: "credit3",
        default: "Missing contributor github links",
        when: (answers) => answers.credit1 === true,
    }, //create way to add more contributors 
    {
        type: "list",
        message: "How would you want to set up your contributions section?",
        name: "contributions",
        choices: ["Use Contributor Convenant", "Create Own", "Ignore Section"],
        
    },
    {
        type: "input", //create way to list more than one test
        message: "Describe a test?",
        name: "test",
        default: "Missing tests",
    },
    {
        type: "checklist",
        message: "What licenses would you like to add to your project? Select all that you would like",
        name: "license",
        choices: ["Apache 2.0 License", "BSD 3-Clause License", "CC0", "The Mit License"], //grab a list of liscenses for the user to pick
        
    },
    {
        type: "input",
        message: "What is your github username?",
        name: "github",
        default: "missing github username"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email",
        missing: "email address",
        default: "missing email address",
        //validation:,
    },
];



// TODO: Create a function to write README file
function writeToFile(answer) {
    //creating variables from the user answers
    title = answer.title;
    description = answer.description;
    Install = answer.install;
    license = answer.license;
    tests = answer.test;
    github_name = answer.github;
    email = answer.email;
    //debugging
    console.log(title);
    console.log(tests);
    console.log(description);
    
    // fs.open("ReadME.md", "rw", (err, fd) => {
    //     fs.write(fd ,)


    // })

    //writing to file
    fs.writeFile('README.md', title, (err) => err ? console.error(err) : console.log('Success with install!')
    );
    fs.appendFile('README.md', description, (err) => err ? console.error(err) : console.log('Success with description!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        //
        .then(answer => {
            
            //debugging
            console.table(answer);
            //starting the
            writeToFile(answer);
          
        })

}
// Function call to initialize app
init();

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







// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README