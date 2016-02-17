// Site Componenets
import menu from './menu'; // site wide menu
import twitterCarousel from './twitter-carousel'; // twitter footer carousel

import h from '../helpers';


function components($) {

	/*
		Component : Site Wide Menu
		- Handles the whole site wide menu on each page
		@file : template.html
		@params : jQuery
	*/
	menu($);

	/*
		Component: Twitter Carousel
		- Fetch Twitter Information and create the Carousel, appendTo
	*/
	twitterCarousel($); 


	//clear off the navigation overflow
	if ( $('body').hasClass('hide-scroll-bar') ) {
		//$('.site-navigation-block').addClass('hideNav');
		$('body').removeClass('hide-scroll-bar');
	}
	


	// Hide Video if on Mobile
	if ( !h.isMobile() ) {
		$('.poster').addClass('hidden');
	} 


	/*
		Async Load our Large Images in our Header for Instance
	*/
	$('.fadeIn-img').each(function() {
		let src = $(this).data('src');

		if(src) {
			var img = new Image();
			//img.style.display = 'none';
			img.style.opacity = '0';
			$(this).append(img);
			img.onload = function() {
				$(this).fadeIn(5000);
			};
			

			$(this).find(img).addClass('cover-image fadeIn animated').css('background-image', 'url('+src+')')//.css('display', 'block');
		}
	});


	// set our header height
	if ( !h.isMobile() ) {
		$('.site-header').css('height', window.innerHeight);

		$(window).resize( () => {
			setTimeout( () => {
				$('.site-header').css('height', window.innerHeight);
			}, 500);
		});

	} else {
		$('.site-header').css('height', '400px');
	}


	$('.thumb').each( function() {
		const $this = $(this);
		const bg = $this.data('bg');
		$this.css('background-image', `url(${bg})`);
	});




}

export default components;