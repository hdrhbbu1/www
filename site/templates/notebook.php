<?php snippet('header') ?>
<section class='content notebook'>
	<?php foreach($page->children()->visible()->flip() as $entry): ?>
	<article<?php ecco($entry->class(), " class='{$entry->class()}'") ?>>
		<div class='metadata'>
			<span class='date'><h2>Posted on:</h2></span>
			<date><?php echo $entry->date('M d, Y') ?></date>
		</div>
		<div class='content'>
			<a href='<?php echo $entry->url(); ?>'>
				<h2><?php echo $entry->title() ?></h2>
			</a>
			<?php echo kirbytext(excerpt($entry->text(), 800)); ?>
			<span class='continue'>
				<a href='<?php echo $entry->url() ?>'>Continue reading...</a>
			</span>
		</div>
	</article>
	<?php endforeach ?>
</section>
<?php snippet('footer') ?>
