<div class='widget<?php ecco($item->class(), " #{$item->class()}") ?>'>
	<span class='desc'>
		<h2 class='subhead'><?php echo $item->title() ?></h2>
	</span>
	<ul class='photos'>
		<?php foreach($item->files()->findByExtension('jpg') as $photo): ?>
			<li class='photo'>
				<img src='<?php echo $photo->url() ?>' />
			</li>
		<?php endforeach ?>
	</ul>
</div>