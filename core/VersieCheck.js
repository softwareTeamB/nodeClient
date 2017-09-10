//load modules
var express = require("express");
var fs = require('fs');
var request = require('request');

//router
var Router = express.Router();

//laat installLocatie
var bestandLocatie = fs.readFileSync('./temp/installLocatie.txt');

//config
var config = JSON.parse(fs.readFileSync('./config.json'));

//tetminal color
var consoleColor = require(bestandLocatie + '/ConsoleColor.js');

//versie exports
exports.versieCheck = function (loadFile) {

	//maak de request url
	var url = config.protocall + "://" + config.serverIp +":"+  config.poort +"/versieCheck";

	//vraag de data op
	request(url, function (error, response, body) {
		console.log('error:', error); // Print the error if one occurred 
		console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
		console.log('body:', body); // Print the HTML for the Google homepage. 

		//vul versieReadSave
		if(loadFile == "true"){
			var versieReadSave = fs.readFileSync(bestandLocatie + '/temp/versieCheck.txt');
		} else {
			var versieReadSave = 0;
		}

		var loadData = "false";
		if(loadData!="false"){

		} else {
			consoleColor.warn("VersieCheck word niet geupdate");
		}
	});
};

//functie
function saveVersieKey(){


}

//terminal bericht
consoleColor.log("VersieCheck is geladen.");