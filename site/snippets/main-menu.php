<ul class='menu <?php echo $placement ?> <?php ecco($page->class(), $page->class()) ?>'>
	<li class='mobile-only'></li>
	<?php foreach ($pages->visible() as $page): ?>
		<li<?php ecco($page->isOpen(), " class='active'") ?>>
		<a<?php ecco($page->isOpen(), " class='active'") ?> href='<?php echo $page->url() ?>'>
				<?php echo html($page->title()) ?>
			</a>
			<?php if ($page->children()->visible() && $placement == 'main'): ?>
				<?php snippet('sub-menu', array('root' => $page)) ?>
			<?php endif ?>
		</li>
	<?php endforeach ?>
	<?php if ($placement == 'footer'): ?>
		<?php $colophon = $pages->findByUID('colophon')->first() ?>
		<li>
			<a href='<?php echo $colophon->url() ?>'><?php echo $colophon->title() ?></a>
		</li>
	<?php endif ?>
</ul>
