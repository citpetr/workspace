
window.onload = function() {
    var abc = startCounter();
    document.writeln(abc());
    document.writeln(abc());
    document.writeln(abc());
    document.writeln(abc());
    document.writeln(abc());
}

function startCounter() {
    var count = 0;

    function plusOne() {
        count++;
        return count;
    }

    return plusOne;
}