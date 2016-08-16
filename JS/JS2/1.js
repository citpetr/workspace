window.onload = init;

function init() {
    var images = document.getElementsByTagName("img");
    for (var i = 0; i < images.length; i++) {
        images[i].onclick = showAnswer;
        images[i].setAttribute("width", "200px");
        images[i].setAttribute("width", "200px");
        images[i].setAttribute("style", "box-shadow: 3px 3px 17px")
    }
}

function showAnswer(eventObj) {
    var image = eventObj.target;
    var name = image.id;
    name = name + ".jpg";
    image.src = name;
}