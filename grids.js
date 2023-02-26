var $grid = $('.grid').isotope({
  // disable initial layout
  initLayout: false,
  itemSelector: '.grid-item',
  layoutMode: 'fitRows',
  percentPosition: true,
  masonry: {
		columnWidth: '.grid-sizer'
  },
  packery: {
		columnWidth: '.grid-sizer',
		gutter: '.gutter-sizer'
  }
  //...
});

$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

$grid.isotope( 'on', 'arrangeComplete', function() {
  console.log('arrange is complete');
});
// manually trigger initial layout
$grid.isotope();