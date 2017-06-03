$(".scroll-down-icon").click(function() {
	$("html, body").animate({
		scrollTop: $("#banner-2").offset().top
	}, 800)
})