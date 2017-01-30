window.onload = function() {
    //electroAccount(554, 584, 5.7, 120, 120, 120, 115, 113, 112);
    for (var i = 0; i < 100000; i++) {
        changeColor();
        alert(".");
    }
}

function changeColor() {
    var a = Math.floor(Math.random() * 999999);
    var color = "#" + a;
    //document.writeln(color);
    var back = document.getElementById("back");
    back.style.background = color;
}