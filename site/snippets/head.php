<!DOCTYPE html>
<!--
       _      _           _                                           
      (_)    | |         | |                                          
 _ __  _  ___| |__   ___ | | __ _ ___   _   _  ___  _   _ _ __   __ _ 
| '_ \| |/ __| '_ \ / _ \| |/ _` / __| | | | |/ _ \| | | | '_ \ / _` |
| | | | | (__| | | | (_) | | (_| \__ \ | |_| | (_) | |_| | | | | (_| |
|_| |_|_|\___|_| |_|\___/|_|\__,_|___/  \__, |\___/ \__,_|_| |_|\__, |
                                         __/ |                   __/ |
                                        |___/                   |___/ 
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