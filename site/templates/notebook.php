<?php snippet('header') ?>
<section class='content notebook list'>
	<?php $entries = $page->children()->visible()->flip()->paginate(6) ?>
	<?php foreach($entries as $entry): ?>
		<?php snippet('notebook/article', array('entry' => $entry, 'context' => 'list')) ?>
	<?php endforeach ?>
	<?php snippet('pagination', array('entries' => $entries)) ?>
</section>
<?php snippet('footer') ?>
