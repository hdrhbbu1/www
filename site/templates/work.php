<?php snippet('header') ?>
<section class='content<?php ecco($page->class(), " {$page->class()}") ?>'>
	<div<?php ecco($page->class(), " class='{$page->class()}'") ?>>
		<?php foreach($page->children()->visible() as $p): ?>
			<?php snippet($p->snippet(), array('item' => $p)) ?>
		<?php endforeach ?>
	</div>
</section>
<?php snippet('footer') ?>