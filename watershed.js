/*
   Author:   Chris Coraggio
   Date:     3/7/2017
   Purpose:  
   This file serves the following watershed functions,
   which were taken from missouri's buttons:

   LTHIA-LID Spreadsheet
   STEPL Spreadsheet

*/
let express = require("express");
let app = express();
let http = require("http").Server(app);
let PORT_NUMBER = 8000;
let request = require("request");

//-------------------
//--Set up Server----
//-------------------

http.listen(PORT_NUMBER, function(){
	console.log("Listening on port " + PORT_NUMBER);
});


app.get("/", function(req, res){
	console.log("Serving index.html...");
	res.sendFile(__dirname + "/public/index.html");
});

