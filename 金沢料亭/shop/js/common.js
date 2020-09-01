
/*************bxslider***************/
$(function(){
	$('#slider1').bxSlider({
		auto:true,
		speed:5000,
		pause:1000
	});

});


/************* feadin ***************/

$(function() {
    var $allMsg = $('#f');
    var $wordList = $('#f').html().split("");
    $('#f').html("");
    $.each($wordList, function(idx, elem) {
        var newEL = $("<span/>").text(elem).css({ opacity: 0 });
        newEL.appendTo($allMsg);
        newEL.delay(idx * 70);
        newEL.animate({ opacity: 1 }, 1100);
    });
});
/*************scroll***************/

$(function(){
	$('a[href^=#]').click(function(){
		var speed = 400;
		var href = $(this).attr("href");
		var target = $(href == "#" || href == ""? 'html' : href);
		var position = target.offset().top;
		$('body,html').animate({scrollTop:position}, speed, 'swing');
		return false;
	});
});









