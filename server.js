//import the http module that is built into node.js
const http = require('http');
const express = require('express')

const app = express()


app.get('/', (request, response) => {
  throw new Error('oops')
})
app.use((err, request, response, next) => {
  // log the error, for now just console.log
  console.log(err)
  response.status(500).send('Something broke!')
})
//create a function
const requestListener = function (req, res) {
  res.writeHead(200); //write a response to the client
  console.log("User Connected") //log "User Connected" to the console
  res.end("Hello World"); //end the response
}

const createIndex = app.get('/', function(req, res, next) {
    res.render('index', { title: 'title' });
});

const server = http.createServer(createIndex); //create a server object
server.listen(8080);//the server object listens on port 8080
