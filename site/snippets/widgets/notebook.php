<div class='widget notebook'>
	<?php if ($current): ?>
		<h2 class='subhead'>Other Notebook Entries</h2>
	<?php else: ?>
		<h2 class='subhead'>Recent Notebook Entries</h2>
	<?php endif ?>
	<?php $entries = $pages->findByUid('notebook')->children()->visible()->flip()->limit(3) ?>
	<ul class='basic-list'>
	<?php foreach($entries as $entry): ?>
		<?php if ($current && $current->uri() == $entry->uri()) continue ?>
		<li>
			<a href='<?php echo $entry->url() ?>'><h3><?php echo $entry->title() ?></h3></a>
			<div class='meta'>
				<span class='date'>Published on:</span>
				<date><?php echo $entry->date('M d, Y') ?></date>
			</div>
			<p>
				<?php echo excerpt($entry->text(), 200) ?>
			</p>
		</li>
	<?php endforeach ?>
	</ul>
</div>