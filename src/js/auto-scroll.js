$(document).ready(function(){
	var t = 1000, move_to_time = 100, update_time, downTime, upTime;

	var cur_ele, footer, next_ele, next_offset, footer_ofset, prev_ele, first_ele, last_sec, last_sec_offset, prev_offset, sec_no;

	footer = $("footer");
	sec_no = $(".sections-container section").length

	function scrollToNext(){
		clearTimeout(downTime);

		downTime = setTimeout(function(){
			next_ele = cur_ele.next();
			last_sec = $(".sections-container section").last();
			if(next_ele.length > 0){
				next_offset = next_ele.offset().top;

				$('html, body').animate({
					scrollTop: next_offset
				}, t);

				next_ele.addClass("current");
				cur_ele.removeClass("current");
			}
			else{
				last_sec.addClass("current");
			}
		}, move_to_time);
	}

	function scrollToPrev(){
		clearTimeout(upTime);

		upTime = setTimeout(function(){
			prev_ele = cur_ele.prev();
			first_sec = $(".sections-container section").first();

			if(prev_ele.length > 0){

				prev_offset = prev_ele.offset().top;

				$('html, body').animate({
					scrollTop: prev_offset
				}, t);

				prev_ele.addClass("current");
				cur_ele.removeClass("current");

			}else{
				first_sec.addClass("current");
			}
		}, move_to_time);
	}

	if (window.matchMedia('(min-width: 1200px)').matches) {		//For dektop screens only

		//For keypress
		$(window).keydown(function(e){
			var keycode = e.which;

			cur_ele = $(".sections-container section.current");

			if((keycode == 32) || (keycode == 40)){          // If down key or space bar is pressed
				e.preventDefault();
				scrollToNext();

			}else if(keycode == 38){        //If up key is pressed
				e.preventDefault();
				scrollToPrev();
			}
		});


		//For mousewheel
		$(window).on("mousewheel", function(e){
			cur_ele = $(".sections-container section.current");
			e.preventDefault();
			if(e.originalEvent.wheelDelta < 0) { //if mousewheel down, scroll down
				scrollToNext();
			}else{								//if mousewheel up, scroll up
				scrollToPrev();
			}
		});
	}
});