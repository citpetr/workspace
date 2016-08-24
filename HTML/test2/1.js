var name = "Hobot";
var secondName = "Brzdysh";

window.onload = nameprint;

function nameprint() {
    var name1 = document.getElementById("testText");
    
    name1.innerHTML = (name + " " + secondName);
}