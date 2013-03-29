<!DOCTYPE html>
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
  <meta name='description' content='<?php echo html($site->description()) ?>' />
  <meta name='keywords' content='<?php echo html($site->keywords()) ?>' />
	<meta name='robots' content='index, follow' />
	<?php echo js('assets/compiled/site.js') ?>
  <?php echo css('assets/compiled/style.css') ?>
</head>
<body<?php ecco($page->class(), " class='{$page->class()}'") ?>>

