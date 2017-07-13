function showcaption(id) {
    var a = document.getElementById(id).offsetHeight;
    document.getElementById(id).style.bottom = "0px";
}
function hidecaption(id) {
    var a = document.getElementById(id).offsetHeight;
    document.getElementById(id).style.bottom = "-" + (a - 60) + "px";
}
$(document).ready(function() {
    var a = document.getElementById("captionpanel1").offsetHeight;
    document.getElementById("captionpanel1").style.bottom = "-" + (a - 60) + "px";
    var a = document.getElementById("captionpanel2").offsetHeight;
    document.getElementById("captionpanel2").style.bottom = "-" + (a - 60) + "px";
    var a = document.getElementById("captionpanel3").offsetHeight;
    document.getElementById("captionpanel3").style.bottom = "-" + (a - 60) + "px";
    var a = document.getElementById("captionpanel4").offsetHeight;
    document.getElementById("captionpanel4").style.bottom = "-" + (a - 60) + "px";
})

$(window).resize(function() {
    var a = document.getElementById("captionpanel1").offsetHeight;
    document.getElementById("captionpanel1").style.bottom = "-" + (a - 60) + "px";
    var a = document.getElementById("captionpanel2").offsetHeight;
    document.getElementById("captionpanel2").style.bottom = "-" + (a - 60) + "px";
    var a = document.getElementById("captionpanel3").offsetHeight;
    document.getElementById("captionpanel3").style.bottom = "-" + (a - 60) + "px";
    var a = document.getElementById("captionpanel4").offsetHeight;
    document.getElementById("captionpanel4").style.bottom = "-" + (a - 60) + "px";
})