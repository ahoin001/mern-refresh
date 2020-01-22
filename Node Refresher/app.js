
const fs = require('fs');

const userName = 'Alex';

// create a file with name and data and a callback function that gets an error object 
fs.writeFile('user-data.txt',`Name: ${userName}`, (errorObjectThatCanBeNamedAnything) => {

    if (errorObjectThatCanBeNamedAnything) {
        console.log('++++++===================================++++'+errorObjectThatCanBeNamedAnything+'++++++===================================++++')
        return;
    }
    console.log('WROTE THE FILE')
}
)