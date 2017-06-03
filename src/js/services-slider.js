$(document).ready(function(){
	var services_slider = $('.slider-content-list');

	services_slider.slick({
		infinite: false,
		arrows: false,
		autoplay: false,
		infinite: true,
		autoplaySpeed: 5000,
		speed: 600,
		slidesToShow: 1,
		slidesToScroll: 1,
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

	/*--------Have the first shape selected on page load--------*/

	$(".slider-indicators-container .indicator-dot").first().addClass("active");

	/*--------END: Have the first shape selected on page load--------*/

	/*------------Change active shape on click------------*/
	$(".slider-indicators-container .indicator-dot").on("click", function(e){
		e.preventDefault();
		var clicked_dot_ind = $(this).index();
		$(".slider-indicators-container .indicator-dot").removeClass("active");
		$(this).addClass("active");
		services_slider.slick("slickGoTo", clicked_dot_ind);

	});
	/*------------END: Change active shape on click------------*/

	/*------------Change active shape on slide change------------*/
	services_slider.on("beforeChange", function(event, slick, currentSlide, nextSlide){
		var base_left = 14;

		var curSlide = nextSlide;
		$(".slider-indicators-container .indicator-dot").removeClass("active");
		$(".slider-indicators-container .indicator-dot").eq(curSlide).addClass("active");

//		setTimeout(function(){
			$(".service-slider-indicator").css({left: "calc("+curSlide+"*20% - "+base_left+"px)"});
//		}, 200);

	});
	/*------------END: Change active shape on slide change------------*/
});