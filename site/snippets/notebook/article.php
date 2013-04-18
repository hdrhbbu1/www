<article class='notebook <?php echo $context ?><?php ecco($entry->class(), " {$entry->class()}") ?>'>
	<div class='meta'>
		<span class='date'>Published on:</span>
		<date><?php echo $entry->date('F d, Y') ?></date>
		<?php if ($context == 'single'): snippet('notebook/social'); endif ?>
	</div>
	<div class='content'>
		<?php if ($context == 'list'): ?>
			<a href='<?php echo $entry->url(); ?>'>
				<h2><?php echo $entry->title() ?></h2>
			</a>
		<?php endif ?>
		<?php if ($context == 'single'): ?>
			<?php echo kirbytext($entry->text()) ?>
			<?php snippet('notebook/commentary', array('entry' => $page)) ?>
		<?php else: ?>
			<p>
				<?php echo excerpt($entry->text(), 300) ?>
			</p>
			<span class='continue'>
				<a href='<?php echo $entry->url() ?>'>Continue reading...</a>
			</span>
		<?php endif ?>
	</div>
</article>