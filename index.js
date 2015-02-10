$(document).ready(function() {
	var carouselContainer = $('#carousel-container');
	carouselContainer.hide();
	var dimmer = $('#dimmer');
	// dimmer.hide();
	var carousel = $('.carousel');
	// carousel.hide();
	var carouselLabel = $('#carousel-label');
	// carouselLabel.hide();
	var carouselCaption = $('#carousel-caption');
	// carouselCaption.hide();

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
		carouselContainer.show();
		// dimmer.show();
		// carouselLabel.show();
		// carouselCaption.show();
		// carousel.show();
		$('.carousel-item img').css('height', 0.66 * $(window).height());
		// $('.carousel-item img').css('max-height', 0.75 * $(window).height());
		// $('.carousel-item img').css('max-width', 0.75 * $(window).width());
		carousel.slick({
			// slidesToShow: 3,
			arrows: false,
			infinite: false,
			centerMode: true,
			initialSlide: 0,
			variableWidth: true
		});
		// $('.carousel-item').css('line-height', (0.75 * $(window).height()) + 'px');
		carousel.slick('slickGoTo', 0);
	}

	$('.tile').click(function() {
		var label = $(this).data("gallery");
		var caption;
		var images;
		switch (label) {

			case "Cholo Urbanism":
				caption = "";
				images = [
					"images/Cholo Urbanism/axo.png",
					"images/Cholo Urbanism/detail1.jpg",
					"images/Cholo Urbanism/detail2.jpg",
					"images/Cholo Urbanism/detail3.jpg",
					"images/Cholo Urbanism/detail4.jpg",
					"images/Cholo Urbanism/plan.png"];
				break;

			case "Frameworks":
				caption = "";
				images = [
					"images/Frameworks/black frames.jpg",
					"images/Frameworks/black logo.png",
					"images/Frameworks/bushwick.png",
					"images/Frameworks/frameworks logo.png",
					"images/Frameworks/green frames.jpg",
					"images/Frameworks/harlem.png",
					"images/Frameworks/orange frames.jpg",
					"images/Frameworks/riis.png"];
				break;

			case "Highline":
				caption = "";
				images = [
					"images/Highline/flowers1.jpg",
					"images/Highline/flowers2.jpg",
					"images/Highline/flowers3.jpg",
					"images/Highline/flowers4.jpg",
					"images/Highline/rail1.jpg",
					"images/Highline/rail2.jpg",
					"images/Highline/rail3.jpg",
					"images/Highline/wordmark flowers.png",
					"images/Highline/wordmark rail.png",
					"images/Highline/wordmark.png"];
				break;

			case "HLSnark":
				caption = "";
				images = [
					"images/HLSnark/AD3.jpg",
					"images/HLSnark/AD5.jpg",
					"images/HLSnark/HL2.jpg",
					"images/HLSnark/HL4.jpg",
					"images/HLSnark/HL5.jpg"];
				break;

			case "Pidgin":
					caption = "is a graduate student in the Architecture program at Princeton. Previously, he has worked as a designer for Pentagram, 2x4, and Ateliers Jean Nouvel.";
					images = [
						"images/Pidgin/pidgin0.png",
						"images/Pidgin/pidgin1.png",
						"images/Pidgin/pidgin2.png",
						"images/Pidgin/pidgin3.png",
						"images/Pidgin/pidgin4.png",
						"images/Pidgin/pidgin5.png",
						"images/Pidgin/pidgin6.png",
						"images/Pidgin/pidgin7.png"];
					break;

				case "Portfolio":
					caption = "";
					images = [
						"images/Portfolio/Portfolio.jpg"];
					break;

				case "PSOA":
					caption = "";
					images = [
						"images/PSOA/P1.png",
						"images/PSOA/P2.png",
						"images/PSOA/P3.png",
						"images/PSOA/P4.png",
						"images/PSOA/P5.png",
						"images/PSOA/P6.png",
						"images/PSOA/P7.png",
						"images/PSOA/P8.png"];
					break;

				case "Survey":
					caption = "";
					images = [
						"images/Survey/landscape1.jpg",
						"images/Survey/landscape2.jpg",
						"images/Survey/landscape3.jpg",
						"images/Survey/landscape4.jpg",
						"images/Survey/map1.jpg",
						"images/Survey/map2.jpg",
						"images/Survey/map3.png",
						"images/Survey/Still1.png",
						"images/Survey/Still2.png",
						"images/Survey/Still3.png",
						"images/Survey/Still4.png",
						"images/Survey/Still5.png",
						"images/Survey/Still6.png"];
					break;
		}

		images.forEach(function(x) {
			// carousel.append('<img class="carousel-item" src="'+x+'">');
			carousel.append('<div class="carousel-item"><img src="'+x+'"></div>');
		});
		carouselLabel.text(label);
		carouselCaption.text(caption);
		$('.carousel-item').click(function() {
			carousel.slick('slickGoTo', $(this).data("slick-index"));
		});
		showCarousel();
	});

	$('#dimmer, #carousel-label, #carousel-caption, #carousel-close').click(function() {
		carousel.slick('unslick');
		carousel.empty();
		carouselContainer.hide();
		// carousel.hide();
		// carouselLabel.hide();
		// carouselCaption.hide();
		// dimmer.hide();
	});

	$(window).resize(function() {
		$('.carousel-item').css('height', 0.66 * $(window).height());
		// $('.carousel-item').css('max-height', 0.75 * $(window).height());
		// $('.carousel-item').css('max-width', 0.75 * $(window).width());
	});

});
