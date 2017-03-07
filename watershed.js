/*
   Author:   Chris Coraggio
   Date:     3/7/2017
   Purpose:  
   This file serves the following watershed functions,
   which were taken from missouri's buttons:

   LTHIA-LID Spreadsheet
   STEPL Spreadsheet

*/
let http = require('http');
let PORT_NUMBER = 8000;

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Apache!\n');
}).listen(PORT_NUMBER, '127.0.0.1');