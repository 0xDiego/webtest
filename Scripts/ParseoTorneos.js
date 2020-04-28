//const fs = require('fs');
//var files = fs.readdirSync('../XMLs/');

var xmlhttp, xmlDoc;
xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "../XMLs/Tourneys.xml", false);
xmlhttp.send();
xmlDoc = xmlhttp.responseXML;

var TournAr = [];

for(var i = 0; i < xmlDoc.getElementsByTagName("data").length; i++){
	var xmlhttp2, xmlDoc2;
	xmlhttp2 = new XMLHttpRequest();
	xmlhttp2.open("GET", xmlDoc.getElementsByTagName("data")[i].childNodes[0].nodeValue, false);
	xmlhttp2.send();
	xmlDoc2 = xmlhttp2.responseXML;
	TournAr.push(xmlDoc2.getElementsByTagName("name")[0].childNodes[0].nodeValue);
	document.getElementById("Torneo").innerHTML = document.getElementById("Torneo").innerHTML + "<option>" + TournAr[i] + "</option>";
}

function ChargeRes(){
	var j = document.getElementById("Torneo").selectedIndex;
	var xmlhttp2, xmlDoc2;
	
	xmlhttp2 = new XMLHttpRequest();
	xmlhttp2.open("GET", xmlDoc.getElementsByTagName("data")[j].childNodes[0].nodeValue, false);
	xmlhttp2.send();
	xmlDoc2 = xmlhttp2.responseXML;
	
	var tabla = "<tr><th>Posición</th><th>Jugador</th><th>W/L</th></tr>";
	for (var i = 0; i < xmlDoc2.getElementsByTagName("playercount")[0].childNodes[0].nodeValue; i++){
		var aux1 = xmlDoc2.getElementsByTagName("standings")[0];
		var aux2 = aux1.getElementsByTagName("player");
		var Jugador = aux2[i].getAttribute("id");
		tabla = tabla.concat("<tr><td>" + (i + 1) + "</td><td>" + Jugador + "</td><td>WIP</td></tr>");
	}
	
	document.getElementById("contTrnRes").innerHTML = 
		"<h4>" + TournAr[j] + "</h4>" + "<br>" +
		"<div>" + "Fecha: " + xmlDoc2.getElementsByTagName("startdate")[0].childNodes[0].nodeValue + " - Cantidad de jugadores: " + xmlDoc2.getElementsByTagName("playercount")[0].childNodes[0].nodeValue + "</div>" + "<br>" +
		"<table>" + tabla + "</table>";
}
