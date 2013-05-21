<?php snippet('header') ?>
<section class='content<?php ecco($page->class(), " {$page->class()}") ?>'>
	<?php $n = 0; foreach($page->children() as $film): $n++; ?>
		<div class='item <?php echo ($n % 2) ? 'odd' : 'even' ?>'>
			<div class='feature video'>
				<?php snippet('helpers/vimeo-embed', array('id' => $film->id())) ?>
			</div>
			<div class='description'>
				<h2><?php echo $film->title() ?></h2>
				<?php echo kirbytext($film->text()) ?>
			</div>
		</div>
	<?php endforeach ?>
</section>
<?php snippet('footer') ?>