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

	$(window).load(function() {
		$('#loading').fadeOut();
	})

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

		grid.isotope('updateSortData').isotope();
	});

	imagesLoaded(grid, function() {
		grid.isotope('layout');
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
		$('.carousel-item').mouseenter(function() {
			$(this).css('opacity', 0.5);
		});
		$('.carousel-item').mouseleave(function() {
			$(this).css('opacity', 1);
		});
		$('.carousel-item img').css('height', 0.78 * $(window).height() - 120);
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

			case "Thesis Catalog":
				caption = "A printed catalog of design experiments and prototypes in photography, physical modeling, digital rendering, and drawing formats leading up to the final thesis project.";
				images = [
					"images/Thesis Catalog/cover.jpg",
					"images/Thesis Catalog/cover_detail.jpg",
					"images/Thesis Catalog/catalog1.jpg",
					"images/Thesis Catalog/detail collage.jpg",
					"images/Thesis Catalog/catalog5.jpg",
					"images/Thesis Catalog/IMG_0743.jpg",
					"images/Thesis Catalog/catalog2.jpg",
					"images/Collages/amazon017.jpg",
					"images/Thesis Catalog/catalog3.jpg",
					"images/Collages/for maquette019.jpg",
					"images/Thesis Catalog/catalog4.jpg",
					"images/Thesis Catalog/catalog9.jpg",
					"images/Thesis Catalog/catalog7.jpg",
					"images/Thesis Catalog/Elevations-04 copy.jpg",
					"images/Thesis Catalog/catalog8.jpg",
					"images/Thesis Catalog/house interior.jpg",];
				break;

			case "Combine to Apply":
				caption = "The thesis project consisted of a site-specific occupation and mediated experience of a suburban house with an assortment of physical surface treatments, images, text and soundtrack (forthcoming). <em> Advisor: Michael Meredith </em>";
				images = [
					"images/Thesis/thesis_1.jpg",
					"images/Thesis/thesis_0a.jpg",
					"images/Thesis/thesis_2.jpg",
					"images/Thesis/thesis_3.jpg",
					"images/Thesis/thesis_3a.jpg",
					"images/Thesis/thesis_4.jpg",
					"images/Thesis/thesis_4a.jpg",
					"images/Thesis/thesis_5.jpg",
					"images/Thesis/thesis_8.jpg",
					"images/Thesis/thesis_6.jpg",
					"images/Thesis/thesis_6a.jpg",
					"images/Thesis/thesis_6b.jpg",
					"images/Thesis/thesis_7.jpg",
					"images/Thesis/thesis_7b.jpg",
					"images/Thesis/thesis_9.jpg",
					"images/Thesis/thesis_9a.jpg",
					"images/Thesis/thesis_9b.jpg",
					"images/Thesis/thesis_9c.jpg",];
				break;

			case "Cholo Urbanism":
				caption = "Superblock, roofscape-condenser urban model for a transnational immigrant community in Brooklyn. <br> <em> Advisor: Andres Jaque </em>";
				images = [
					"images/Cholo Urbanism/axo.png",
					"images/Cholo Urbanism/detail1.jpg",
					"images/Cholo Urbanism/detail2.jpg",
					"images/Cholo Urbanism/detail3.jpg",
					"images/Cholo Urbanism/detail4.jpg",
					"images/Cholo Urbanism/detail5.jpg",
					"images/Cholo Urbanism/detail6.jpg",
					"images/Cholo Urbanism/detail7.jpg",
					"images/Cholo Urbanism/plan.png"];
				break;

			case "Frameworks":
				caption = "Multi-site proposal and identity for a modular, temporary and recreational system sponsored by the NYC Parks Department (or any other sponsor). <em>Advisor: Liz Diller</em>";
				images = [
					"images/Frameworks/parkslogo.gif",
					"images/Frameworks/frames.png",
					"images/Frameworks/bushwick.png",
					"images/Frameworks/harlem.png",
					"images/Frameworks/riis.png"];
				break;

			case "High Line : Branding & Identity":
				caption = "Rebranding strategy and environmental graphic identity for the seminal elevated park in New York.";
				images = [
					"images/Highline/wordmark.gif",
					"images/Highline/flowers1.jpg",
					"images/Highline/flowers2.jpg",
					"images/Highline/flowers3.jpg",
					"images/Highline/flowers4.jpg",
					"images/Highline/rail1.jpg",
					"images/Highline/rail2.jpg",
					"images/Highline/rail3.jpg"];
				break;

			case "Sketches":
				caption = "";
				images = [
					"images/HLSnark/HL5.jpg",
					"images/HLSnark/AD3.jpg",
					"images/HLSnark/AD5.jpg",
					"images/HLSnark/HL2.jpg",
					"images/HLSnark/HL4.jpg"];
				break;

			case "Pidgin Magazine":
					caption = "Redesign of the Princeton School of Architecture publication.";
					images = [
						"images/Pidgin/Pidgin-01.png",
						"images/Pidgin/Pidgin-02.png",
						"images/Pidgin/Pidgin-03.png",
						"images/Pidgin/Pidgin-04.png",
						"images/Pidgin/Pidgin-05.png",
						"images/Pidgin/Pidgin-06.png",];
					break;

				case "Print : Portfolio":
					caption = "Recent Work";
					images = [
						"images/Portfolio.gif"];
					break;

				case "Princeton School of Architecture":
					caption = "Rebranding strategy for the graduate architecture program.";
					images = [
						"images/PSOA/PSOA-01.png",
						"images/PSOA/PSOA-02.png",
						"images/PSOA/PSOA-03.png",
						"images/PSOA/PSOA-04.png",
						"images/PSOA/PSOA-05.png",
						"images/P6.png",
						"images/PSOA/PSOA-06.png",
						"images/PSOA/PSOA-07.png",
						"images/PSOA/PSOA-08.png",];
					break;

				case "Surveying the Dark Age":
					caption = "Film project based on a fictional, primitive data-storing narrative. <br> <em>Advisor: Liam Young</em>";
					images = [
						"images/Survey/map1.jpg",
						"images/Survey/map2.jpg",
						"images/Survey/map4.jpg",
						"images/Survey/landscape1a.jpg",
						"images/Survey/landscape1b.jpg",
						"images/Survey/landscape1c.jpg",
						"images/Survey/landscape0.png",
						"images/Survey/map3.png",
						"images/Survey/Still1.png",
						"images/Survey/Still2.png",
						"images/Survey/Still3.png",
						"images/Survey/Still4.png",
						"images/Survey/Still5.png",
						"images/Survey/Still6.png"];
					break;

				case "Learning from-in Latin America":
					caption = "Print materials for a symposium event accompanying the <a href='https://www.moma.org/visit/calendar/exhibitions/1499' target='_blank'>MoMA exhibition</a>."; 
					images = [
						"images/LAA/LAA1.jpg",
						"images/LAA/LAA2.jpg",
						"images/LAA/LAA4.jpg",
						"images/LAA/LAA5.jpg"];
					break;

				case "Learning from-in Latin America : Draft":
					caption = "Proposed poster for the <a href='https://www.moma.org/visit/calendar/events/23283' target='_blank'>Princeton + MoMA symposium event</a>."; 
					images = [
						"images/LAA/LAAPoster1.png"];
					break;
		}

		images.forEach(function(x) {
			// carousel.append('<img class="carousel-item" src="'+x+'">');
			carousel.append('<div class="carousel-item"><img src="'+x+'"></div>');
		});
		carouselLabel.html(label);
		carouselCaption.html(caption);
		$('.carousel-item').click(function() {
			carousel.slick('slickGoTo', $(this).data("slick-index"));
		});
		showCarousel();
	});

	$('#dimmer, #carousel-close').click(function() {
		carousel.slick('unslick');
		carousel.empty();
		carouselContainer.hide();
		// carousel.hide();
		// carouselLabel.hide();
		// carouselCaption.hide();
		// dimmer.hide();
	});

	$(window).resize(function() {
		$('.carousel-item img').css('height', 0.78 * $(window).height() - 120);
		// $('.carousel-item').css('max-height', 0.75 * $(window).height());
		// $('.carousel-item').css('max-width', 0.75 * $(window).width());
	});

});
