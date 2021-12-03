$('a[href*=#]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
    else{
        $('html, body').stop().animate({
            scrollTop: $('html').offset().top
        }, 1000);
        return false;
    }
});
jQuery('img.svg').each(function(){
            var $img = jQuery(this);
            var imgID = $img.attr('id');
            var imgClass = $img.attr('class');
            var imgURL = $img.attr('src');
            var imgStyle = $img.attr('style');

            jQuery.get(imgURL, function(data) {
                var $svg = jQuery(data).find('svg');
                
                if(typeof imgID !== 'undefined') {
                    $svg = $svg.attr('id', imgID);
                }
                if(typeof imgClass !== 'undefined') {
                    $svg = $svg.attr('class', imgClass+' replaced-svg');
                    
                if(typeof imgStyle !== 'undefined') {
                    $svg = $svg.attr('style', imgStyle);
                }}
                
                $svg = $svg.removeAttr('xmlns:a');

                $img.replaceWith($svg);

            }, 'xml');

        });
(function () {
    $('.nav-mobile a[href*=#]').click(function(e) {
        e.preventDefault();
        $('.masthead').toggleClass("open");
        $('.menu-burger').toggleClass('open');
        $('.primary-menu').slideToggle();
    });
    $('.menu-burger').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('open');
        $('.primary-menu').slideToggle();
        $('.masthead').toggleClass("open");
        /*$('.masthead').removeClass("open-formation");*/
    });
    $('.close-menu-js').click(function(e) {
        e.preventDefault();
        /*$(this).toggleClass('open-formation');
        $('.masthead').toggleClass("open-formation");*/
    });
    $('#menu-menu>.menu-item-has-children>a').click(function(e) {
        e.preventDefault();
        $('.masthead').toggleClass("open");
    });
    $('.simple-ajax-popup-align-top').magnificPopup({
          disableOn: 700,
          type: 'iframe',
          mainClass: 'mfp-fade',
          removalDelay: 160,
          preloader: false,
          fixedContentPos: true
    });
}());

lastScroll = 0;
$(window).on('scroll',function() {    
    var scroll = $(window).scrollTop();
    
    if(lastScroll - scroll < 0) {
        if(scroll > $(".masthead").outerHeight()){
        $(".masthead").addClass("up");
        $(".sticky").css("top",0);
        }
        } else {
        $(".masthead").removeClass("up");
        $(".sticky").css("top",$(".masthead").outerHeight());
        
        if(scroll > $(".masthead").outerHeight()){
            $(".masthead").addClass("scroll");
        }
        else{
            $(".masthead").removeClass("scroll");
        }
    }
    lastScroll = scroll;
    if(scroll > $(window).height()/2) {
        $(".js-gotop").addClass("show");}
    else {
        $(".js-gotop").removeClass("show");}
});

AOS.init(); 
/*This file was exported by "Export WP Page to Static HTML" plugin which created by ReCorp (https://myrecorp.com) */