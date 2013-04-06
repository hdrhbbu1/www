<div class='widget notebook'>
	<h2 class='subhead'>Recent Entries</h2>
	<?php $entries = $pages->findByUid('notebook')->children()->visible()->flip()->limit(2) ?>
	<?php foreach($entries as $entry): ?>
		<article class='notebook preview'>
			<a href='<?php echo $entry->url() ?>'><h2><?php echo $entry->title() ?></h2></a>
			<div class='meta'>
				<span class='date'>Published on:</span>
				<date><?php echo $entry->date('M d, Y') ?></date>
			</div>
			<p>
				<?php echo excerpt($entry->text(), 200) ?>
			</p>
		</article>
	<?php endforeach ?>
</div>