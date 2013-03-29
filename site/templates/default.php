<?php snippet('header') ?>
<section class='content<?php ecco($page->class(), " {$page->class()}") ?>'>
	<article<?php ecco($page->class(), " class='{$page->class()}'") ?>>
    <?php echo kirbytext($page->text()) ?>
  </article>
</section>
<?php snippet('footer') ?>
