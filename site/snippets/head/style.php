<?php echo css('assets/compiled/style.css') ?>
<?php if ($page->files()->findByExtension('css')): ?>
	<?php foreach ($page->files()->findByExtension('css') as $css): ?>
		<?php echo css($css->url()) ?>
	<?php endforeach ?>
<?php endif ?>