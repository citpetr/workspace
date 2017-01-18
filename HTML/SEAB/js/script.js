var view = {
    displayMessage: function(msg) {
        var message = document.getElementById("messageArea");
        message.innerHTML = msg;
    },
    displayHit: function(location) {
        var loc = document.getElementById(location);
        loc.setAttribute("class", "hit");
    },
    displayMiss: function(location) {
        var loc = document.getElementById(location);
        loc.setAttribute("class", "miss");
    }
};



view.displayHit(11);
view.displayMiss(23);
view.displayMessage("dsfsdfsdf");

