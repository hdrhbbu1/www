<?php snippet('header') ?>
<?php echo js('/assets/js/jquery.view.js?auto') ?>
<section class='content<?php ecco($page->class(), " {$page->class()}") ?>'>
	<?php $images = $page->images()->not('header.jpg')->shuffle() ?>
	<?php foreach($images as $photo): ?>
	<div class='panel photo'>
		<a href='<?php echo $photo->url() ?>' rel='photography' class='view'>
			<img src='<?php echo thumb($photo, array('width' => 500, 'height' => 500, 'crop' => true), false) ?>' />
		</a>
	</div>
	<?php endforeach ?>
</section>
<?php snippet('footer') ?>