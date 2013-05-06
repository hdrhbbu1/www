// @codekit-prepend jquery.js
// @codekit-prepend jquery.lazyload.js
// @codekit-prepend jquery.fitvids.js

window.addEventListener('load', function () {
	setTimeout(function () {
		window.scrollTo(0, 1);
	}, 0);
});

$(document).ready(function () {
	$('.work.photos img').lazyload();
	$('.video').fitvids();
});
