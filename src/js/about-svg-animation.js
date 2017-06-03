// globalVar =  true;
// $(".main-svg-cont").fadeOut();
$(window).on("scroll.test", function() {
  var scrollTop     = $(window).scrollTop(),
        elementOffset = $('.banner-2').offset().top,
        distance      = (elementOffset - scrollTop);
  console.log(distance);
  if(distance <= 250 && distance >=0) {
    $(window).off('.test');
    $(".main-svg-cont").css("opacity", "1");
    // globalVar = false;
    $(".bottom-group").addClass("bottom-group-animate");
    $(".bottom-blocks").addClass("bottom-blocks-animate");
    $(".bottom-block-1, .bottom-block-2, .bottom-block-3").addClass("bottom-block-1-animate");
    $(".falling-block").addClass("appear");
    $(".banner-img-detail").addClass("banner-img-detail-animate");
    var svgAnimate = new Vivus('pb', { duration: 50});
    svgAnimate.play(function() {
      $("#opacityy").addClass("addOpacity");
      $("#background").addClass("addOpacity");
      $("#brain-overlay").css("opacity", 0.1);
  });

  }
   
});
