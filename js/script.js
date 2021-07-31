//the loader to stop
$(window).on("load", function() {

	$(".loader .inner").fadeOut(400, function(){
		$(".loader").fadeOut(550);

	});

	//for img in the viewport to not overlap eachother
		$(".items").isotope( {
		filter: '*',
		animationOptions: {
			duration: 1400,
			easing: 'linear',
			queue: false
		}

	});

});


//for img slides appears
$(document).ready(function() {

	$('#slides').superslides({ // codes that activated the slides -
	animation: 'fade',
	play: 2000,
	pagination: false //rid of the pagination
	});

	//title typed speed
	var typed = new Typed(".typed", {
		strings: ["Hosting Epic Events | Driven for Charity | Contribute to an Amazing Cause"],
		typeSpeed: 90,
		loop: true,
		startDelay: 900,
		showCursor: false
	});

});

//for img slides2 appears
$(document).ready(function() {

	$('#slides2').superslides({ // codes that activated the slides -
	animation: 'fade',
	play: 2000,
	pagination: false //rid of the pagination
	});

	var slide = new Slide("", {
		strings: [""],
		typeSpeed: 90,
		loop: true,
		startDelay: 900,
		showCursor: false
	});
	
});