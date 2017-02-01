$("#test").click(function() {
    $("test").append("<br>" + "slkdfjslkjflksjdflksdjf" + "<br>" + "sdfhs,dlfhn,sldnflkshdf").css("padding", "5px").css("background-color", "lightgreen").css("color", "darkgrey").css("border", "solid 1px black").animate({ width: 200 }, 3000).animate({ height: 400 }, 3000).css("position", "relative").animate({ left: 100 }, 2000).append("<br>" + "slkdfjslkjflksjdflksdjf" + "<br>" + "sdfhs,dlfhn,sldnflkshdf");
});
$("#hohoho").css("height", "100").css("padding", "5px").css("background-color", "yellow").css("color", "darkgrey").css("border", "solid 1px black").animate({ width: 250 }, 3000).animate({ "border-radius": "20px", opacity: .4 }, 1500).animate({ height: 400 }, 3000);
$("#hohoho").css("position", "relative").animate({ left: 100 }, 2000);
$("hohoho").click(function() {
    $("hohoho").animate({ top: 300 }, 2000);
});


$("#test").click(function() {
    $("#hohoho").animate({
        opacity: 0.25,
        left: "+=50",
        height: "toggle"
    }, 5000, function() {
        // Animation complete.
    });
});