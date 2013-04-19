<?php
	$items = $pages->find($page->path())->children()->visible()->flip()->limit(10);
	snippet('feed', array(
		'link' => $pages->find($page->path())->url(),
		'items' => $items,
		'descriptionField' => 'text',
		'descriptionLength' => 300
	))
?>