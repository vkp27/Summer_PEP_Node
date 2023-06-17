// var http = require('http');
// var module1 = require("./module1");
// var module2 = require("./module2");
// var fs = require('fs');

// http.createServer(function(req, res) {
//     fs.readFile('index.html', function(err, data) {
//         res.writeHead(200, {
//             'Content-Type': 'text/html'
//         });
//         res.write(data);
//         res.write("Module imported - " + module2.sayHello() + " on date - " + module1.getDate());
//         res.end("Helloooo");
//     })
    
// }).listen(8080);

// var http = require('http');
// http.createServer(function(req, res) {
//     res.writeHead(200, {
//         'Content-Type': 'text/html'
//     });
//     res.end("Hello World!");
// }).listen(8080);

// var fs = require('fs');
// fs.writeFile('mynewfile3.txt', 'Hello Content!', function(err) {
//     if (err) {
//         console.error('An error occurred while writing the file:', err);
//     } else {
//         console.log('Content replaced in the file successfully.');
//     }
// });

// var fs = require('fs');
// fs.rename('mynewfile1.txt','myrenamedfile.txt', function(err) {
//     if (err) {
//         console.error('An error occurred while renaming the file:', err);
//     } else {
//         console.log('file renamed successfully');
//     }
// });

// function multiplyByTwo(number, callback) {
// const result = number * 2;
//     callback(result);
// }

// function callback(result) {
//     console.log('Result:', result);
// }

// multiplyByTwo(5, callback);
  
// var calculateSum = (numbers, callback) => {
//     const sum = numbers.reduce((acc, curr) => acc + curr, 0);
//     callback(sum);
// }

// var callback = (sum) => {
//     console.log('Sum:', sum);
// }

// calculateSum([2, 4, 6, 8], callback);
  
// var getUserData = (callback) => {
//     setTimeout(() => {
//       const userData = {
//         name: 'John Doe',
//         email: 'johndoe@example.com',
//         age: 25
//       };
//       callback(userData);
//     }, 2000);
// }
    
// function callback(userData) {
//     console.log('User Data:');
//     console.log(userData);
// }
    
//   getUserData(callback);
      
    // var getRandomNumber = () => {
    //     return new Promise((resolve, reject) => {
    //     const randomNumber = Math.floor(Math.random() * 10) + 1;
    
    //     if (randomNumber >= 5) {
    //         resolve(randomNumber);
    //     } else {
    //         reject(new Error('Generated number is less than 5'));
    //     }
    //     });
    // }
    
    // var generateRandomNumber = async() => {
    //     try {
    //     const number = await getRandomNumber();
    //     console.log('Resolved:', number);
    //     } catch (error) {
    //     console.error('Rejected:', error.message);
    //     }
    // }
    
    // generateRandomNumber();
  
    // var fs = require('fs');
    // var checkFileExists = (filePath) => {
    // return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //     fs.access(filePath, fs.constants.F_OK, (error) => {
    //         if (error) {
    //         reject(new Error('File does not exist'));
    //         } else {
    //         resolve();
    //         }
    //     });
    //     }, 1000);
    // });
    // }

    // checkFileExists('myrenamedfile.txt')
    // .then(() => {
    //     console.log('File exists');
    // })
    // .catch((error) => {
    //     console.error('Error:', error.message);
    // });

    // var multiplyByTwo = (number, callback) => {
    //     const result = number * 2;
    //     callback(result);
    // }
    // var callback = (result) => {
    //     console.log('Result:', result);
    // }
        
    // multiplyByTwo(5, callback);
    
    var url = require('url');
    var adr = 'https://www.amazon.in/Red-Lemon-Titanium-Multifunctional-Waterproof/dp/B09ZYQH7C5/?_encoding=UTF8&pd_rd_w=7Do4f&content-id=amzn1.sym.82b4a24f-081c-4d15-959c-ef13a1d3fa4e&pf_rd_p=82b4a24f-081c-4d15-959c-ef13a1d3fa4e&pf_rd_r=BA62KT3KXZSC21MM45WK&pd_rd_wg=S1MLV&pd_rd_r=da66bcf0-cb22-4aef-896f-0cd58e705301&ref_=pd_gw_ci_mcx_mr_hp_atf_m';
    var q = url.parse(adr, true);
    console.log(q);