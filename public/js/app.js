var socket = io();

socket.on('connect', function () {
	console.log('Connected to the socket.io server')
});

socket.on('message', function (message) {
	console.log('New Message:');
	console.log(message.text);
});

// Handles submitting of new message
var $form = jQuery('#message-form');

$form.on('submit', function (event) {
	event.preventDefault();

	var $message = $form.find('input[name=message]');

	socket.emit('message', {
		text: $form.find('input[name=message]').val()
	});

	$message.val('');
});