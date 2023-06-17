/*Write a node js script using file system which will 
- create a new file 
- add data to a file
- append data to a file
- read an html file and display it on the browser
 */

const fs = require('fs');
const http = require('http');

// Create a new file
fs.writeFile('example.txt', 'This is a new file.', (err) => {
  if (err) {
    console.error('Error creating a new file:', err);
    return;
  }
  console.log('New file created successfully!');
});

// Add data to a file
fs.writeFile('example.txt', 'This is some new data.', { flag: 'a' }, (err) => {
  if (err) {
    console.error('Error adding data to the file:', err);
    return;
  }
  console.log('Data added to the file successfully!');
});

// Append data to a file
fs.appendFile('example.txt', '\nThis is additional data.', (err) => {
  if (err) {
    console.error('Error appending data to the file:', err);
    return;
  }
  console.log('Data appended to the file successfully!');
});

// Read an HTML file and display it on the browser
http.createServer((req, res) => {
  fs.readFile('index.html', (err, data) => {
    if (err) {
      console.error('Error reading HTML file:', err);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
      return;
    }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  });
}).listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
