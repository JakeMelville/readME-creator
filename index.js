const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils');

//create my array of questions for the user input, will be more questions
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of readMe?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of application:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information:'
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'Please provide contribution guidlines:'
    },
    {
        type: 'input',
        name: 'instructions',
        message: 'Please provide test instructions:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license is your application using?',
        choices: ['MIT', 'APACHE', 'NONE']
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',

    }
]
//function to write the readME file using the user input

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

//write the function to initialize the application

function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        console.log("generating your readme");
        writeToFile('readMe.md', generateMarkdown({...inquirerResponses}))
    })
}
init();

