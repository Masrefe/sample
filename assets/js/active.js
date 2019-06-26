(function ($) {
	"use strict";
    jQuery(document).ready(function($){
        // Slider Active
        $(".slider-active").owlCarousel({
            items: 1,
            nav: true,
            dots: false,
            smartSpeed:2000,
            autoplay: true,
            loop: true,
            navText: ["Back",  "Next"]
        });
        // Slider animation
        $(".slider-active").on("translate.owl.carousel", function(){
            $(".slider-text h2 ").removeClass("animated fadeInUp").css("opacity", "0")
            $(".slider-text p ").removeClass("animated fadeInDown").css("opacity", "0")
            $(".slider-text, .box-btn").removeClass("animated fadeInUp").css("opacity", "0");
        });
        
        $(".slider-active").on("translated.owl.carousel", function(){
            $(".slider-text h2").addClass("animated fadeInUp").css("opacity", "1");
            $(".slider-text p").addClass("animated fadeInDown").css("opacity", "1");
            $(".slider-text, .box-btn").addClass("animated fadeInUo").css("opacity", "1");
        });
        // Products tab slider active
        $(".products-carousel").owlCarousel({
            items: 4,
            margin:30,
            nav: true,
            dots: false,
            smartSpeed:2000,
            autoplay: true,
            loop: true,
            navText: ["Back",  "Next"],
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:true
                },
                600:{
                    items:2,
                    nav:false
                },
                1000:{
                    items:4,
                    nav:true,
                    loop:false
                }
            }
        });
  
     });

    /*jQuery('.main-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "992"
    });*/


}(jQuery));	


     
/*
 $(".gallery-lightbox").magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });
        
        $("ul#navigation").slicknav({
            prependTo: ".responsive-menu-wrap"
        });
        
        
        new WOW().init();

    jQuery(window).load(function(){
        jQuery(".factorian-slide-preloader-wrap, .factorian-site-preloader-wrap").fadeOut(500);
    });


*/