/*
 * blueimp Gallery Demo JS
 * https://github.com/blueimp/Gallery
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */

/* global blueimp, $ */

$(function() {
	// Load demo images from flickr:
	$.ajax({
		url: 'https://api.flickr.com/services/rest/',
		data: {
			format: 'json',
			method: 'flickr.interestingness.getList',
			api_key: '7617adae70159d09ba78cfec73c13be3' // jshint ignore:line
		},
		dataType: 'jsonp',
		jsonp: 'jsoncallback'
	}).done(function(result) {
		var carouselLinks = []
		var linksContainer = $('#links')
		var baseUrl
		// Add the demo images as links with thumbnails to the page:
		$.each(result.photos.photo, function(index, photo) {
			baseUrl = 'https://farm' + photo.farm + '.static.flickr.com/' +
				photo.server + '/' + photo.id + '_' + photo.secret
				
			var divTag = $('<div/>').prop('class', 'col-md-1 pic-div');	
			var atag = $('<a/>')
				.append($('<img>').prop('src', baseUrl + '_s.jpg'))
				.prop('href', baseUrl + '_b.jpg')
				.prop('title', photo.title)
				.attr('data-gallery', '')
				.appendTo(divTag);
				divTag.appendTo(linksContainer);
		})
	})
})