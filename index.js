#!/usr/bin/env node

const program = require('commander');
const {prompt} = require('inquirer');
const {validateFileName, validateViewName} = require('./bin/input');
const {start} = require('./bin/directories');
"use strict";

const questions = [{
                type: 'input',
                name: 'projectId',
                message: 'Enter the project id \n',
                validate: validateFileName
        },

        {
                type: 'input',
                name: 'projectName',
                message: 'Enter the project name \n',
                validate: validateFileName
        },

        {
                type: 'input',
                name: 'viewName',
                message: 'Enter the name of the first view \n',
                validate: validateViewName
        },

        {
                type: 'confirm',
                name: 'proceed',
                message: 'WARNING: Any directory called /public and/or any file called server.js in this directory will be overwritten.\n'
        }
];

program
        .version('1.0.0')
        .description('A boilerplate template to set up a OpenUI5 project served up by Node.js');


program
        .command('init')
        .alias('i')
        .description('Initiate setup')
        .action(() => {
                prompt(questions).then(answers => {
                        module.exports.inputs = answers;
                        start();
                });
        });

program.parse(process.argv);