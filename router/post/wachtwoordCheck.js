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

	//krijg wachtwoord
	var password = postData.password;

	//decrypt
	var bytes  = CryptoJS.AES.decrypt(password.toString(), password);
	var plaintext = bytes.toString(CryptoJS.enc.Utf8);

	if(plaintext == password){

		//private router
		res.redirect('/private/');
	} else {
		consoleColor.error("wachtwoord klopt niet");
	}

	console.log(req.body);
})


//router toegangkelijk maken
module.exports = Router;

consoleColor.log("WachtwoordCheck router is geladen");