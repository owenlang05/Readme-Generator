// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown');
const { error } = require('console');
// TODO: Create an array of questions for user input
const questions = 
    ['What is the project title? : ',
     'Enter the projects description: ', 
     'Enter the installation instructions: ',
     'How to use the project: ',
     'How can others contribute: ',
     'How to test the project: ',
     'Choose a license: ',
     'Github Username: ',
     'Email Address: '];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err) : console.log('Success!')
    })
}

// TODO: Create a function to initialize app
function init() {
    
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
            'name': 'contribute'
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
            'choices': ['MIT', 'GPL', 'BSD', 'Apache', 'None']
        }, 
        {
            'type': 'input',
            'message': questions[7],
            'name' : 'github'
        },
        {
            'type': 'input',
            'message': questions[8],
            'name' : 'email'
        }
    ])
    .then((answers) => {
        let readme = generateMarkdown(answers)
        writeToFile('README.md', readme)
    })
}

// Function call to initialize app
init();
