/************* bxslider ***************/

// $(function () {
// 	$('#slider').bxSlider({
// 		auto: true,
// 		speed: 3000,
// 		mode: 'fade',
// 		// captions: false
// 	});

// });

/************* globalnav ***************/

var navPos = jQuery('#global-nav').offset().top; // グローバルメニューの位置
var navHeight = jQuery('#global-nav').outerHeight(); // グローバルメニューの高さ
jQuery(window).on('scroll', function () {
	if (jQuery(this).scrollTop() > navPos) {
		jQuery('body').css('padding-top', navHeight);
		jQuery('#global-nav').addClass('m_fixed');
	} else {
		jQuery('body').css('padding-top', 0);
		jQuery('#global-nav').removeClass('m_fixed');
	}
});

/************* colorbox ***************/

$(document).ready(function () {
	$('.group2').colorbox({ rel: 'group2' })
});



/** 青線を消す **/
jQuery(document).on('cbox_closed', function () {
	var reloadOnClosedSettings = jQuery.colorbox.reloadOnClosedSettings;
	if (reloadOnClosedSettings.needReloadParent === true && reloadOnClosedSettings.reloadFunc && (typeof reloadOnClosedSettings.reloadFunc === "function")) {
		reloadOnClosedSettings.reloadFunc();
	}
});


/************* dropdown menu ***************/
$(function () {
	$('#di-manu').dlmenu();

});

/************* scroll ***************/

$(function () {
	$('a[href^=#]').click(function () {
		var speed = 2000;
		var href = $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top - 60;
		$('body,html').animate({ scrollTop: position }, speed, 'easeInOutQuad');
		return false;
	});
});


/************* topbtn ***************/

$(function () {
	var topBtn = $('#pageTop');
	var snsBtns = $('#snsBtns');
	topBtn.hide();
	snsBtns.hide();
	$(window).scroll(function () {
		if ($(this).scrollTop() > 1200) {
			topBtn.fadeIn();
			snsBtns.fadeIn();
		} else {
			topBtn.hide();
			snsBtns.hide();
		}
	});


});






