<meta charset='utf-8' />
<meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1' />
<?php if ($page->keywords()): ?>
	<meta name='keywords' content='<?php echo $page->keywords() ?>' />
<?php else: ?>
	<meta name='keywords' content='<?php echo $site->keywords() ?>' />
<?php endif ?>
<?php if ($page->description()): ?>
	<meta name='description' content="<?php echo $page->description() ?>" />
<?php else: ?>
	<meta name='description' content="<?php echo $site->description() ?>" />
<?php endif ?>
<link rel='canonical' href='<?php echo $page->url() ?>' />
<link rel='shortlink' href='<?php echo $page->tinyurl() ?>' />
<link type='text/plain' rel='author' href='<?php echo url() . 'humans.txt' ?>' />
<meta property='og:site_name' content='<?php echo $site->title() ?>' />
<meta property='og:title' content='<?php echo $page->title() ?>' />
<meta property='og:type' content='website' />
<meta property='og:url' content='<?php echo $page->url() ?>' />
<meta name='robots' content='index, follow' />