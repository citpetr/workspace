var tenArr = function() {
    for (var a = 0; a < 10; a++) {
        var arr = [];
        for (var i = 0; i < 10; i++) {
            var b = Math.round(Math.random() * 99 + 1);
            arr.push(b);
        }
        console.log(arr);
    }
}

tenArr();