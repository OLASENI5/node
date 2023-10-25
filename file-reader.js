const fs = require('fs');

// Create welcome.txt with content "Hello Node"
fs.writeFileSync('welcome.txt', 'Hello World');

// Read and console.log data from welcome.txt
const data = fs.readFileSync('welcome.txt', 'utf8');
console.log(data);
