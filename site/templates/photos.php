<?php snippet('header') ?>
<section class='content<?php ecco($page->class(), " {$page->class()}") ?>'>
	<?php $images = $page->images()->not('header.jpg')->shuffle() ?>
	<?php foreach($images as $photo): ?>
	<div class='panel photo' data-url='<?php echo $photo->url() ?>'>
		<?php echo thumb($photo, array('width' => 500, 'height' => 500, 'crop' => true)) ?>
	</div>
	<?php endforeach ?>
</section>
<?php snippet('footer') ?>