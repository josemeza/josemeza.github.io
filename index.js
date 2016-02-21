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

			case "Master's Thesis Catalog":
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
					"images/Thesis Catalog/axo.jpg",
					"images/Thesis Catalog/catalog7.jpg",
					"images/Thesis Catalog/Elevations-04 copy.jpg",
					"images/Thesis Catalog/catalog8.jpg"];
				break;

			case "Princeton Master's Thesis":
				caption = "The thesis project consisted of a site-specific occupation and mediated experience of a suburban house with an assortment of physical surface treatments, photographs, text and soundtrack. Thesis Advisor: <a href='http://www.mos-office.net/' target='_blank'>Michael Meredith</a>.";
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
					"images/Thesis/thesis_9c.jpg"];
				break;

			case "Urbanism Studio":
				caption = "Superblock, roofscape-condenser model for a transnational immigrant community in Brooklyn. <br>Design studio under the instruction of <em>Andres Jaque.</em>";
				images = [
					"images/Cholo.png",
					"images/Cholo Urbanism/detail1.jpg",
					"images/Cholo Urbanism/detail2.jpg",
					"images/Cholo Urbanism/detail3.jpg",
					"images/Cholo Urbanism/detail4.jpg",
					"images/Cholo Urbanism/detail5.jpg",
					"images/Cholo Urbanism/detail6.jpg",
					"images/Cholo Urbanism/detail7.jpg",
					"images/Cholo Urbanism/plan.jpg"];
				break;

			case "Design Studio":
				caption = "Multi-site proposal and identity for a modular, temporary and recreational system sponsored by the NYC Parks Department (or any other sponsor). Under the instruction of <a href='http://www.dsrny.com/' target='_blank'>Liz Diller</a>";
				images = [
					"images/Frameworks/logo.jpg",
					"images/Frameworks/frames.png",
					"images/Frameworks/bushwick.png",
					"images/Frameworks/harlem.png",
					"images/Frameworks/riis.png"];
				break;

			case "High Line":
				caption = "Rebranding strategy and environmental graphic identity for the seminal elevated park in New York.";
				images = [
					"images/Highline/wordmark.gif",
					"images/Highline/flowers1.jpg",
					"images/Highline/flowers2.jpg",
					"images/Highline/flowers3.jpg",
					"images/Highline/flowers4.jpg",
					"images/Highline/line1.jpg",
					"images/Highline/rail1.jpg",
					"images/Highline/rail2.jpg",
					"images/Highline/rail3.jpg"];
				break;

			case "2 x 4":
				caption = "Signage, exhibition and architectural design for these clients while employed at <a href='http://2x4.org/' target='_blank'>2x4</a>, New York.";
				images = [
					"images/2x4/TheNowClark.gif",
					"images/2x4/Clark1.jpg",
					"images/2x4/Prada-Gatsby.jpg",
					"images/2x4/Gatsby3.jpg",
					"images/2x4/Hyundai.jpg",
					"images/2x4/Hyundai1.jpg"];
				break;

			case "Pentagram":
				caption = "Environmental design for these clients while employed at <a href='http://www.pentagram.com/#/homePentagram' target='_blank'>Pentagram</a>, New York under the direction of Paula Scher.";
				images = [
					"images/Pentagram/Highline.jpg",
					"images/Pentagram/MSM.jpg",
					"images/Pentagram/TheNewSchool.gif",
					"images/Pentagram/NYU.jpg",];
				break;

			case "Idea Graveyard":
				caption = "";
				images = [
					"images/Collages/amazon.jpg",
					"images/Collages/brick.jpg",
					"images/Collages/burlap.jpg",
					"images/Collages/carpet.jpg",
					"images/Collages/concrete.jpg",
					"images/Collages/maquette.jpg",
					"images/Collages/marble.jpg",
					"images/Collages/tile.jpg",
					"images/Collages/veneer brick.jpg"];
				break;

			case "Pidgin Magazine":
					caption = "Redesign of the Princeton School of Architecture publication.";
					images = [
						"images/Pidgin/Pidgin-01.png",
						"images/Pidgin/Pidgin-02.png",
						"images/Pidgin/Pidgin-03.png",
						"images/Pidgin/Pidgin-04.png",
						"images/Pidgin/Pidgin-05.png",
						"images/Pidgin/pidgin.gif",
						"images/Pidgin/Pidgin-06.png",];
					break;

				case "Princeton School of Architecture":
					caption = "Rebranding strategy for the graduate architecture program.";
					images = [
						"images/PSOA/PSOA-01.png",
						"images/PSOA/PSOA-02.png",
						"images/PSOA/PSOA-03.png",
						"images/PSOA/PSOA-04.png",
						"images/PSOA/PSOA-05.png",
						"images/PSOA/PSOA-06.png",
						"images/PSOA/PSOA-07.png",
						"images/PSOA/PSOA-08.png",
						"images/PSOA/psoa.gif"];
					break;

				case "Motion Design Studio":
					caption = "Stills from a time-based project depicting a fictional, primitive data-storage narrative. <br> Design studio under the instruction of Liam Young.";
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

				case "MoMA + Princeton: Learning from/in Latin America":
					caption = "Print materials for a symposium event accompanying the <a href='https://www.moma.org/visit/calendar/exhibitions/1499' target='_blank'>MoMA exhibition</a>."; 
					images = [
						"images/LAA/LAA4.jpg",
						"images/LAA/LAA5.jpg",
						"images/LAA/LAA1.jpg",
						"images/LAA/LAA2.jpg"];
					break;

				case "PSOA Printed Matter":
					caption = "Assorted event and symposia posters completed while employed for the Princeton School of Architecture."; 
					images = [
						"images/PSOA Posters/P0.png",
						"images/PSOA Posters/P1.png",
						"images/PSOA Posters/P2.png",
						"images/PSOA Posters/P3.png",
						"images/PSOA Posters/P4.jpg"];
					break;

				case "Figma":
					caption = "An assortment of marketing collateral for <a href='https://www.figma.com/' target='_blank'>Figma's</a> preview release."; 
					images = [
						"images/Figma/morph-white.gif",
						"images/Figma/icon set.png",
						"images/Figma/landing page.png",
						"images/Figma/1.gif",
						"images/Figma/plus-check.gif",
						"images/Figma/2.gif",
						"images/Figma/teams-fill.gif",
						"images/Figma/3.gif",
						"images/Figma/file-import.gif",
						"images/Figma/medium cover photo.png"];
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
