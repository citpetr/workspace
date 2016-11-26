var seconds = 0;
var minutes = 0;
var hours = 0;

document.writeln("HELLO");



if (seconds < 10) {
    setTimeout(addseconds, 1000);
    document.writeln(seconds);
}

function addseconds() {
    seconds++;
}