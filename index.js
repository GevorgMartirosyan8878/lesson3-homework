const fs = require('fs');
const path = require('path');
const readline = require('readline');
const decompress = require('decompress');

// first task
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
//     const dir = path.normalize(answer);
//
//     fs.readFile(dir, 'utf8', (err, data) => {
//         if (err) return console.log(err.message);
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


// third tusk

// unzipping files
// at first add zip file which name is node_modules.zip, or else zip file, but don't forget change name
// console.log('Started unziping, please wait, it can take about 5 min ...')
// decompress('node_modules.zip', 'unzipedModules') // change node_modules.zip name for other zip file
//     .then((res) => {
//         console.log('done')
//     }).catch((err) => {
//     console.log(err.message)
// }).finally( () => {
//     readDirectory(path.join(__dirname, '/unzipedModules'))
// })


// reading directory

// async function readDirectory(pathFile) {
//     const dirItems = await getDir(pathFile);
//     for (let item of dirItems) {
//         if (item === '.idea') {
//             continue;
//         }
//         const filePath = path.join(pathFile, item);
//         const fileLstat = await getLstat(filePath);
//         if(fileLstat.isDirectory()) {
//             console.log('FOLDER: ', item);
//             await readDirectory(filePath);
//         } else {
//             console.log('FILE: ', item);
//         }
//     }
// }
//
// function getDir(path) {
//     return new Promise((resolve) => {
//         fs.readdir(path, async (err, res) => {
//             resolve(res);
//         })
//     })
// }
//
// function getLstat(path) {
//     return new Promise((resolve) => {
//         fs.lstat(path, async (err, res) => {
//             resolve(res);
//         })
//     })
// }

// end of third tusk