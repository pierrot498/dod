$(function () {
    setTimeout(function() {
        homeSlider = $('.home-slider').owlCarousel({
            items: 1,
            margin: 10,
            loop: true,
            mouseDrag : true,
            nav: true,
            dots: true,
            autoplay:false,
            autoplayTimeout:8000,
            autoplayHoverPause:true,
            responsive : {
                0 : {
                    nav : false
                },
                992 : {
                    nav : true
                }
            }
        });
    }, 300);   
});

/*This file was exported by "Export WP Page to Static HTML" plugin which created by ReCorp (https://myrecorp.com) */