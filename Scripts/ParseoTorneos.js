var xmlhttp, xmlDoc;
xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "texto.txt", false);
xmlhttp.send();
xmlDoc = xmlhttp.response;
document.getElementById("contTrnRes").innerHTML = xmlDoc;
