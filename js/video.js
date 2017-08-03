function showfullvideo() {
    $("#homevid").addClass("homevideo");
    $("video").prop("muted", false);
    $(".headline").css("display", "none");
    $(".close-btn").css("display", "block");
    $("video")[0].pause();
    $("#top-line-wrap").slideUp();
    $("#logo").slideUp();
    $("#navigation-bar").slideUp();
    $("#bs-example-navbar-collapse-1").slideUp();
    setTimeout(function() {
        $('video source').attr('src', "img/fullvideo.mp4");
        $("video")[0].load();
    }, 500);
    $("#main-section").slideUp();
    $("#panelcontainer").slideUp();
    $("#secondcontainer").slideUp();
    $("#mapcontainer").slideUp();
    $("#footercontainer").slideUp();
    $(".homevideo").height(window.innerHeight - 5);
    document.getElementById("homevid").oncanplay = function() {
        x = (window.innerWidth - $(".homevideo").width()) / 2;
        $(".homevideo").css("margin-left", x+"px");
    };
}

$(window).resize(function() {
    $(".homevideo").height(window.innerHeight - 5);
    x = (window.innerWidth - $(".homevideo").width()) / 2;
    $(".homevideo").css("margin-left", x+"px");
});


function undofullvideo() {
    $("#homevid").removeClass("homevideo");
    $("video").prop("muted", true);
    $(".headline").css("display", "block");
    $(".close-btn").css("display", "none");
    $("video")[0].pause();
    $("#top-line-wrap").slideDown();
    $("#logo").slideDown();
    $("#navigation-bar").slideDown();
    $("#bs-example-navbar-collapse-1").slideDown();
    setTimeout(function() {
        $('video source').attr('src', "img/videoback.mp4");
        $("video")[0].load();
    }, 500);
    $("#main-section").slideDown();
    $("#panelcontainer").slideDown();
    $("#secondcontainer").slideDown();
    $("#mapcontainer").slideDown();
    $("#footercontainer").slideDown();
    $("#homevid").css("margin-left", "0");
    $("#homevid").css("height", "auto");
    $("#homevid").css("width", "100%");
}