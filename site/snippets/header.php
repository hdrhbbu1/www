<?php snippet('head') ?>
<header class='top<?php ecco($page->class(), " {$page->class()}") ?>'>
	<nav class='main'>
		<a class='logo' href='<?php echo url() ?>'>
			<h1>Nicholas Young</h1>
		</a>
		<?php snippet('main-menu') ?>
	</nav>
	<?php snippet('heading') ?>
</header>
