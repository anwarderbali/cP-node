console.log('HELLO WORLD');

const http = require("http");
const fs = require('fs');

http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/html'});
   
   // Send the response body as "Hello World"
   response.end('<h1>Hello Node!!!!</h1>\n');
}).listen(3000);

// Console will print the message
console.log('Server running at http://127.0.0.1:3000/');



fs.writeFile('welcome.txt', 'Hello Node!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

// fs is the file system module we will see it later
fs.readFile('welcome.txt', function(err, data) {
// res.writeHead(200, {'Content-Type': 'text/plain'});
// res.write(data);
// return res.end();
    console.log(data.toString());
});

console.log("Program Ended");