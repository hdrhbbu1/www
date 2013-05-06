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
			<h2 class='subhead'><a href='/work/photos'>Photography</a></h2>
			<p>
				More than any other creative discipline, photography is in my blood. It was my first artistic
				outlet, and continues as a primary form of expression to this day.
			</p>
			<p>
				<a href='/work/photos'>Look &raquo;</a>
			</p>
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
			<h2 class='subhead'><a href='/work/music'>Music</a></h2>
			<p>
				Music is artistic rocket fuel. Notes combine to create melodies, that have the potential to directly affect your mood.
				I've worked with sound for over a decade, and trained my ear as a consummate mix and mastering engineer.
			</p>
			<p>
				<a href='/work/music'>Listen &raquo;</a>
			</p>
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
			<h2 class='subhead'><a href='/work/film'>Film</a></h2>
			<p>
				Combining my other creative discliplines, film a storytelling breakthrough. Motion pictures combine the best of still photography
				and audio storytelling, to create something truly unique.
			</p>
			<p>
				<a href='/work/film'>Watch &raquo;</a>
			</p>
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
		<!--
		<div class='overlay'>
			<h2 class='subhead'><a href='/work/projects'>Projects</a></h2>
			<p>
				I'm a creator. Building things is what I do. When a new idea pops into my head, I can't help but wonder if it might
				help someone else too.
			</p>
			<p>
				<a href='/work/projects'>Explore &raquo;</a>
			</p>
		</div>
		-->
	</div>
	<div class='panel twelve'>
		<img src='<?php echo $imgs[11]->url() ?>' />
	</div>
</section>
<?php snippet('footer') ?>