
$('#main-slider').owlCarousel({
    loop:true,
    margin:15,
    nav:true,
	dots:true,
	autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
	animateOut: 'fadeOut',
	slideBy: 1,
    responsive:{
        0:{items:1},
        600:{items:1},
		1000:{items:1},
        1200:{items:1}
    }
})














$('.testimonail-slider').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    dots: false,
    slideBy: 1,
    autoplay: true,
    autoplayTimeout: 10000,
    autoplayHoverPause: false,
    responsive: {
		
      0: { items: 1 },
	  
	    768: { items: 2 },
		
      1200: { items: 3 },
	  
    }
  })
  
  $(document).ready(function() {
  $('#close-btn').click(function() {
    $('#search-overlay').fadeOut();
    $('#search-btn').show();
  });
  $('#search-btn').click(function() {
    $(this).hide();
    $('#search-overlay').fadeIn();
  });
});
