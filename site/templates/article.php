<?php snippet('header') ?>
<section class='content notebook'>
	<article<?php ecco($page->class(), " class='{$page->class()}'") ?>>
		<div class='metadata'>
			<span class='date'><h2>Posted on:</h2></span>
			<date><?php echo $page->date('M d, Y') ?></date>
		</div>
		<div class='content'>
			<?php echo kirbytext($page->text()) ?>
		</div>
	</article>
</section>
<?php snippet('footer') ?>
