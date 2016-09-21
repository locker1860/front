/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-07-12 11:50:25
 * @version $Id$
 */
var txtButton = document.getElementById("txt");
var jsonButton = document.getElementById("json");
console.log(txtButton.id);
console.log(jsonButton.id);

function myRequest(id) {
	var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            document.getElementById("show").innerHTML = xhttp.responseText;
        }
    };
    if (id == "json"){xhttp.open("GET", "bfg.txt", true);}
    else if (id == "txt"){xhttp.open("GET","data.json",true);}
    
    xhttp.send();
};

txtButton.addEventListener('click', function(){myRequest(txtButton.id);},false);
jsonButton.addEventListener('click', function(){myRequest(jsonButton.id)},false);

// function loadtxt() {
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//         if (xhttp.readyState == 4 && xhttp.status == 200) {
//             document.getElementById("txt").innerHTML = xhttp.responseText;
//         }
//     };
//     xhttp.open("GET", "bfg.txt", true);
//     xhttp.send();
// }

// function loadjson() {
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//         if (xhttp.readyState == 4 && xhttp.status == 200) {
//             document.getElementById("json").innerHTML = xhttp.responseText;
//         }
//     };
//     xhttp.open("GET", "data.json", true);
//     xhttp.send();
// }