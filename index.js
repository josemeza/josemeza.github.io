$(document).ready(function() {
	var tiles = $('.grid').children();

	tiles.each(function(i) {
		var tile = $(this);
		tile.attr('data-id', i);
	});

	$('#shuffle').click(function() {
		var grid = $('.grid');
		// var newgrid = grid.clone();
		// newgrid.addClass("newgrid");
		// newgrid.removeClass("grid");
		var tiles = grid.children();
		tiles.sort(function() {
			return 0.5 - Math.random();
		});
		tiles.each(function(i) {
			var tile = $(this);
			tile.attr('data-id', i);
		});
		// tiles.detach();
		// tiles.appendTo(newgrid);
		 // $('body').append(newgrid);
	  grid.quicksand(tiles, {
	  	duration: 300
	  });
	});

	var msnry = new Masonry('.grid', {
		"gutter": 20
	});

	$('#name').click(function() {
		$('#info').slideToggle();
	});

});
