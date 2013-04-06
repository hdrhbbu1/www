<?php if ($page->url() == url()): ?>
	<title><?php echo html($site->title()) ?> | <?php echo html($site->subtitle()) ?></title>
<?php else: ?>
	<title><?php echo html($page->title()) ?> - <?php echo html($site->title()) ?></title>
<?php endif ?>