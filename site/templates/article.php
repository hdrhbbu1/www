<?php snippet('header') ?>
<section class='content notebook'>
	<?php snippet('article', array('entry' => $page, 'context' => 'single')) ?>
</section>
<aside class='sidebar'>
	<?php snippet('widgets/newsletter', array('list_id' => 43842)) ?>
</aside>
<?php snippet('footer') ?>
