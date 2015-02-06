$(document).ready(function() {
	var dimmer = $('#dimmer');
	dimmer.hide();
	var carousel = $('.carousel');
	carousel.hide();

	var z = 100;
	var grid = $('.grid');
	var tiles = $('.tile');
	var msnry = null;

	// var shufBack = $('#shuffle-background');
	// shufBack.css('left', grid.position().left);
	// shufBack.css('top', grid.position().top);

	// tiles.each(function(i) {
	// 	var tile = $(this);
	// 	tile.attr('data-id', i);
	// });

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
		// shufBack.show();
		// $('#shuffleBackground').remove();
		// $('.grid').prepend('<img id="shuffleBackground" src="images/Shuffle Background.png" style="width: 100%">');
		grid.css('background-image', 'url("images/Shuffle Background.png")');

		grid.css('height', $(window).height() - 64 - 90);
		// var tiles = $('.tile');
		tiles.draggable({
			start: function() {
				$(this).css('z-index', z++);
			}
		});
		tiles.draggable('enable');
		// tiles.css('position', 'absolute');
		var gridw = grid.width();
		var gridh = grid.height();
		// var gridw = $(window).width();
		// var gridh = $(window).height();
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

		// if (msnry != null) {
		// 	msnry.destroy();
		// 	msnry = null;
		// }
	});

	$('#togrid').click(function() {
		// shufBack.hide();
		grid.css('background-image', 'none');

		// var tiles = $('.tile');
		if (tiles.is(".ui-draggable")) {
			tiles.draggable('disable');
		}
		// tiles.css('position', 'relative');
		// if (msnry == null) {
		msnry = new Masonry('.grid', {
			"gutter": 16
		});
		// }
	});

	msnry = new Masonry('.grid', {
		"gutter": 16
	});

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
