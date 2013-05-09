<?php snippet('header') ?>
<section class='content notebook list'>
	<?php if (param('tagged')): ?>
		<?php $entries = $page->children()->visible()->flip()->filterBy('tags', param('tagged'), ',') ?>
	<?php else: ?>
		<?php $entries = $page->children()->visible()->flip() ?>
	<?php endif ?>
	<?php $entries = $entries->paginate(6) ?>
	<?php foreach($entries as $entry): ?>
		<?php snippet('notebook/article', array('entry' => $entry, 'context' => 'list')) ?>
	<?php endforeach ?>
	<?php snippet('pagination', array('entries' => $entries)) ?>
</section>
<?php snippet('footer') ?>
