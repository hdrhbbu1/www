<?php header("Content-type: text/xml; charset='utf-8'") ?>
<?php echo "<?xml version='1.0' encoding='utf-8'?>" ?>
<urlset xmlns='http://www.sitemaps.org/schemas/sitemap/0.9'>
<?php foreach($pages->index() as $page): ?>
	<?php if(in_array($page->uri(), array('sitemap', 'error'))) continue ?>
	<url>
		<loc><?php echo html($page->url()) ?></loc>
		<lastmod><?php echo $page->modified('c') ?></lastmod>
		<priority><?php echo ($page->isHomePage()) ? 1 : number_format(0.5 / $page->depth(), 1) ?></priority>
	</url>
<?php endforeach ?>
</urlset>