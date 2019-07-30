module.exports.validateFileName = function(inputName) {
    let trimmedName = inputName.toString().trim();
    if (trimmedName !== "" && /^[A-z]*$/.test(trimmedName)) {
        return true;
    }
    console.log(`\n \n Invalid input ${inputName} for project name, Please enter only alphabetical characters. \n`);
    console.log('\n Exiting... \n');
    process.exit(1);
    return false;
}

module.exports.validateViewName = function(inputName) {
    let trimmedName = inputName.toString().trim();
    if (trimmedName !== "" && /^[A-z]*$/.test(trimmedName)) {
        return true;
    }
    console.log(`\n \n Invalid input ${inputName} for a view name, Please enter only alphabetical characters. \n`);
    console.log('\n Exiting... \n');
    process.exit(1);
    return false;
}