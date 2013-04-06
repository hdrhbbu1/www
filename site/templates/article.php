<?php snippet('header') ?>
<section class='content notebook single'>
	<?php snippet('article', array('entry' => $page, 'context' => 'single')) ?>
	<aside class='sidebar'>
		<?php snippet('widgets/newsletter', array('list_id' => 43842)) ?>
	</aside>
</section>
<?php snippet('footer') ?>