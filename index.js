$(document).ready(function() {
	var dimmer = $('#dimmer');
	dimmer.hide();
	var carousel = $('.carousel');
	carousel.hide();
	var carouselLabel = $('#carousel-label');
	carouselLabel.hide();
	var carouselCaption = $('#carousel-caption');
	carouselCaption.hide();

	var z = 100;
	var grid = $('.grid');
	var tiles = $('.tile');
	// var msnry = new Masonry('.grid', {
	// 	"gutter": 16,
	// 	isAnimated: true
	// });
$('.grid').isotope({
	layoutMode: 'masonry',
	masonry: {
		gutter: 16
	},
	getSortData: {
		id: '[data-id]'
	},
	sortBy: 'id'
});

	// var shufBack = $('#shuffle-background');
	// shufBack.css('left', grid.position().left);
	// shufBack.css('top', grid.position().top);

	// tiles.each(function(i) {
	// 	var tile = $(this);
	// 	tile.attr('data-id', i);
	// });
Math.random()
	$('#shuffle').click(function() {
		var tiles = grid.children();
		tiles.sort(function() {
			return 0.5 - Math.random();
		});
		tiles.each(function(i) {
			var tile = $(this);
			tile.attr('data-id', i);
		});
		// tiles.detach().appendTo(grid);

		$('.grid').isotope('updateSortData').isotope();

		// var items = [];
		// tiles.each(function(x) {
		// 	items.append($('.grid').masonry('getItem', x));
		// });

		// tiles.css('left', 0);
		// tiles.css('top', 0);
		// msnry.reload();
		// $('.grid').masonry('layoutItems', tiles);
		// $('.grid').masonry('layoutItems', items);

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
		// var info = $('#info');
		// if (info.css('display') === 'none') {
		// 	$('.header').css('margin-bottom', '0px');
		// 	info.slideDown();
		// } else {
		// 	$('.header').css('margin-bottom', '30px');
		// 	info.slideUp();
		// }
	});

	// $('.header').css('opacity', 0).delay(200).animate({ opacity: 1 }, 500);
	// $('.grid').css('opacity', 0).delay(800).animate({ opacity: 1 }, 2000);

	var showCarousel = function() {
		dimmer.show();
		dimmer.css('height', $(window).height());

		carouselLabel.show();
		carouselCaption.show();
		carousel.show();
		$('.carousel div img').css('height', 0.8 * $(window).height());
		carousel.slick({
			slidesToShow: 3,
			arrows: false,
			infinite: false,
			centerMode: true,
			initialSlide: 0,
			variableWidth: true
		});		
	}

	$('.tile').click(function() {
		var label;
		var caption;
		var images;
		switch ($(this).data("gallery")) {
			case "pidgin":
				label = "Pidgin";
				caption = "is a graduate student in the Architecture program at Princeton. Previously, he has worked as a designer for Pentagram, 2x4, and Ateliers Jean Nouvel.";
				images = [
					"images/Pidgin/pidgin1.png",
					"images/Pidgin/pidgin2.png",
					"images/Pidgin/pidgin3.png",
					"images/Pidgin/pidgin4.png",
					"images/Pidgin/pidgin5.png",
					"images/Pidgin/pidgin6.png",
					"images/Pidgin/pidgin7.png"];
				break;
		}

		images.forEach(function(x) {
			carousel.append('<div class="carousel-item"><img src="'+x+'"></div>');
		});
		carouselLabel.text(label);
		carouselCaption.text(caption);
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
		carouselLabel.hide();
		carouselCaption.hide();
		dimmer.hide();
	});

});
