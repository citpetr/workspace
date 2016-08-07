var pictureLogo = "lepra";

function changeTextColor() {
    var access = document.getElementById("second");
    access.setAttribute("style", "color:#" + randomColor());
}

function chngPicture() {
    var access = document.getElementById("lepra");
    if (pictureLogo == "lepra") {
        access.setAttribute("src", "pikachou.png");
        pictureLogo = "pikachou";
    } else {
        access.setAttribute("src", "lepra1.png");
        pictureLogo = "lepra";
    }

}

function showMustGoOn() {
    var accessOne = document.getElementById("first");
    var accessTwo = document.getElementById("second");
    var accessThree = document.getElementById("lepra");
    accessOne.innerHTML = "";
    accessOne.setAttribute("style", "box-shadow: 0px 0px 0px");
    accessTwo.setAttribute("style", "margin-right: auto;");
    accessTwo.setAttribute("style", "margin-left: auto;");
    accessTwo.setAttribute("style", "width: 600;");
    accessTwo.innerHTML = "<div id=\"video\"><video controls width=\"600 px\" src=\".. /video/cs50-01.mp4 \"></video></div>";


}

function changeShadow() {
    var access = document.getElementById("first");
    if (access.innerText != "") {
        var argument = "box-shadow:" + " " + randomizer() + " " + randomizer() + " " + randomizer() + " #" + randomColor();
        access.setAttribute("style", argument);
    } else {
        access.setAttribute("style", "box-shadow: 0px 0px 0px");
    }
}

function randomColor() {
    var color = Math.floor(Math.random() * 999999);
    return color;
}

function randomizer() {
    var rand = Math.floor(Math.random() * 15);
    return rand + "px";
}