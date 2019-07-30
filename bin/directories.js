const fs = require('fs');
const path = require('path');
const files = require('./files');
const rimraf = require('rimraf')
"use strict";

module.exports.start = () => {
    cleanRemnant();
    generateUi5Dirs();
    files.start();
}

const directoryNames = ['/public', '/public/controller', '/public/view', '/public/model', '/public/css', '/public/i18n',
                        '/public/test', '/public/test/intgration', '/public/test/integration', '/public/test/unit'];

function cleanRemnant() {
    let remnantPath = path.join(process.cwd(), '/public');
    try {
        var dirExists = fs.existsSync(remnantPath);
    } catch (err) {
        throw err;
    }
    if (dirExists) {
        try {
            rimraf.sync(remnantPath);
        } catch (err) {
            throw err;
        }
    }
}

function generateUi5Dirs() {
    directoryNames.forEach((dirName) => {
        let dirPath = path.join(process.cwd(), dirName);
        try {
            fs.mkdirSync(dirPath);
        } catch (err) {
            throw err;
        }
    });
}