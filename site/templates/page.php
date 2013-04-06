<?php snippet('header') ?>
<section class='content<?php ecco($page->class(), " {$page->class()}") ?>'>
	<article<?php ecco($page->class(), " class='{$page->class()}'") ?>>
    <?php echo kirbytext($page->text()) ?>
	</article>
	<aside class='sidebar one'>
		<?php snippet('widgets/newsletter') ?>
		<?php snippet('widgets/notebook') ?>
	</aside>
	<aside class='sidebar two'>
	</aside>
</section>
<?php snippet('footer') ?>
