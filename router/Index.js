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

//Index pagina
Router.get('/', function(req, res){

	//kijk of het wachtwoord bestand bestaat
	fs.exists('./temp/wachtwoordBestand.txt', function(exists){
    if(!exists){

	    	//terminal bericht
	    	consoleColor.warn("wachtwoordBestand.txt is niet gevonden");

	    	//redirect
	    	res.redirect('/maakNieuweAccount');
	    	
	    } else {

	    	//terminal bericht
	    	consoleColor.log("wachtwoordBestand.txt is gevonden");

    		//roep de html pagina op 
			res.render('Index.ejs');
	    }
	});
});

//om een nieuwe account aan te maken
Router.get('/maakNieuweAccount', function(req, res){

	//roep de html pgaina op
	res.render('maakNieuweAccount.ejs');
});

//error pagina
Router.get('/error/:errorRouter', function(req, res){

	//vraag parmeters
	var errorBericht = req.params.errorRouter;

	//consoleTerminal
	consoleColor.error("Er is een error in het systeem. Error is opgetreden bij router : "+errorBericht);

	//sluit de verbinding
	res.send("Er is een error in het systeem");
});



module.exports = Router;

//terminal bericht
consoleColor.log('Alle routers zijn geladen');