<?php snippet('header') ?>
<section class='content'>
	<?php $specialties = yaml($page->specialties()) ?>
	<?php foreach($specialties as $item): ?>
	<div class='specialty'>
		<h2><?php echo $item['title'] ?></h2>
		<?php echo kirbytext($item['description']) ?>
	</div>
	<?php endforeach; ?>
</section>
<?php snippet('footer') ?>
