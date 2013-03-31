<?php snippet('header') ?>
<section class='content<?php ecco($page->class(), " {$page->class()}") ?>'>
	<article<?php ecco($page->class(), " class='{$page->class()}'") ?>>
    <?php echo kirbytext($page->text()) ?>
	</article>
	<aside class='sidebar one'>
		<h3 class='subhead'>Recent Articles</h3>
		<?php snippet('notebook/preview') ?>
	</aside>
	<aside class='sidebar two'>
		<!-- more content? -->
	</aside>
</section>
<?php snippet('footer') ?>
