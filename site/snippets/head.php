<!DOCTYPE html>
<!--
/*
 * Copyright 2013 Nicholas Young. All rights reserved.
 * Markup, images, or stylesheets may not be copied
 * without express permission.
 *
 * Feel free to read, learn different techniques,
 * and use them on your site - but don't just copy
 * and paste. Thanks!
 */
-->
<html lang='en'>
<head>
	<?php if ($page->url() == url()): ?>
		<title>
			<?php echo html($site->title()) ?> | <?php echo html($site->subtitle()) ?>
		</title>
	<?php else: ?>
		<title>
			<?php echo html($page->title()) ?> - <?php echo html($site->title()) ?>
		</title>
	<?php endif; ?>
	<meta charset='utf-8' />
	<meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1' />
	<meta name='description'
		<?php if ($page->description()): ?>
			content="<?php echo html($page->description()) ?>"
		<?php else: ?>
			content="<?php echo html($site->description()) ?>"
		<?php endif ?>	
	/>
  <meta name='keywords' content='<?php echo html($site->keywords()) ?>' />
	<meta name='robots' content='index, follow' />
	<?php echo js('assets/compiled/site.js') ?>
	<?php echo css('assets/compiled/style.css') ?>
	<?php if ($page->files()->findByExtension('css')): ?>
		<?php foreach ($page->files()->findByExtension('css') as $css): ?>
			<?php echo css($css->url()) ?>
		<?php endforeach ?>
	<?php endif ?>
</head>
<body<?php ecco($page->class(), " class='{$page->class()}'") ?>>

