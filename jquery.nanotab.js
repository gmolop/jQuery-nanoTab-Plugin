/*!
 * @name             jQuery nanoTab Plugin
 * @Description      Easy, Simple & lightweight jQuery Tab Plugin
 * @author           gmo
 * @version          1.0 [aug/14]
 * @proyect          https://github.com/gmolop/jQuery-nanoTab-Plugin
 * @JSfiddle         http://jsfiddle.net/gmolop/ej7h80yj/embedded/result/
 * @Original Size    2.94 KB uncompressed & commented
 * @Compiled Size    285 bytes gzipped (no style, uncommented) [Compiled with http://closure-compiler.appspot.com/]
 * @copyright        none, use as you want
 *
 * @changelog        v1.0 - Initial release
 */

(function ( $ ) {

    /**
     * @method    $( selector ).nanotab( options );
     *
     * @setting {boolean}     _default  Default opened tab  [index|null]          (default: 0)
     * @setting {string}      _effect   Transition effect   [showHide|slide|null] (default: null)
     * @setting {string|int}  _speed    Transition speed    [fast|slow|ms]        (default: 0)
     */
    $.fn.nanotab = function( options ) {

        // set default options
        var settings = $.extend({
            _default   : 0,
            _effect    : null,
            _speed     : 0
        }, options ),

        // prepare tab menu selector
        $tabMenuSelector    = $( this ).children( 'ul' ).children( 'li' ),

        // prepare tab contents
        $tabContentSelector = $( this ).children( 'div' ),

        // minimize settings var
        _default            = settings._default,
        _effect             = settings._effect,
        _speed              = settings._speed;

        // hide content tabs
        $tabContentSelector.hide(0);

        // bind click event to tab menu
        $tabMenuSelector.click( function() {

            // restore unselected class to menu
            $tabMenuSelector.removeClass( 'on' );

            var
            // index of clicked tab
            $current_tab = $tabContentSelector.eq( $( this ).index() ),

            // restore unselected class to content (except to current) and prepare selector to apply effect
            $hideContent = $tabContentSelector.not( $( $current_tab ) ).removeClass( 'on' ),

            // apply selected class to content and current menu, and prepare selector to apply effect
            $applyClass  = $current_tab.add( $( this ) ).addClass( 'on' );

            // as we have only two available effect, check if is one of them or non at all
            if ( _effect == 'showHide' || _effect === null) {

                if ( _effect === null) _speed = 0;

                // apple effect
                $hideContent.hide( _speed );
                $applyClass.show( _speed );

            } else {

                // apple effect
                $applyClass.slideDown( _speed );
                $hideContent.slideUp( _speed );

            }

        });

        // finally, if _default value is given, make it active by click event
        if ( _default !== null ) $tabMenuSelector.eq( _default ).click();

    };

})( jQuery );