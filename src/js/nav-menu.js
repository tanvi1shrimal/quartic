$(document).ready(function(){

	var change_time = 200, ts;

	//-----------For shapes on initial screen-----------//

	ts = setInterval(function(){
		$(".initial-shapes-container-item").each(function(i){

			setTimeout(function(){
				$(".initial-shapes-container-item").removeClass("active");
				$(".initial-shapes-container-item").eq(i).addClass("active");
			}, change_time*i);
		});
	}, change_time);

	//-----------END: For shapes on initial screen-----------//

	/*--------------------------------APPROACH SLIDER--------------------------------*/

	var approach_slider = $('.approach-content-list');

	approach_slider.not('.slick-initialized').slick({
		infinite: false,
		arrows: true,
		fade: true,
		infinite: true,
		autoplay: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		mobileFirst: true,
		prevArrow: "<div class='approach-slider-arrow arrow-prev icon-arrow-left approach-slider-left' style='left:0px;'></div>",
		nextArrow: "<div class='approach-slider-arrow arrow-next icon-arrow-right approach-slider-right' style='left:50px'></div>"
	});

	$(".approach-content-list.slick-initialized.slick-slider .slick-prev.slick-arrow").hide();

	approach_slider.slick("slickPause");

	$(".approach-content-list.slick-initialized.slick-slider .slick-prev.slick-arrow").hide();

	/*----Auto changing the shapes on change of the slide----*/

	approach_slider.on("beforeChange", function(event, slick, currentSlide, nextSlide){
		//var curSlide = approach_slider.slick("slickCurrentSlide");
		var curSlide = nextSlide;
		$(".approach-indicators-list .approach-indicators").eq(curSlide).click();
	});

	/*----END: Auto changing the shapes on change of the slide----*/


	/*----------Changing the shape indicator on click----------*/

	$(".approach-indicators-list .approach-indicators").on("click", function(e){
		e.preventDefault();
		var cur_shape, trans_val, scale_val, cur_trans, cur_transX, before_trans, base_trans = -70, move_up,
			cur_transX = "translateX(1px)", new_val_active, new_val_after_ele, move_up_val;
		var clicked_dot_ind = $(this).index();
		var cur_slide = approach_slider.slick('slickCurrentSlide');
		approach_slider.slick("slickGoTo", clicked_dot_ind);

		$(".approach-indicators-list .approach-indicators").removeClass("active-shape translate-position after-ele");
		$(this).addClass("active-shape");


		/*--------------Shape change values for responsive screens--------------*/

		if((window.matchMedia('(max-width: 767px)').matches)){
			scale_val = 4.2,
			cur_shape = -13,
			trans_val = -53,
			before_trans = trans_val;
			move_up_val = base_trans + trans_val * clicked_dot_ind;
			move_up = "translateY("+move_up_val+"px)";
		}else{
			scale_val = 13.2,
			cur_shape = -3,
			trans_val = -200,
			before_trans = -43;
			if(clicked_dot_ind > 1){
				move_up_val = base_trans + trans_val + -20 * clicked_dot_ind;
				move_up = "translateY("+move_up_val+"px)";

			}else{
				move_up_val = base_trans + trans_val;
				move_up = "translateY("+move_up_val+"px)";
			}
		}

		/*--------------Shape change values for responsive screens--------------*/

		$(this).prevAll().addClass("translate-position");
		$(".translate-position .approach-indicators-icon").css("transform", move_up);
		new_val_active = cur_shape * clicked_dot_ind;
		$(".active-shape .approach-indicators-icon").css({"transform" : "scale("+scale_val+") "+cur_transX+" translateY("+new_val_active+"px)",
		"-ms-transform" : "scale("+scale_val+") "+cur_transX+" translateY(calc("+cur_shape+"px * "+clicked_dot_ind+"))"});

		new_val_after_ele = before_trans * clicked_dot_ind;
		$(this).nextAll().addClass("after-ele");
		$(".after-ele .approach-indicators-icon").css("transform", "scale(1) translateX(0) translateY("+new_val_after_ele+"px)");
	});
	/*----------END: Changing the shape indicator on click----------*/


	/*--------------------------------END: APPROACH SLIDER--------------------------------*/


	var nav_time = 250,
		scroll_time = 1000,
		unviel_time, curShapeIndex;

	var scrollTop, screen_ht, section, nav_list_ele, sec_len, sec_no, sec_id, sec_bg_type;

	function activateLink(){
		scrollTop = $(this).scrollTop();
		screen_ht = $(window).height();
		section = $(".section-area");
		nav_list_ele = $(".nav-link-item");
		sec_len = section.length;
		sec_no = parseInt(scrollTop/screen_ht);
		sec_id = section.eq(sec_no).attr("id");
		sec_bg_type = section.eq(sec_no).attr("data-bg");

		$(".navigation-bar").attr("data-nav-bg", sec_bg_type);		//Appears in desktop only
		$(".hamburger-menu").attr("data-hamburger-bg", sec_bg_type); //Appears in mobile+tablet


		/*----------Change the active link on scroll----------*/

		nav_list_ele.removeClass("active-sec");
		$(".section-area").removeClass("current");
		$("#"+sec_id).addClass("current");

		if(sec_id == "approach"){

			if((window.matchMedia('(min-width: 1200px)').matches)){
				unviel_time = 2000;
				$(".initial-screen__header").addClass("translate-down");
				$(".initial-shapes-container").addClass("translate-up");
			}else{
				unviel_time = 1000;
			}
			setTimeout(function(){
				$(".approach-section").removeClass("initial-state");
				clearTimeout(ts);
			}, unviel_time);
			setTimeout(function(){
				curShapeIndex = $(".approach-content-list-item.slick-current").attr("data-slick-index");
				$(".approach-content").addClass("active");
				$(".approach-indicators").eq(curShapeIndex).addClass("active-shape");

				$('.approach-content-list').slick("slickPlay");
				$(".initial-screen").fadeOut();
			}, (unviel_time + 100));
		}

		if(sec_no <= 1){
			nav_list_ele.eq(0).addClass("active-sec");
		}else{
			nav_list_ele.eq(sec_no - 1).addClass("active-sec");
		}

		/*----------END: Change the active link on scroll----------*/
	}

	activateLink();

	/*------For changing the nav style on normal scroll------*/

	$(window).on("scroll", function(){
		activateLink();
	});

	/*------END: For changing the nav style on normal scroll------*/

	/*---------Open/close functionality of nav in mobile---------*/

	$(".open-nav").on("click", function(e){
		$(".nav-btn, .navigation-bar").toggleClass("active");
		e.preventDefault();
	});

	/*---------END: Open/close functionality of nav in mobile---------*/

	/*----------For scroll to section on click of the page links----------*/
	$(".go-to-sec").on("click", function(e){
		e.preventDefault();
		var sec_id = $(this).attr("href");
		var sec_offset = $(sec_id).offset().top;
		var nav_bg_type = $(sec_id).attr("data-bg");
		$(".nav-link-item").removeClass("active-sec");
		$(this).parents(".nav-link-item").addClass("active-sec");

		$('html, body').animate({
			scrollTop: sec_offset
		}, scroll_time);

		setTimeout(function(){
			$(".navigation-bar").attr("data-nav-bg", nav_bg_type);
			$(".sections-container section").removeClass("current");
			$(sec_id).addClass("current");
		}, nav_time);

		setTimeout(function(){
			$(".hamburger-menu").attr("data-hamburger-bg", nav_bg_type);
			$(".sections-container section").removeClass("current");
			$(sec_id).addClass("current");
		}, nav_time);


		/*--------------Only for mobile+tablet: close the nav once a section link is selected--------------*/

		if((window.matchMedia('(max-width: 1199px)').matches)){
			$(".nav-btn, .navigation-bar").removeClass("active");
		}

		/*--------------END: Only for mobile: close the nav once a section link is selected--------------*/

	});
	/*----------END: For scroll to section on click of the page links----------*/

});