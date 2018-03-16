/**
 * JS for tender-greens theme.
 */



jQuery(document).ready(function () {

    // Hamburger-menu in Header

    (function () {
        jQuery('.hamburger-menu').on('click', function () {
            jQuery('.bar').toggleClass('animate');
            jQuery('#tg-menu').toggleClass('hide');
        })
    })();

    // END Hamburger-menu in Header

    //Show Search

    (function () {
        jQuery('#search-icon').on('click', function () {
            jQuery('#header-search').toggleClass('hide');
        })
    })();

    // ENDShow Search

    if (jQuery(window).width() < 1200) {
        jQuery('#tg-menu').append(jQuery('#tg-login').addClass('displace'));
    }
    if (jQuery(window).width() < 770) {
        jQuery('#tg-menu').prepend(jQuery('#header-search').addClass('mobile-show'));
    }




});
window.onload=function(){
    jQuery('.5days .donut').viewportChecker({
        classToAdd: 'donut--25', // Class to add to the elements when they are visible
        offset: 100
    });
    jQuery('.14days .donut').viewportChecker({
        classToAdd: 'donut--50', // Class to add to the elements when they are visible
        offset: 100
    });


    var mh = 0;
    jQuery(".printing-category-grid-container .col-6").each(function () {
        var h_block = parseInt(jQuery(this).height());
        if(h_block > mh) {
            mh = h_block;
        };
    });
    jQuery(".printing-category-grid-container .col-6").height(mh);
};


