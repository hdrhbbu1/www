<?php snippet('header') ?>
<section class='content notebook'>
	<?php $entries = $page->children()->visible()->flip()->paginate(2) ?>
	<?php foreach($entries as $entry): ?>
	<article<?php ecco($entry->class(), " class='{$entry->class()}'") ?>>
		<div class='metadata'>
			<span class='date'>Published on:</span>
			<date><?php echo $entry->date('F d, Y') ?></date>
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
	<?php if ($entries->pagination()->hasPages()): ?>
		<nav class='pagination'>
			<ul>
				<?php if ($entries->pagination()->hasPrevPage()): ?>
					<li class='prev'>
						<a class='prev' href='<?php echo $entries->pagination()->prevPageURL() ?>'>
							&laquo; Previous
						</a>
					</li>
				<?php endif ?>
				<?php if ($entries->pagination()->hasNextPage()): ?>
					<li class='next'>
						<a class='next' href='<?php echo $entries->pagination()->nextPageURL() ?>'>
							Next &raquo;
						</a>
					</li>
				<?php endif ?>
			</ul>
		</nav>
	<?php endif ?>
</section>
<?php snippet('footer') ?>
