$(document).ready(function() {
	var dimmer = $('#dimmer');
	dimmer.hide();
	var carousel = $('.carousel');
	carousel.hide();

	var z = 100;
	var grid = $('.grid');
	var tiles = $('.tile');
	var msnry = new Masonry('.grid', {
		"gutter": 16,
		isAnimated: true
	});


	// var shufBack = $('#shuffle-background');
	// shufBack.css('left', grid.position().left);
	// shufBack.css('top', grid.position().top);

	// tiles.each(function(i) {
	// 	var tile = $(this);
	// 	tile.attr('data-id', i);
	// });

	$('#shuffle').click(function() {
		var tiles = grid.children();
		tiles.sort(function() {
			return 0.5 - Math.random();
		});
		tiles.detach().appendTo(grid);
		msnry.layout();
		// grid.masonry('reloadItems');

		// tiles.each(function(i) {
		// 	var tile = $(this);
		// 	tile.attr('data-id', i);
		// });
		// tiles.detach();
		// tiles.appendTo(newgrid);
		 // $('body').append(newgrid);
	  // grid.quicksand(tiles, {
	  // 	duration: 300
	  // });
	});

	// $('#shuffle').click(function() {
	// 	// shufBack.show();
	// 	// $('#shuffleBackground').remove();
	// 	// $('.grid').prepend('<img id="shuffleBackground" src="images/Shuffle Background.png" style="width: 100%">');
	// 	grid.css('background-image', 'url("images/Shuffle Background.png")');

	// 	grid.css('height', $(window).height() - 64 - 90);
	// 	// var tiles = $('.tile');
	// 	tiles.draggable({
	// 		start: function() {
	// 			$(this).css('z-index', z++);
	// 		},
	// 		stop: function(event, ui) {
	// 			// prevent click event:
	// 			$(event.originalEvent.target).one('click', function(e) { e.stopImmediatePropagation(); });
	// 		}
	// 	});
	// 	tiles.draggable('enable');
	// 	// tiles.css('position', 'absolute');
	// 	var gridw = grid.width();
	// 	var gridh = grid.height();
	// 	// var gridw = $(window).width();
	// 	// var gridh = $(window).height();
	// 	tiles.each(function() {
	// 		var tilew = $(this).width();
	// 		var tileh = $(this).height();
	// 		var x = Math.random() * (1 - (tilew / gridw)) * 100;
	// 		var y = Math.random() * (1 - (tileh / gridh)) * 100;
	// 		// $(this).css('left', x + '%');
	// 		// $(this).css('top', y + '%');
	// 		$(this).animate({
	// 			left: x + '%',
	// 			top: y + '%'
	// 		}, 300);

	// 	});

	// 	// if (msnry != null) {
	// 	// 	msnry.destroy();
	// 	// 	msnry = null;
	// 	// }
	// });

	// $('#togrid').click(function() {
	// 	// shufBack.hide();
	// 	grid.css('background-image', 'none');

	// 	// var tiles = $('.tile');
	// 	if (tiles.is(".ui-draggable")) {
	// 		tiles.draggable('disable');
	// 	}
	// 	// tiles.css('position', 'relative');
	// 	// if (msnry == null) {
	// 	msnry = new Masonry('.grid', {
	// 		"gutter": 16
	// 	});
	// 	// }
	// });

	$('#name').click(function() {
		$('#info').slideToggle();
	});

	// $('.header').css('opacity', 0).delay(200).animate({ opacity: 1 }, 500);
	// $('.grid').css('opacity', 0).delay(800).animate({ opacity: 1 }, 2000);

	var showCarousel = function() {
		dimmer.show();
		dimmer.css('height', $(window).height());
		carousel.show();
		carousel.slick({
			slidesToShow: 3,
			arrows: false,
			infinite: false,
			centerMode: true,
			initialSlide: 1
		});		
	}

	$('#tile-pidgin').click(function() {
		var images = [
		"images/Pidgin/pidgin1.png",
		"images/Pidgin/pidgin2.png",
		"images/Pidgin/pidgin3.png",
		"images/Pidgin/pidgin4.png",
		"images/Pidgin/pidgin5.png",
		"images/Pidgin/pidgin6.png",
		"images/Pidgin/pidgin7.png"];
		images.forEach(function(x) {
			carousel.append('<div class="carousel-item"><img src="'+x+'"></div>');
		});
		$('.carousel-item').click(function() {
			carousel.slick('slickGoTo', $(this).data("slick-index"));
		});
		showCarousel();
	});

	dimmer.click(function() {
		// carousel.unslick();
		carousel.slick('unslick');
		carousel.empty();
		carousel.hide();
		dimmer.hide();
	});

});
