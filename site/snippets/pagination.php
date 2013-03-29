<?php if ($entries->pagination()->hasPages()): ?>
	<nav class='pagination'>
		<ul>
			<?php if ($entries->pagination()->hasPrevPage()): ?>
				<li class='prev'>
					<a class='prev' href='<?php echo $entries->pagination()->prevPageURL() ?>'>
						&laquo; Previous
					</a>
				</li>
			<?php endif ?>
			<?php if ($entries->pagination()->hasNextPage()): ?>
				<li class='next'>
					<a class='next' href='<?php echo $entries->pagination()->nextPageURL() ?>'>
						Next &raquo;
					</a>
				</li>
			<?php endif ?>
		</ul>
	</nav>
<?php endif ?>
