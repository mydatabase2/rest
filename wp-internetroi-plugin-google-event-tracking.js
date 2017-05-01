(function( $ ) {
	'use strict';

    //facebook share
    $('.share-iroi').on('click', function(){
        var self = $(this);
        var fb_location = '';

        if (self.hasClass('share-iroi-main')) {
            fb_location = 'Under Post Image';
        } else if (self.hasClass('share-iroi-sidebar')) {
            fb_location = 'Under Sidebar Post Image';
        } else if (self.hasClass('fb-header')) {
            fb_location = 'Within Article Header';
        }

        ga('send', 'event', 'Social Media', 'Facebook Share', fb_location);
    });

    //facebook comment
    $('.comment-iroi').on('click', function(){
        var self = $(this);
        var fb_location = '';

        if (self.hasClass('comment-iroi-main')) {
            fb_location = 'Under Post Image';
        } else if (self.hasClass('comment-iroi-sidebar')) {
            fb_location = 'Under Sidebar Post Image';
        }

        ga('send', 'event', 'Social Media', 'Facebook Comment', fb_location);
    });

    $('#fb_load_comments').on('click', function(){
        ga('send', 'event', 'Social Media', 'Facebook Load Comments', 'Article');
    });

    //facebook share mobile sticky footer
    $('.share-iroi', '.mobile-sticky-footer').on('click', function(){

        ga('send', 'event', 'Social Media', 'Facebook Share', 'Mobile Sticky Footer');
    });

    //facebook share desktop footer
    $('.footer_fb_share').on('click', function(){

        ga('send', 'event', 'Social Media', 'Facebook Share', 'Desktop Footer');
    });

    //facebook like - can be used for anything in a remote iframe as well
    var monitor = setInterval(function(){
        var elem = $(document.activeElement);
        if(elem && elem.prop("tagName") == 'IFRAME'){

            var page = 'Facebook Like - ' + facebook_page_like;

            if (elem.parents('.fb_like_underimage').length == 1) {

                ga('send', 'event', 'Social Media', page, 'Under Post Image');
            }
            else if (elem.parents('.footer-fb-like').length == 1) {

                ga('send', 'event', 'Social Media', page, 'Desktop Footer');
            }
            else if (elem.parents('.fb-boost').length == 1) {

                ga('send', 'event', 'Social Media', page, 'Desktop boost location');
            }
            else if (elem.parents('.fb-boost-mobile').length == 1) {

                ga('send', 'event', 'Social Media', page, 'Mobile boost location');
            }
            else if (elem.parents('.singleSide').length == 1 && elem.parents('.fb-like').length) {

                ga('send', 'event', 'Social Media', page, 'Side bar');
            }

            clearInterval(monitor);
        }
    }, 100);

    $('.social-icons-wrapper .icon-link').on('click', function(){
        var self = $(this);
        var body_el = $('body');

        var source = '';
        if (self.hasClass('facebook')) {
            source = 'Facebook';
        } else if (self.hasClass('twitter')) {
            source = 'Twitter';
        } else if (self.hasClass('pinterest')) {
            source = 'Pinterest';
        }

        var location = '';
        if (body_el.hasClass('partners')) {
            location = 'Partners';
        } else if (body_el.hasClass('contact-us')) {
            location = 'Contact Us';
        } else if (body_el.hasClass('careers')) {
            location = 'Careers';
        } else if (body_el.hasClass('advertise')) {
            location = 'Advertise';
        } else if (body_el.hasClass('about-us')) {
            location = 'About Us';
        } else if (body_el.hasClass('author')) {
            location = 'Author';
        } else {
            location = 'Article';
        }

        ga('send', 'event', 'Social Media', source + ' Follow', location + ' Page');
    });

})( jQuery );
