		<footer id='end'>
			<nav class='footer menu'>
				<span class='copyright'>
					<?php echo kirbytext($site->copyright()) ?>
				</span>
				<?php snippet('main-menu', array('placement' => 'footer')) ?>
			</nav>
		</footer>
	</div>
	<?php snippet('analytics/all') ?>
</body>
</html>
