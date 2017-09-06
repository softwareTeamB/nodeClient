//load modules
var bodyParser = require('body-parser');
var cryptoJs = require('crypto-js');
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

//router
Router.post('/', function(req,res){

	//data die er binnen komt
	var postData = req.body;



	console.log(req.body);
})


//router toegangkelijk maken
module.exports = Router;

consoleColor.log("WachtwoordCheck router is geladen");