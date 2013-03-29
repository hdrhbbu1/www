<?php snippet('header') ?>
<section class='content<?php ecco($page->class(), " {$page->class()}") ?>'>
	<article class='page'>
		<?php snippet('contactform') ?>
	</article>
	<aside class='sidebar one'>
		<h3>Sidebar One</h3>
	</aside>
	<aside class='sidebar two'>
		<h3>Sidebar Two</h3>
	</aside>
</section>
<?php snippet('footer') ?>
