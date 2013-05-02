<?php if (!isset($root)) return; ?>
<?php if ( in_array($root->uri(), array('notebook') ) ) return ?>
<ul class='sub-menu'>
	<?php foreach ($root->children()->visible() as $p): ?>
		<li<?php ecco($p->isOpen(), " class='active'") ?>>
			<a<?php ecco($p->isOpen(), " class='active'") ?> href='<?php echo $p->url() ?>'><?php echo $p->title() ?></a>
		</li>
	<?php endforeach ?>
</ul>