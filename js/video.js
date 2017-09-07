function temp() {
    $('#fullvideo').css("width", "100%");
    $(".headline").css("display", "none");
    $(".close-btn").css("display", "block");
    $("video")[0].pause();
    $("video")[1].play();
    $("#top-line-wrap").slideUp();
    $("#logo").slideUp();
    $("#navigation-bar").slideUp();
    $("#bs-example-navbar-collapse-1").slideUp();
    $("#homevid").slideUp();
    $("#main-section").slideUp();
    $("#panelcontainer").slideUp();
    $("#secondcontainer").slideUp();
    $("#mapcontainer").slideUp();
    $("#footercontainer").slideUp();
    $("#fullvideo").css("display", "block");
    $("#fullvideo").height(window.innerHeight - 5);
    x = (window.innerWidth - $("#fullvideo").width()) / 2;
    //$("#fullvideo").css("margin-left", x+"px");
    $("video")[1].currentTime = 0;
    $("#fullvideo").prop("muted", false);
}

function tempoff() {
    $("video")[1].pause();
    $(".headline").css("display", "block");
    $(".close-btn").css("display", "none");
    $("#homevid").slideDown();
    $("video")[0].play();
    $("#top-line-wrap").slideDown();
    $("#logo").slideDown();
    $("#navigation-bar").slideDown();
    ///$("#bs-example-navbar-collapse-1").slideDown();
    $("#main-section").slideDown();
    $("#panelcontainer").slideDown();
    $("#secondcontainer").slideDown();
    $("#mapcontainer").slideDown();
    $("#footercontainer").slideDown();
    $("#fullvideo").css("display", "none");
    $("#fullvideo").prop("muted", true);
}

$(window).resize(function() {
    $("#fullvideo").height(window.innerHeight - 5);
    x = (window.innerWidth - $("#fullvideo").width()) / 2;
    $("#fullvideo").css("margin-left", x+"px");
});

