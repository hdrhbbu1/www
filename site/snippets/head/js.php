<?php echo js('assets/compiled/site.js') ?>
<?php if ($page->files()->findByExtension('js')): ?>
	<?php foreach ($page->files()->findByExtension('js') as $js): ?>
		<?php echo js($js->url()) ?>
	<?php endforeach ?>
<?php endif ?>