
// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'Title',
      message: 'Title of project:',
    },
    {
      type: 'input',
      name: 'Screenshot',
      message: 'link to screenshot:',
    },
    {
      type: 'input',
      name: 'Description',
      message: 'describe project',
    },
    {
      type: 'Input',
      name: 'Installation',
      message: 'installation:',
    },
    {
      type: 'input',
      name: 'Usage',
      message: 'Describe how to use your application',
    },
    {
      type: 'input',
      name: 'Credits',
      message: 'Credits',
    },
    {
      type: 'input',
      name: 'License',
      message: 'license',
    },
  ];
 
  // TODO: Create a function to write README file
function writeToFile(fileName, data) {
  .then((answers) => {
    const readmePageContent = generateREADME(answers);

    fs.writeFile('readme', readmePageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created readme!')
    );
  });
}

// TODO: Create a function to initialize app
function init() {
    promptUser()
      // Use writeFile method imported from fs.promises to use promises instead of
      // a callback function
      .then((answers) => writeFile('readme', generateREADME(answers)))
      .then(() => console.log('Successfully wrote to index.html'))
      .catch((err) => console.error(err));
  };


// Function call to initialize app
init();



  

  






