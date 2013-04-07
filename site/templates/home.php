<?php snippet('header') ?>
<section class='content home'>
	<div class='specialties'>
		<?php $specialties = yaml($page->specialties()) ?>
		<?php foreach($specialties as $item): ?>
		<div class='specialty'>
			<h2><?php echo $item['title'] ?></h2>
			<?php echo kirbytext($item['description']) ?>
		</div>
		<?php endforeach; ?>
	</div>
	<div class='six'>
		<?php snippet('widgets/notebook') ?>
	</div>
	<div class='six'>
		<?php snippet('widgets/newsletter') ?>
	</div>
</section>
<?php snippet('footer') ?>