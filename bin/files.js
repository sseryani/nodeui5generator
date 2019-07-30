const fs = require('fs');
const path = require('path');
const index = require('../index');
"use strict";

var fileToRelativePathMap = {
    'Component.js': 'public/Component.js',
    'index.js': 'public/index.js',
    'index.html': 'public/index.html',
    'manifest.json': 'public/manifest.json',
    'App.view.xml': 'public/view/App.view.xml',
    'sample.view.xml': 'public/view/sample.view.xml',
    'i18n.properties': 'public/i18n/i18n.properties',
    'style.css': 'public/css/style.css',
    'App.controller.js': 'public/controller/App.controller.js',
    'BaseController.js': 'public/controller/BaseController.js',
    'NotFound.controller.js': 'public/controller/NotFound.controller.js',
    'NotFound.view.xml': 'public/view/NotFound.view.xml',
    'server.js': '/server.js',
    'package.json': '/package.json'
};

module.exports.start = () => {
    let projectName = index.inputs.projectName;
    let viewName = index.inputs.viewName;
    let projectId = index.inputs.projectId;
    for (let key in fileToRelativePathMap) {
        let data = fs.readFileSync(path.join(__dirname, `templates/${key}`), 'utf8');
        // Read file
        if (key.includes('sample.view.xml')) {
            delete fileToRelativePathMap[key];
            key = `${viewName}.view.xml`;
            fileToRelativePathMap[key] = `public/view/${viewName}.view.xml`;
        }
        // Manipulate data
        while (data.includes('PROJECT_NAME')) {
            data = data.replace('PROJECT_NAME', projectName);
        }
        while (data.includes('PROJECT_ID')) {
            data = data.replace('PROJECT_ID', projectId);
        }
        while (data.includes('VIEW_NAME')) {
            data = data.replace('VIEW_NAME', viewName);
        }

        try {
            let filePath = path.join(process.cwd(), fileToRelativePathMap[key]);
            fs.openSync(filePath, 'w');
            fs.writeFileSync(filePath, data);
        } catch (err) {
            throw err;
        }
    }
} 