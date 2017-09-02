//load modules
var express = require("express");
var fs = require('fs');
var path = require('path');

//laat config bestand
var config = JSON.parse(fs.readFileSync("config.json"));

//laat consoleColor
var consoleColor = require('./ConsoleColor.js');
var installer = require('./Installer.js');

//laat app
var app = express();

//kijk of temp bestanden bestaat
fs.exists('./temp/installLocatie.txt',function(exists){
    if(!exists){

    	//terminal bericht
    	consoleColor.warn("InstallLocatie.txt is niet gevonden");

    	//roep file maker methoden aan
        installer.folderCheck();
    }
});

//website egine
app.set('view engine', 'ejs');

//website folder name
app.set('views', path.join(__dirname, 'website/html'));

//Load css
app.use('/css', express.static('website/css'));

//Load javascript folder
app.use('/js', express.static('website/js'));

//krijg poort nummer uit config bestand
var poortNummer = config.poort;

//start poort nummer
app.listen(poortNummer, function(){
	consoleColor.log("ClientServer is opgestart");
})