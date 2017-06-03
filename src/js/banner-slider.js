$(document).ready(function(){

	var slider = $('.banner-content-slider-list');

	slider.slick({
		infinite: false,
		arrows: false,
		autoplay: true,
		infinite: true,
		autoplaySpeed: 3000,
		fade: true,
		mobileFirst: true,
		draggable: true,
		responsive: [{
			breakpoint: 1200,
			settings: {
				draggable: false
			  }
			}
		]
	});

});