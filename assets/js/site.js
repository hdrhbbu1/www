// @codekit-prepend jquery.js
// @codekit-prepend jquery.cycle.js

$(document).ready(function () {
	if ($('body').attr('class') === 'home') {
		$('.slides').cycle({
			slideResize: 0,
			fx: 'scrollRight',
			delay: 4000
		});
	}
});
