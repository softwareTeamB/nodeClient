//load modules
var express = require('express');
var fs = require('fs');

//router
var app = express();

//laat installLocatie
var bestandLocatie = fs.readFileSync('./temp/installLocatie.txt');

//terminal color
var consoleColor = require(bestandLocatie + '/ConsoleColor.js');

//router
app.use('/wachtwoordCheck', require(bestandLocatie + '/router/post/wachtwoordCheck.js'));
app.use('/nieuweAccount', require(bestandLocatie + '/router/post/NieuweAccount.js'));

//router toegangkelijk maken
module.exports = app;

consoleColor.log("Alle post router is geladen");