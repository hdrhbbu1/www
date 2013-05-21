// @codekit-prepend jquery.js
// @codekit-prepend jquery.pjax.js

window.addEventListener('load', function () {
	setTimeout(function () {
		window.scrollTo(0, 1);
	}, 0);
});

$(document).ready(function () {
	//$('.video-container').fitVids();
});

//$(document).pjax('a:not([data-remote]):not([data-behavior]):not([data-skip-pjax])', 'body', {fragment: 'body' });