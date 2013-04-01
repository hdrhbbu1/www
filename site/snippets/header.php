<?php snippet('head') ?>
<header class='top<?php ecco($page->class(), " {$page->class()}") ?>'>
	<?php snippet('header-background') ?>
	<div class='wrap'>
		<nav class='main'>
			<a class='logo' href='<?php echo url() ?>'>
			<h1><?php echo $site->title() ?></h1>
			</a>
			<?php snippet('main-menu', array('placement' => 'main')) ?>
		</nav>
	</div>
	<?php if (!$page->url() != url()): ?>
		<?php snippet('heading') ?>
	<?php endif ?>
</header>
