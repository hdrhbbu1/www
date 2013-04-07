<?php snippet('header') ?>
<section class='content notebook single'>
	<?php snippet('notebook/article', array('entry' => $page, 'context' => 'single')) ?>
	<aside class='sidebar'>
		<?php snippet('widgets/newsletter', array('list_id' => 43842)) ?>
		<?php snippet('widgets/notebook', array('current' => $page)) ?>
	</aside>
</section>
<?php snippet('footer') ?>