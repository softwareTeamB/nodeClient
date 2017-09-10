//load modules
var express = require("express");
var fs = require('fs');
var path = require('path');

//kijk of temp bestanden bestaat
fs.exists('./temp/installLocatie.txt',function(exists){
    if(!exists){

    	//terminal bericht
    	consoleColor.warn("InstallLocatie.txt is niet gevonden");

    	//roep file maker methoden aan
        installer.folderCheck();
    } else {

    	consoleColor.log("installLocatie.txt is gevonden");
    }
});

//laat config bestand
var config = JSON.parse(fs.readFileSync("config.json"));

//laat consoleColor
var consoleColor = require('./ConsoleColor.js');

//laat installer
var installer = require('./Installer.js');

//laat core modules
var reqeustData = require('./core/RequestData.js');
var versieCheck = require('./core/VersieCheck.js');

//laat routers
var router = require('./router/Index.js');
var privateGetterRouter = require('./router/privateRouters.js');

//kijk welke versie van de db data is er op de computer
fs.exists('./temp/verieCheck.txt', function(exists){
	if(!exists){

		//terminal waarschuwing bericht
		consoleColor.warn("verieCheck.txt bestaat niet");

		//start versie check op met de restrectie dat het bestand niet word geladen
		


	} else {
		//terminal bericht
		consoleColor.log("VersieCheck word gemaakt");





		
	}
});






//laat app
var app = express();

//app.use
app.use('/', router);
app.use('/post', require(__dirname + '/router/PostRouter.js'));
//app.use('/api', require(__dirname + 'router/apiIndex.js'));

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