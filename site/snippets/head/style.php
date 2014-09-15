<?php echo css('assets/compiled/style.css') ?>
<?php if ($page->files()->findByExtension('css')): ?>
	<?php foreach ($page->files()->findByExtension('css') as $css): ?>
		<?php echo css($css->url()) ?>
	<?php endforeach ?>
<?php endif ?>
<?php if ($page->uid() == 'notebook'): ?>
	<?php $styles = $page->children()->visible()->flip()->first()->files()->findByExtension('css') ?>
	<?php if ($styles): ?>
		<?php foreach($styles as $css): ?>
			<?php echo css($css->url()) ?>
		<?php endforeach?>
	<?php endif ?>
<?php endif ?>
