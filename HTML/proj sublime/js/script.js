window.onload = init();

function init() {
    var images = document.getElementsByTagName('img');
	var touch = document.getElementById("touchPane");
	touch.ontouchstart = touchPrint;
	for(var i = 0; i < images.length; i++) {
		images[i].onmouseover = showAnswer;
	}
}

function showAnswer(eventObj) {
	var image = eventObj.target;

	image.src =("img/") + image.id + ".png";
	setTimeout(reblur, 2000, image);

}

function reblur(image) {
	var name = "img/" + image.id + "-1.png";
	image.src = name;
}

function touchPrint(event) {
	var textArea = document.getElementById('touchText');
	var text = event.touches;
	textArea.innerHTML = text.length;
}