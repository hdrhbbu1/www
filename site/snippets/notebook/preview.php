<?php foreach($pages->findByUID('notebook')->children()->visible()->flip()->limit(2) as $entry): ?>
	<article class='entry notebook preview'>
		<a href='<?php echo $entry->url() ?>'><h2><?php echo $entry->title() ?></h2></a>
		<div class='metadata'>
			<span class='date'>Published on:</span>
			<date><?php echo $entry->date('M d, Y') ?></date>
		</div>
		<?php echo kirbytext(excerpt($entry->text(), 200)) ?>
	</article>
<?php endforeach ?>
