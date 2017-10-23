jQuery(function ($) {

    'use strict';

    // -------------------------------------------------------------


    // -------------------------------------------------------------

    //Initiat WOW JS
    new WOW().init();

});


//////// -- mmenu -- /////////

$(function() {
                var $menu = $('nav#menu'),
                    $html = $('html, body');

                $menu.mmenu({
                    dragOpen: true
                });

                $menu.find( 'li > a' ).on(
                    'click',
                    function( e )
                    {
                        var href = $(this).attr( 'href' );

                        //  if the clicked link is linked to an anchor, scroll the page to that anchor 
                        if ( href.slice( 0, 1 ) == '#' )
                        {
                            $menu.one(
                                'closed.mm',
                                function()
                                {
                                    setTimeout(
                                        function()
                                        {
                                            $html.animate({
                                                scrollTop: $( href ).offset().top
                                            }); 
                                        }, 10
                                    );  
                                }
                            );
                        }
                    }
                );
            });

