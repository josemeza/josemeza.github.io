$(document).ready(function() {
	var dimmer = $('#dimmer');
	dimmer.hide();
	var carousel = $('.carousel');
	carousel.hide();

	var z = 100;
	var tiles = $('.grid').children();

	tiles.each(function(i) {
		var tile = $(this);
		tile.attr('data-id', i);
	});

	// $('#shuffle').click(function() {
	// 	var grid = $('.grid');
	// 	// var newgrid = grid.clone();
	// 	// newgrid.addClass("newgrid");
	// 	// newgrid.removeClass("grid");
	// 	var tiles = grid.children();
	// 	tiles.sort(function() {
	// 		return 0.5 - Math.random();
	// 	});
	// 	tiles.each(function(i) {
	// 		var tile = $(this);
	// 		tile.attr('data-id', i);
	// 	});
	// 	// tiles.detach();
	// 	// tiles.appendTo(newgrid);
	// 	 // $('body').append(newgrid);
	//   grid.quicksand(tiles, {
	//   	duration: 300
	//   });
	// });

	$('#shuffle').click(function() {
		var tiles = $('.grid > div');
		tiles.draggable({
			start: function() {
				$(this).css('z-index', z++);
			}
		});
		tiles.css('position', 'absolute');
			// var gridw = $('.grid').width();
			// var gridh = $('.grid').height();
			var gridw = $(window).width();
			var gridh = $(window).height();
		tiles.each(function() {
			var tilew = $(this).width();
			var tileh = $(this).height();
			var x = Math.random() * (1 - (tilew / gridw)) * 100;
			var y = Math.random() * (1 - (tileh / gridh)) * 100;
			// $(this).css('left', x + '%');
			// $(this).css('top', y + '%');
			$(this).animate({
				left: x + '%',
				top: y + '%'
			}, 300);
		});
	});

	$('#togrid').click(function() {
		var tiles = $('.grid > div');
		tiles.draggable('disable');
		tiles.css('position', 'relative');
		var msnry = new Masonry('.grid', {
			"gutter": 16
		});
	});

	var msnry = new Masonry('.grid', {
		"gutter": 16
	});

	$('#name').click(function() {
		$('#info').slideToggle();
	});

	$('.header').delay(200).animate({ opacity: 1 }, 500);
	$('.grid').delay(500).animate({ opacity: 1 }, 500);

	var showCarousel = function() {
		dimmer.show();
		dimmer.css('height', $(window).height());
		carousel.show();
		carousel.slick({
			slidesToShow: 3
		});		
	}

	$('#tile-pidgin').click(function() {
		var images = [
		'<div><img src="images/Pidgin/pidgin1.png"></div>',
		'<div><img src="images/Pidgin/pidgin2.png"></div>',
		'<div><img src="images/Pidgin/pidgin3.png"></div>',
		'<div><img src="images/Pidgin/pidgin4.png"></div>',
		'<div><img src="images/Pidgin/pidgin5.png"></div>',
		'<div><img src="images/Pidgin/pidgin6.png"></div>',
		'<div><img src="images/Pidgin/pidgin7.png"></div>'];
		images.forEach(function(x) {
			carousel.append(x)
		});
		showCarousel();
	});

	dimmer.click(function() {
		// carousel.unslick();
		carousel.empty();
		carousel.hide();
		dimmer.hide();
	});

});
