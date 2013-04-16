<?php

$form = new contactform(array(
  'to'       => 'Nicholas Young <nicholas@nicholaswyoung.com>',
  'from'     => 'Contact Form <nicholas@nicholaswyoung.com>',
  'subject'  => 'New contact form request',
  'goto'     => $page->url() . '/status:thank-you'
));

?>
<?php if(param('status') == 'thank-you'): ?>
	<h3>
		Thanks for your request. I'll be in touch as soon as possible.
	</h3>
<?php else: ?>
	<form action='#contactform' method='post' class='contactform'>
      <?php if($form->isError('send')): ?>
      	<div class='contactform-alert'>The email could not be sent. Please try again later.</div>
      <?php elseif($form->isError()): ?>
      	<div class='contactform-alert'>The form could not be submitted. Please fill in all fields correctly.</div>
      <?php endif ?>
		<label class='contactform-label<?php if($form->isError('name')) echo ' error' ?>' for='contactform-name'>
			Name
		</label>
		<input class='contactform-input' type='text' id='contactform-name' name='name' value='<?php echo $form->htmlValue('name') ?>' />
		<label class='contactform-label<?php if($form->isError('email')) echo ' error' ?>' for='contactform-email'>Email Address</label>
		<input class='contactform-input' type='text' id='contactform-email' name='email' value='<?php echo $form->htmlValue('email') ?>' />
		<label class='contactform-label<?php if($form->isError('text')) echo ' error' ?>' for='contactform-text'>Message</label>
		<textarea class='contactform-input' name='text' id='contactform-text'><?php echo $form->htmlValue('text') ?></textarea>
		<button>Send</button>
  </form>
<?php endif ?>