/**
 * JS for tender-greens theme.
 */



jQuery( document ).ready(function() {

    // Hamburger-menu in Header

    (function () {
        jQuery('.hamburger-menu').on('click', function() {
            jQuery('.bar').toggleClass('animate');
        })
    })();

    // END Hamburger-menu in Header

    //Show Search

    (function () {
        jQuery('#search-icon').on('click', function() {
            jQuery('#header-search').toggleClass('hide');
        })
    })();

    // ENDShow Search

    //Main-page slider

    jssor_1_slider_init = function() {

        var jssor_1_options = {
            $AutoPlay: 1,
            $SlideDuration: 800,
            $SlideEasing: $Jease$.$OutQuint,
            $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$
            },
            $BulletNavigatorOptions: {
                $Class: $JssorBulletNavigator$
            }
        };

        var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

        /*#region responsive code begin*/

        var MAX_WIDTH = 3000;

        function ScaleSlider() {
            var containerElement = jssor_1_slider.$Elmt.parentNode;
            var containerWidth = containerElement.clientWidth;

            if (containerWidth) {

                var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

                jssor_1_slider.$ScaleWidth(expectedWidth);
            }
            else {
                window.setTimeout(ScaleSlider, 30);
            }
        }

        ScaleSlider();

        $Jssor$.$AddEvent(window, "load", ScaleSlider);
        $Jssor$.$AddEvent(window, "resize", ScaleSlider);
        $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
        /*#endregion responsive code end*/
    };

    //END Main-page slider

















});



