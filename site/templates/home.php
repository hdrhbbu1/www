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
		<?php foreach($pages->findByUID('notebook')->children() as $entry): ?>
			<article class='entry preview'>
				<a href='<?php echo $entry->url() ?>'><h2><?php echo $entry->title() ?></h2></a>
				<div class='metadata'>
					<span class='date'>Published on:</span>
					<date><?php echo $entry->date('M d, Y') ?></date>
				</div>
				<?php echo kirbytext(excerpt($entry->text(), 200)) ?>
			</article>
		<?php endforeach ?>
	</div>
	<aside class='sidebar one'>
		<h2 class='subhead'>Projects</h2>
	</aside>
	<aside class='sidebar two'>
		<h2 class='subhead'>Upcoming Events</h2>
	</aside>
</section>
<?php snippet('footer') ?>
