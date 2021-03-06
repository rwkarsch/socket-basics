var socket = io();


socket.on('connect', function () {
	console.log('Connected to the socket.io server')
});

socket.on('message', function (message) {
	
	// var momentTimestamp
	var momentTimestamp = moment.utc(message.timestamp); 

	console.log('New Message:');
	console.log(message.text);

	jQuery('.messages').append('<p><strong>'+ momentTimestamp.local().format('h:mm a') + ': </strong> ' + message.text + '</p>');
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