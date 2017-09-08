//load modules
var express = require('express');
var fs = require('fs');

//router
var Router = express.Router();

//laat installLocatie
var bestandLocatie = fs.readFileSync('./temp/installLocatie.txt');

//config
var config = JSON.parse(fs.readFileSync('./config.json'));

//tetminal color
var consoleColor = require(bestandLocatie + '/ConsoleColor.js');

//home pagina na inloggen
Router.get('/', function(req, res){
	res.render('Home.ejs');
});

//mail allert
Router.get('/mailAllert', function(){
	res.render('MailAllert.ejs');
});


module.exports = Router;

//terminal bericht
consoleColor.log('Alle routers zijn geladen');