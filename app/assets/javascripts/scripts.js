jQuery(function($){

'use strict';

// service 이동 스크립트

var $target1 = $('a[href^="#step1"]');
	$target1.on('click', function(){
		var offset = $("#step1").offset();
		$('html, body').animate({scrollTop : offset.top-80}, 400);
		return false;
	});
	
var $target1 = $('a[href^="#step2"]');
	$target1.on('click', function(){
		var offset = $("#step2").offset();
		$('html, body').animate({scrollTop : offset.top-80}, 400);
		return false;
	});

var $target1 = $('a[href^="#step3"]');
	$target1.on('click', function(){
		var offset = $("#step3").offset();
		$('html, body').animate({scrollTop : offset.top-80}, 400);
		return false;
	});
	
var $target1 = $('a[href^="#step4"]');
	$target1.on('click', function(){
		var offset = $("#step4").offset();
		$('html, body').animate({scrollTop : offset.top-80}, 400);
		return false;
	});
	
var $target1 = $('a[href^="#step5"]');
	$target1.on('click', function(){
		var offset = $("#step5").offset();
		$('html, body').animate({scrollTop : offset.top-80}, 400);
		return false;
	});
	
var $target1 = $('a[href^="#step6"]');
	$target1.on('click', function(){
		var offset = $("#step6").offset();
		$('html, body').animate({scrollTop : offset.top-80}, 400);
		return false;
	});

// service 이동 스크립트

// news div 숨기기

$("#newspop").click(function()
{
	  document.getElementById('newspop').style.opacity= '0';
    document.getElementById('newspopc').style.opacity= '0';
    
	  setTimeout("document.getElementById('newspop').style.display= 'none';",400);
    setTimeout("document.getElementById('newspopc').style.display= 'none';",400);
});
$("#newspopc").click(function()
{
	  document.getElementById('newspop').style.opacity= '0';
    document.getElementById('newspopc').style.opacity= '0';
    
	  setTimeout("document.getElementById('newspop').style.display= 'none';",400);
    setTimeout("document.getElementById('newspopc').style.display= 'none';",400);
});

// news div 숨기기

// project div 올리기

$("#project1").click(function()
{
	  document.getElementById('project_s1').style.display= 'inline';
    document.getElementById('project_p1').style.display= 'inline';
    
    setTimeout("document.getElementById('project_s1').style.opacity= '0.9';",400);
    setTimeout("document.getElementById('project_p1').style.opacity= '1';",400);
});

$("#project2").click(function()
{
	  document.getElementById('project_s2').style.display= 'inline';
    document.getElementById('project_p2').style.display= 'inline';
    
    setTimeout("document.getElementById('project_s2').style.opacity= '0.9';",400);
    setTimeout("document.getElementById('project_p2').style.opacity= '1';",400);
});

// project div 올리기

// project div 숨기기

$("#project_s1").click(function()
{
	  document.getElementById('project_s1').style.opacity= '0';
    document.getElementById('project_p1').style.opacity= '0';

	  setTimeout("document.getElementById('project_s1').style.display= 'none';",400);
    setTimeout("document.getElementById('project_p1').style.display= 'none';",400);
});

$("#project_x1").click(function()
{
	  document.getElementById('project_s1').style.opacity= '0';
    document.getElementById('project_p1').style.opacity= '0';

	  setTimeout("document.getElementById('project_s1').style.display= 'none';",400);
    setTimeout("document.getElementById('project_p1').style.display= 'none';",400);
});

$("#project_s2").click(function()
{
	  document.getElementById('project_s2').style.opacity= '0';
    document.getElementById('project_p2').style.opacity= '0';

	  setTimeout("document.getElementById('project_s2').style.display= 'none';",400);
    setTimeout("document.getElementById('project_p2').style.display= 'none';",400);
});

$("#project_x2").click(function()
{
	  document.getElementById('project_s2').style.opacity= '0';
    document.getElementById('project_p2').style.opacity= '0';

	  setTimeout("document.getElementById('project_s2').style.display= 'none';",400);
    setTimeout("document.getElementById('project_p2').style.display= 'none';",400);
});


/*
$("#project_p").click(function()
{
	  document.getElementById('project_s').style.opacity= '0';
    document.getElementById('project_p').style.opacity= '0';
    
	  setTimeout("document.getElementById('project_s').style.display= 'none';",400);
    setTimeout("document.getElementById('project_p').style.display= 'none';",400);
});
*/

// project div 숨기기


// mainpopup 숨기기

$("#mainpopi").click(function()
{
    document.getElementById('mainpops').style.opacity= '0';
    document.getElementById('mainpopi').style.opacity= '0';
    
    setTimeout("document.getElementById('mainpops').style.display= 'none'",400);
    setTimeout("document.getElementById('mainpopi').style.display= 'none'",400);
    
});
$("#mainpops").click(function()
{
    
    document.getElementById('mainpops').style.opacity= '0';
    document.getElementById('mainpopi').style.opacity= '0';
    
    setTimeout("document.getElementById('mainpops').style.display= 'none'",400);
    setTimeout("document.getElementById('mainpopi').style.display= 'none'",400);
    
});


// mainpopup 숨기기


// 부드럽게 올라가자

var $target = $('a[href^="#go_to_top"]');
    $target.on('click', function(){
        $('html, body').animate({'scrollTop' : 0}, 400);
        return false;
    });

// 부드럽게 올라가자

// scroll change top menu

var scrollcheck;    //스크롤 위치값이 10보다 크면 true가됨

$(window).scroll(function(event)
{
    if($(this).scrollTop() > 3){
        scrollcheck=true;
    }
    else
    {
        scrollcheck=false;
    }
});

setInterval(function() {
    if (scrollcheck) {
        fixnavsmall();
    }
    else
    {
        fixnavbig();
    }
}, 200);

function fixnavsmall()
{
    document.getElementById('mainNav').style.minHeight = '65px';
    document.getElementById('mainFloat').style.top = '65px';
    document.getElementById('menutop').style.marginTop= '7px';
    document.getElementById('logotop').style.marginTop= '7px';
    document.getElementById('navmarr').style.height = '65px';
}
function fixnavbig()
{
    document.getElementById('mainNav').style.minHeight = '80px';
    document.getElementById('mainFloat').style.top = '80px';
    document.getElementById('menutop').style.marginTop= '15px';
    document.getElementById('logotop').style.marginTop= '16px';
    document.getElementById('navmarr').style.height = '80px';
}



// /scroll change top menu



    // ----------------------------------------------
    // Preloader
    // ----------------------------------------------
	(function () {
	    $(window).load(function() {
	        $('#pre-status').fadeOut();
	        $('#st-preloader').delay(350).fadeOut('slow');
	    });
	}());



    // ---------------------------------------------- 
    //  magnific-popup
    // ----------------------------------------------
	(function () {

		$('.portfolio-items').magnificPopup({ 
			delegate: 'a',
			type: 'image',
			// other options
			closeOnContentClick: false,
			closeBtnInside: false,
			mainClass: 'mfp-with-zoom mfp-img-mobile',

			gallery: {
				enabled: false
			},
			zoom: {
				enabled: true,
				duration: 300, // don't foget to change the duration also in CSS
				opener: function(element) {
					return element.find('i');
				}
			}

		});

	}()); 



    // ---------------------------------------------- 
    // Fun facts
    // ---------------------------------------------- 
	(function () {
		$('.st-counter').counterUp({
		    delay: 10,
		    time: 1500
		});
	}()); 



    // ---------------------------------------------- 
    //  Isotope Filter 
    // ---------------------------------------------- 
	(function () {
		var winDow = $(window);
		var $container=$('.portfolio-items');
		var $filter=$('.filter');

		try{
			$container.imagesLoaded( function(){
				$container.show();
				$container.isotope({
					filter:'*',
					layoutMode:'masonry',
					animationOptions:{
						duration:750,
						easing:'linear'
					}
				});
			});
		} catch(err) {
		}

		winDow.bind('resize', function(){
			var selector = $filter.find('a.active').attr('data-filter');

			try {
				$container.isotope({ 
					filter	: selector,
					animationOptions: {
						duration: 750,
						easing	: 'linear',
						queue	: false,
					}
				});
			} catch(err) {
			}
			return false;
		});

		$filter.find('a').click(function(){
			var selector = $(this).attr('data-filter');

			try {
				$container.isotope({ 
					filter	: selector,
					animationOptions: {
						duration: 750,
						easing	: 'linear',
						queue	: false,
					}
				});
			} catch(err) {

			}
			return false;
		});


		var filterItemA	= $('.filter a');

		filterItemA.on('click', function(){
			var $this = $(this);
			if ( !$this.hasClass('active')) {
				filterItemA.removeClass('active');
				$this.addClass('active');
			}
		});
	}()); 


	// -------------------------------------------------------------
    // masonry
    // -------------------------------------------------------------

    (function () {
		var $container = $('.portfolio-items');
		// initialize
		$container.masonry({
		  itemSelector: '.work-grid'
		});
    }());


  	// -------------------------------------------------------------
    // Animated scrolling / Scroll Up
    // -------------------------------------------------------------

    (function () {
        $('li a[href*=#]').bind("click", function(e){
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top -79
            }, 1000);
            e.preventDefault();
        });
    }());


    // ----------------------------------------------
    // Owl Carousel
    // ----------------------------------------------
	(function () {

		$(".st-testimonials").owlCarousel({
		singleItem:true,
		lazyLoad : true,
		pagination:false,
		navigation : false,
		autoPlay: true,
		});

	}());


    // -------------------------------------------------------------
    // Back To Top
    // -------------------------------------------------------------

    (function () {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('.scroll-up').fadeIn();
            } else {
                $('.scroll-up').fadeOut();
            }
        });
    }());

    // ----------------------------------------------
    // Parallax Scrolling
    // ----------------------------------------------
	(function () {
		$(window).bind('load', function () {
			parallaxInit();						  
		});
		function parallaxInit() {		
			$("#testimonial").parallax("50%", 0.3);
		}	
		parallaxInit();
	}());

	

    // ----------------------------------------------
    // fitvids js
    // ----------------------------------------------
    (function () {

        $(".post-video").fitVids();

    }()); 


	

});