window.onload = init;

function init() {
    setTimeout(showMessage, 3000);
}

function showMessage() {
    var message = document.getElementById("message");
    message.innerHTML = "Прошло 3 секунды..."

}