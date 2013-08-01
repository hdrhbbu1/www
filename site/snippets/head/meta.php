<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
<link rel="canonical" href="<?php echo html($page->url()) ?>" />
<link rel="shortlink" href="<?php echo $page->tinyurl() ?>" />
<link type="text/plain" rel="author" href="<?php echo url() . "humans.txt" ?>" />
<meta name="robots" content="index, follow" />
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta property="og:site_name" content="<?php echo html($site->title()) ?>" />
<meta property="og:type" content="article" />
<meta property="og:url" content="<?php echo html($page->url()) ?>" />
<meta name="twitter:url" content="<?php echo html($page->url()) ?>" />
<meta name="twitter:site" content="@nicholaswyoung" />
<meta name="twitter:creator" content="@nicholaswyoung" />
<meta name="twitter:card" content="summary" />
<?php if ($page->url() == url()): ?>
	<meta property="og:title" content="<?php echo html("{$site->title()} | {$site->subtitle()}") ?>" />
	<meta name="twitter:title" content="<?php echo html("{$site->title()} | {$site->subtitle()}") ?>" />
<?php else: ?>
	<meta property="og:title" content="<?php echo html("{$page->title()} - {$site->title()}") ?>" />
	<meta name="twitter:title" content="<?php echo html("{$page->title()} - {$site->title()}") ?>" />
<?php endif ?>
<?php if ($page->files()->find("share.jpg")): ?>
	<meta name="og:image" content="<?php echo html($page->files()->find("share.jpg")->url()) ?>" />
	<meta name="twitter:image:src" content="<?php echo html($page->files()->find("share.jpg")->url()) ?>" />
<?php else: ?>
	<?php $home = $pages->find('home') ?>
	<meta name="og:image" content="<?php echo html($home->files()->find("share.jpg")->url()) ?>" />
	<meta name="twitter:image:src" content="<?php echo html($home->files()->find("share.jpg")->url()) ?>" />
<?php endif ?>
<?php if ($page->keywords()): ?>
	<meta name="keywords" content="<?php echo html($page->keywords()) ?>" />
<?php else: ?>
	<meta name="keywords" content="<?php echo html($site->keywords()) ?>" />
<?php endif ?>
<?php if ($page->description()): ?>
	<meta name="description" content="<?php echo html($page->description()) ?>" />
	<meta name="og:description" content="<?php echo html($page->description()) ?>" />
	<meta name="twitter:description" content="<?php echo html($page->description()) ?>" />
<?php elseif ($page->subtitle()): ?>
	<meta name="description" content="<?php echo html($page->subtitle()) ?>" />
	<meta name="og:description" content="<?php echo html($page->subtitle()) ?>" />
	<meta name="twitter:description" content="<?php echo html($page->subtitle()) ?>" />
<?php else: ?>
	<meta name="description" content="<?php echo html($site->description()) ?>" />
	<meta name="og:description" content="<?php echo html($site->description()) ?>" />
	<meta name="twitter:description" content="<?php echo html($site->description()) ?>" />
<?php endif ?>