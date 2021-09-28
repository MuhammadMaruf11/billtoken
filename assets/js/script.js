(function ($) {

    'use strict';

	$('#mobile-menu-active').metisMenu();

	$(".open-mobile-menu > a").on("click", function (e) {
		e.preventDefault();
		$(".slide-bar").toggleClass("show");
		$("body").addClass("on-side");
		$('.body-overlay').addClass('active');
		$(this).addClass('active');
	});

	$(".close-mobile-menu > a").on("click", function (e) {
		e.preventDefault();
		$(".slide-bar").removeClass("show");
		$("body").removeClass("on-side");
		$('.body-overlay').removeClass('active');
		$('.open-mobile-menu > a').removeClass('active');
	});

	$('.body-overlay').on('click', function () {
		$(this).removeClass('active');
		$(".slide-bar").removeClass("show");
		$("body").removeClass("on-side");
		$('.open-mobile-menu > a').removeClass('active');
	});

	/*-------------------------------------------
	    Sticky Header
	--------------------------------------------- */

	let win = $(window);
	let sticky_id = $(".header-area");
	win.on('scroll', function () {
		let scroll = win.scrollTop();
		if (scroll < 245) {
			sticky_id.removeClass("sticky-header");
		} else {
			sticky_id.addClass("sticky-header");
		}
	});
	
	/*------------------------------------
        Data-Background
	--------------------------------------*/
	$("[data-background]").each(function () {
		$(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
	});
	
	$("[data-bg-color]").each(function () {
		$(this).css("background", $(this).attr("data-bg-color"))
	});

	new WOW().init();

})(jQuery);
