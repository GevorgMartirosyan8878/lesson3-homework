// first task

const fs = require('fs');
const path = require('path');
const readline = require('readline');
//
// const creatInterface = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })
//
// creatInterface.question('Please enter the path, you want to read: ', checkAndPrintFile)
//
//
// function checkAndPrintFile(answer) {
//     const dir = path.normalize(answer); // normalize path
//
//     fs.readFile(dir, 'utf8', (err, data) => {
//         if (err) return console.log(err.message); // checking for errors, then if ok, reading the file
//         console.log(data)
//         creatInterface.close()
//     })
// }

// end of first task -------

// second task

// const pathName = path.basename('./addresses.csv'); // getting path
// const innerFile = fs.readFileSync(pathName, 'utf-8'); // save file data
//
// // write new json file
// try {
//     fs.writeFileSync('jsonData.json', JSON.stringify(innerFile))
//     console.log(`File is successfully created`)
// } catch (e) {
//     console.log(e.message)
// }

// end of second task -------