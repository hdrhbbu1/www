<?php if ($page->url() != url()): ?>
	<div class='heading constrain'>
		<?php if ($page->title()): ?>
			<h2><?php echo $page->title() ?></h2>
		<?php endif; ?>
		<?php if ($page->subtitle()): ?>
			<span class='subtitle'><?php echo $page->subtitle() ?></span>
		<?php endif; ?>
	</div>
<?php endif; ?>
