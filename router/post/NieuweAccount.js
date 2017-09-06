//load modules
var bodyParser = require('body-parser');
var CryptoJS = require("crypto-js");
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

	//gebruik de variable
	var username = postData.username;
	var password = postData.password;
	var passwordAgain = postData.passwordAgain;

	// Encrypt 
	var encryptData = CryptoJS.AES.encrypt(password, password);

	//sla het wachtwoord op
	fs.writeFile(bestandLocatie + "/temp/wachtwoordBestand.txt", encryptData,function(err){
		if(err){

			//terminal bericht
			consoleColor.error("Er is een probleem op wachtwoord bestand op te slaan");

			//stuur door naar de error pagina
			res.redirect('/error/postNieuweAccount');
		} else {

			//terminal bericht
			consoleColor.log("Wachtwoord bestand is aangemaakt");

			//naar inlog scherm
			res.redirect('/');
		}
	});
});


//router toegangkelijk maken
module.exports = Router;

//terminal bericht
consoleColor.log("Nieuwe account router is geladen");