<!DOCTYPE html>
<html lang='en'>
<head>  
	<title>
		<?php echo html($site->title()) ?> - <?php echo html($page->title()) ?>
	</title>
  <meta charset='utf-8' />
  <meta name='description' content='<?php echo html($site->description()) ?>' />
  <meta name='keywords' content='<?php echo html($site->keywords()) ?>' />
  <meta name='robots' content='index, follow' />
  <?php echo css('assets/compiled/style.css') ?>
</head>
<body>

