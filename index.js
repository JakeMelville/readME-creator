const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
// const generateMarkdown = require('generateMarkdown')

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
        name: 'contribution',
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
        choices: ['MIT', 'Apache2.0', 'GPLv3', 'BSD3', 'MPL2.0']
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

const generateMarkdown = (data) =>
`[![License](https://img.shields.io/badge/License-${data.license}-blue.svg)](${data.licenseLink})
# ${data.title} 

### Description:
        ${data.description}
     
## Table of Contents:
* [Installation](#installation:)
* [Usage](#usage:)
* [License](#license:)
* [Contrubting](#contributing:)
* [Tests](#tests:)
* [Questions](#questions:)

### Installation:
        ${data.installation}
     
### Usage:
        ${data.usage}
     
### License:
        Click the ${data.license} badge at the top of the page to learn more about the license coverage of this application.

     
### Contributing:
        ${data.contribution}
     
### Tests:
        ${data.instructions}
     
### Questions?

GitHib Profile Link: github.com/${data.github}
        
Please feel free to reach me at ${data.email} 

** Link to Video Walkthrough ** https://drive.google.com/file/d/1QHfb5mYF4jpyGi2OcqRTfEneKx9D2lUE/view

    `;

module.exports = generateMarkdown;

//write the function to initialize the application


function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        switch(inquirerResponses.license) {
            case 'MIT':
                inquirerResponses.licenseLink = 'https://opensource.org/licenses/MIT';
                break;
            case 'Apache2.0':
                inquirerResponses.licenseLink = 'https://opensource.org/licenses/Apache-2.0';
                break;
            case 'GPLv3':
                inquirerResponses.licenseLink = 'https://opensource.org/licenses/gpl-3.0';
                break;
            case 'BSD3':
                inquirerResponses.licenseLink = 'https://opensource.org/licenses/bsd-3'; 
                break;
            case 'MPL2.0':
                inquirerResponses.licenseLink = 'https://opensource.org/licenses/MPL-2.0';
                break;
            default: ;
        }
        console.log("generating your readme");
        writeToFile('readMe.md', generateMarkdown(inquirerResponses))
    })
    .catch((err) => console.error(err));
}

init();
