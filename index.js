$(document).ready(function() {
	var dimmer = $('#dimmer');
	dimmer.hide();
	var carousel = $('.carousel');
	carousel.hide();
	var carouselLabel = $('#carousel-label');
	carouselLabel.hide();
	var carouselCaption = $('#carousel-caption');
	carouselCaption.hide();

	var grid = $('.grid');
	var tiles = $('.tile');

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

	$('#shuffle').click(function() {
		var tiles = grid.children();
		tiles.sort(function() {
			return 0.5 - Math.random();
		});
		tiles.each(function(i) {
			var tile = $(this);
			tile.attr('data-id', i);
		});

		$('.grid').isotope('updateSortData').isotope();
	});

	$('#name').click(function() {
		$('#info').slideToggle();
	});

	// $('.header').css('opacity', 0).delay(200).animate({ opacity: 1 }, 500);
	// $('.grid').css('opacity', 0).delay(700).animate({ opacity: 1 }, 500);

	var showCarousel = function() {
		dimmer.show();

		carouselLabel.show();
		carouselCaption.show();
		carousel.show();
		$('.carousel-item').css('height', 0.75 * $(window).height());
		carousel.slick({
			// slidesToShow: 3,
			arrows: false,
			infinite: false,
			centerMode: true,
			initialSlide: 0,
			variableWidth: true,
			adaptiveHeight: true
		});
		carousel.slick('slickGoTo', 0);
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
			carousel.append('<img class="carousel-item" src="'+x+'">');
		});
		carouselLabel.text(label);
		carouselCaption.text(caption);
		$('.carousel-item').click(function() {
			carousel.slick('slickGoTo', $(this).data("slick-index"));
		});
		showCarousel();
	});

	$('#dimmer, #carousel-label, #carousel-caption').click(function() {
		carousel.slick('unslick');
		carousel.empty();
		carousel.hide();
		carouselLabel.hide();
		carouselCaption.hide();
		dimmer.hide();
	});

	$(window).resize(function() {
		$('.carousel-item').css('height', 0.75 * $(window).height());
	});

});
