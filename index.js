$(document).ready(function() {
	var tiles = $('#grid').children();

	tiles.each(function(i) {
		var tile = $(this);
		tile.attr('data-id', i);
	});
});

$('#shuffle').click(function() {
	var grid = $('#grid');
	var tiles = grid.children();
	tiles.sort(function() {
		return 0.5 - Math.random();
	});
	tiles.each(function(i) {
		var tile = $(this);
		tile.attr('data-id', i);
	});
	var newgrid = $('#newgrid');
	tiles.appendTo(newgrid);
	grid.quicksand($('#newgrid li'));
});

