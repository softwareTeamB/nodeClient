//load modules
var bodyParser = require('body-parser');
var express = require('express');
var fs = require('fs');

//router
var Router = express.Router();

//Use middleware
Router.use(bodyParser.json());
Router.use(bodyParser.urlencoded({extended: true}));

//laat installLocatie
var bestandLocatie = fs.readFileSync('./temp/installLocatie.txt');

//terminal color
var consoleColor = require(bestandLocatie + '/ConsoleColor.js');

//mail allert input
Router.get('/', function(){

	//postData
	var postData = req.body;

	



});

//router toegangkelijk maken
module.exports = Router;

//terminal bericht
consoleColor.log("Nieuwe account router is geladen");