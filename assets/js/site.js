// @codekit-prepend jquery.js

window.addEventListener('load', function () {
	setTimeout(function () {
		window.scrollTo(0, 1);
	}, 0);
});

$(document).ready(function () {
	//$('.video-container').fitVids();
});

// $(document).pjax('a:not([data-remote]):not([data-behavior]):not([data-skip-pjax])', '[data-pjax-container]', {fragment: '[data-pjax-container]' });