<ul>
	<?php foreach ($pages->visible() as $page): ?>
		<li>
		<a<?php echo ($page->isOpen()) ? " class='active'" : ''?> href='<?php echo $page->url() ?>'>
				<?php echo html($page->title()) ?>
			</a>
		</li>
	<?php endforeach ?>
</ul>
