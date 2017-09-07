$(document).ready(function() {
	if ($(".container").css("width") == $(window).innerWidth() + "px") {
		$("#captionpanel1").removeClass("imgcaption");
		$("#captionpanel2").removeClass("imgcaption");
		$("#captionpanel3").removeClass("imgcaption");
		$("#captionpanel4").removeClass("imgcaption");
		$(".testclass2").removeClass("col-sm-6");
		$(".testclass2").removeClass("col-xs-6");
		$(".testclass2").addClass("col-sm-12");
		$(".testclass2").addClass("col-xs-12");

		$(".mobile-hack").addClass("row");
		$(".mobile-hack-column").addClass("col-sm-6");
		$(".mobile-hack-column").addClass("col-xs-6");
		$("#panel-container-main-row").removeClass("zoomonhover");
		$(".mobile-hack").css("padding", "0 10px");
	}

	else {
		$("#captionpanel1").addClass("imgcaption");
		$("#captionpanel2").addClass("imgcaption");
		$("#captionpanel3").addClass("imgcaption");
		$("#captionpanel4").addClass("imgcaption");
		$(".testclass2").addClass("col-sm-6");
		$(".testclass2").addClass("col-xs-6");
		$(".testclass2").removeClass("col-sm-12");
		$(".testclass2").removeClass("col-xs-12");

		$(".mobile-hack").removeClass("row");
		$(".mobile-hack-column").removeClass("col-sm-6");
		$(".mobile-hack-column").removeClass("col-xs-6");
		$("#panel-container-main-row").addClass("zoomonhover");
		$(".mobile-hack").css("padding", "0");
	}
});

$(window).resize(function() {
	if ($(".container").css("width") == $(window).innerWidth() + "px") {
		$("#captionpanel1").removeClass("imgcaption");
		$("#captionpanel2").removeClass("imgcaption");
		$("#captionpanel3").removeClass("imgcaption");
		$("#captionpanel4").removeClass("imgcaption");
		$(".testclass2").removeClass("col-sm-6");
		$(".testclass2").removeClass("col-xs-6");
		$(".testclass2").addClass("col-sm-12");
		$(".testclass2").addClass("col-xs-12");

		$(".mobile-hack").addClass("row");
		$(".mobile-hack-column").addClass("col-sm-6");
		$(".mobile-hack-column").addClass("col-xs-6");
		$("#panel-container-main-row").removeClass("zoomonhover");
		$(".mobile-hack").css("padding", "0 10px");
	}

	else {
		$("#captionpanel1").addClass("imgcaption");
		$("#captionpanel2").addClass("imgcaption");
		$("#captionpanel3").addClass("imgcaption");
		$("#captionpanel4").addClass("imgcaption");
		$(".testclass2").addClass("col-sm-6");
		$(".testclass2").addClass("col-xs-6");
		$(".testclass2").removeClass("col-sm-12");
		$(".testclass2").removeClass("col-xs-12");

		$(".mobile-hack").removeClass("row");
		$(".mobile-hack-column").removeClass("col-sm-6");
		$(".mobile-hack-column").removeClass("col-xs-6");
		$("#panel-container-main-row").addClass("zoomonhover");
		$(".mobile-hack").css("padding", "0");
	}
});