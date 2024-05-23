$(document).ready(function(){

	$('#main_banner').owlCarousel({
	    loop:true,
	    // margin:10,
	    // nav:true,
	    // navText: ['<i class="fas fa-arrow-left"></i>','<i class="fas fa-arrow-right"></i>'],
	    // center:true,
	    // mouseDrag:false,
	    // stagePadding: 50,
	    // merge:true,
	    // startPosition: 2,
	    autoplay: true,
	    autoplayTimeout: 5000,
	    // autoplayHoverPause:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:3
	        },
	        1000:{
	            items:1
	        }
	    }
	})

	$('#pro_slider').owlCarousel({
	    loop:true,
	    margin:10,
	    nav:true,

	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:3
	        },
	        1000:{
	            items:2
	        }
	    }
	})

	$('#main_banner_2').owlCarousel({
	    loop:false,
	    margin:10,
		autoplay: true,
	    autoplayTimeout: 5000,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:3
	        },
	        1000:{
	            items:4
	        }
	    }
	})



});

