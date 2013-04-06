<!DOCTYPE html>
<!--
/*
 * Copyright 2013 Nicholas Young. All rights reserved.
 * Markup, images, or stylesheets may not be copied
 * without express permission.
 *
 * Feel free to read, learn different techniques,
 * and use them on your site - but don't just copy
 * and paste. Thanks!
 */
-->
<html lang='en'>
<head>
	<?php snippet('head/title') ?>
	<?php snippet('head/meta') ?>
	<?php snippet('head/style') ?>
	<?php snippet('head/js') ?>
</head>
<body<?php ecco($page->class(), " class='{$page->class()}'") ?>>