<?php snippet('header') ?>
<section class='content<?php ecco($page->class(), " {$page->class()}") ?>'>
	<?php $images = $page->images()->not('header.jpg')->shuffle()->limit(12) ?>
	<?php
		$imgs = array();
		foreach($images as $img):
			array_push($imgs, $img);
		endforeach;
	?>
	<div class='panel one'>
		<img src='<?php echo $imgs[0]->url() ?>' />
	</div>
	<div class='panel two'>
		<img src='<?php echo $imgs[1]->url() ?>' />
		<div class='overlay'>
			<h2 class='subhead'>Photography</h2>
		</div>
	</div>
	<div class='panel three'>
		<img src='<?php echo $imgs[2]->url() ?>' />
	</div>
	<div class='panel four'>
		<img src='<?php echo $imgs[3]->url() ?>' />
	</div>
	<div class='panel five'>
		<img src='<?php echo $imgs[4]->url() ?>' />
		<div class='overlay'>
			<h2 class='subhead'>Music</h2>
		</div>
	</div>
	<div class='panel six'>
		<img src='<?php echo $imgs[5]->url() ?>' />
	</div>
	<div class='panel seven'>
		<img src='<?php echo $imgs[6]->url() ?>' />
	</div>
	<div class='panel eight'>
		<img src='<?php echo $imgs[7]->url() ?>' />
		<div class='overlay'>
			<h2 class='subhead'>Film</h2>
		</div>
	</div>
	<div class='panel nine'>
		<img src='<?php echo $imgs[8]->url() ?>' />
	</div>
	<div class='panel ten'>
		<img src='<?php echo $imgs[9]->url() ?>' />
	</div>
	<div class='panel eleven'>
		<img src='<?php echo $imgs[10]->url() ?>' />
		<div class='overlay'>
			<h2 class='subhead'>Projects</h2>
		</div>
	</div>
	<div class='panel twelve'>
		<img src='<?php echo $imgs[11]->url() ?>' />
	</div>
</section>
<?php snippet('footer') ?>