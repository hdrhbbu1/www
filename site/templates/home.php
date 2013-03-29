<?php snippet('header') ?>
<section class='content'>
	<div class='specialties'>
		<?php $specialties = yaml($page->specialties()) ?>
		<?php foreach($specialties as $item): ?>
		<div class='specialty'>
			<h2><?php echo $item['title'] ?></h2>
			<?php echo kirbytext($item['description']) ?>
		</div>
		<?php endforeach; ?>
	</div>
	<div class='notebook-features'>
		<h2 class='subhead'>Recent Articles</h2>
	</div>
	<aside class='sidebar one'>
		<h2 class='subhead'>Projects</h2>
	</aside>
	<aside class='sidebar two'>
		<h2 class='subhead'>Upcoming Events</h2>
	</aside>
</section>
<?php snippet('footer') ?>
