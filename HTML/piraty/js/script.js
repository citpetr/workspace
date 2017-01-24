var tick = true;

function ticker() {
	if (tick) {
		document.writeln("tick <br>");
		tick = false;
	} else {
		document.writeln("tock <br>");
		tick = true;

	}
}

setInterval(ticker, 1000);
