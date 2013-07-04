<?php if (!strstr(url(), 'site')): ?>
	<?php snippet('analytics/google', array('id' => 'UA-33160485-1')) ?>
	<?php snippet('analytics/gosquared', array('id' => 'GSN-283333-Y')) ?>
	<?php snippet('analytics/gauges', array('id' => '4d628baff0d8804188000016')) ?>
<?php endif ?>