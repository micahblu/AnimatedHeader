/**
 * cbpAnimatedHeader.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */

(function(global, factory) {
	if ( typeof define === 'function' && define.amd ) {
		// AMD
		define( factory() );
	} else if ( typeof exports === 'object' ) {
		// CommonJS
		module.exports = factory();
	} else {
		// browser global
		global.cbpAnimatedHeader = factory();
	}
})(window, function() {

	 var docElem = document.documentElement,
 			header = {},
 			didScroll = false,
 			changeHeaderOn = 300;

 	function init() {

 		header = document.querySelector( '.cbp-af-header' )

 		window.addEventListener( 'scroll', function( event ) {
 			if( !didScroll ) {
 				didScroll = true;
 				setTimeout( scrollPage, 250 );
 			}
 		}, false );
 	}

 	function scrollPage() {
 		var sy = scrollY();
 		if ( sy >= changeHeaderOn ) {
 			classie.add( header, 'cbp-af-header-shrink' );
 		}
 		else {
 			classie.remove( header, 'cbp-af-header-shrink' );
 		}
 		didScroll = false;
 	}

 	function scrollY() {
 		return window.pageYOffset || docElem.scrollTop;
 	}

 	return {
		init: init
 	};
});
