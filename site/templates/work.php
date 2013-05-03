<?php snippet('header') ?>
<section class='content<?php ecco($page->class(), " {$page->class()}") ?>'>
	<div class='panel one'>
		<img src='<?php echo $page->images()->find('panel.jpg')->url() ?>' />
	</div>
	<div class='panel two'>
		<img src='<?php echo $page->images()->find('panel.jpg')->url() ?>' />
		<div class='overlay'>
			<h2 class='subhead'>Photography</h2>
		</div>
	</div>
	<div class='panel three'>
		<img src='<?php echo $page->images()->find('panel.jpg')->url() ?>' />
	</div>
	<div class='panel four'>
		<img src='<?php echo $page->images()->find('panel.jpg')->url() ?>' />
	</div>
	<div class='panel five'>
		<img src='<?php echo $page->images()->find('panel.jpg')->url() ?>' />
		<div class='overlay'>
			<h2 class='subhead'>Music</h2>
		</div>
	</div>
	<div class='panel six'>
		<img src='<?php echo $page->images()->find('panel.jpg')->url() ?>' />
	</div>
	<div class='panel seven'>
		<img src='<?php echo $page->images()->find('panel.jpg')->url() ?>' />
	</div>
	<div class='panel eight'>
		<img src='<?php echo $page->images()->find('panel.jpg')->url() ?>' />
		<div class='overlay'>
			<h2 class='subhead'>Film</h2>
		</div>
	</div>
	<div class='panel nine'>
		<img src='<?php echo $page->images()->find('panel.jpg')->url() ?>' />
	</div>
	<div class='panel ten'>
		<img src='<?php echo $page->images()->find('panel.jpg')->url() ?>' />
	</div>
	<div class='panel eleven'>
		<img src='<?php echo $page->images()->find('panel.jpg')->url() ?>' />
		<div class='overlay'>
			<h2 class='subhead'>Projects</h2>
		</div>
	</div>
	<div class='panel twelve'>
		<img src='<?php echo $page->images()->find('panel.jpg')->url() ?>' />
	</div>
</section>
<?php snippet('footer') ?>