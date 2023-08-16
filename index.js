// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = 
    ['What is the project title? : ',
     'Enter the projects description: ', 
     'Enter the installation instructions: ',
     'How to use the project: ',
     'How can others contribute: ',
     'How to test the project: ',
     'Choose a license: '];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    let answers = []
    
    inquirer.prompt([
        {
            'type': 'input',
            'message': questions[0],
            'name' : 'title'
        },
        {
            'type': 'input',
            'message': questions[1],
            'name' : 'description'
        },
        {
            'type': 'input',
            'message': questions[2],
            'name' : 'installation'
        },
        {
            'type': 'input',
            'message': questions[3],
            'name' : 'usage'
        },
        {
            'type': 'input',
            'message': questions[4],
            'name' : 'installation'
        },
        {
            'type': 'input',
            'message': questions[5],
            'name' : 'test'
        },
        {
            'type': 'list',
            'message': questions[6],
            'name' : 'license',
            'choices': ['MIT', 'GPL', 'BSD', 'Apache']
        }
    ])
    .then((answers) => {
        generateMarkdown(answers)
    })
    .catch((error) => {
        if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
        } else {
        // Something else went wrong
        }
     });
}

// Function call to initialize app
init();
