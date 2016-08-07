function changeBackColor() {
    var defColor = 193355;
    var accessOne = document.getElementById("button1");
    for (var i = 0; i < 4000; i++) {
        defColor++;
        var currentColor = "background-color: #" + defColor;
        accessOne.setAttribute("style", currentColor);
        console.log(currentColor);
    }
}