$(document).ready(function() {
	var aboutSlider = $('.about-slider-content');
	$('.about-slider-content').slick({
		//dots: true,
		infinite: true,
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		mobileFirst: true,
		autoplay: false,
		autoplaySpeed: 5000
	});
	// hover animation ==============================================================
	$(".arrow-next").hover(function() {
		var item_length = $('.about-slider-content li').length;
		var currentSlideIndex = $(".about-slider-content").slick("slickCurrentSlide");
		if(currentSlideIndex != item_length - 1) {
			$(this).toggleClass("slider-arrow-active");
		}
		else {
			$(this).removeClass("slider-arrow-active");
		}
	});
	$(".arrow-prev").hover(function() {
		var currentSlideIndexnext = $(".about-slider-content").slick("slickCurrentSlide")
		if(currentSlideIndexnext != 0) {
			$(this).toggleClass("slider-arrow-active");
		}
		else {
			$(this).removeClass("slider-arrow-active");
		}
	});

	$(".arrow-next").on("click", function() {
		$('.about-slider-content').slick("slickNext");
	});
	$(".arrow-prev").on("click", function() {
		$(".about-slider-content").slick("slickPrev");
	});

	$('.about-slider-content').on('beforeChange', function(event, slick, currentSlide, nextSlide){
  		var left_val, li_wid = parseInt($(".individual-indicators .slide").css("width"));
  		var currentSlideIndex = nextSlide;
		left_val = currentSlideIndex*li_wid;
		$(".about-active-indicator").css(
			"left", left_val
		);
	});

})
