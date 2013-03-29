<?php snippet('header') ?>
<section class='content notebook'>
	<?php $entries = $page->children()->visible()->flip()->paginate(2) ?>
	<?php foreach($entries as $entry): ?>
		<?php snippet('article', array('entry' => $entry, 'context' => 'list')) ?>
	<?php endforeach ?>
	<?php snippet('pagination', array('entries' => $entries)) ?>
</section>
<?php snippet('footer') ?>
