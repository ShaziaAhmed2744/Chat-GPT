const chatBox = document.getElementById('chat-box');
const messageInput = document.getElementById('message');
const sendBtn = document.getElementById('send-btn');

let messages = [];

sendBtn.addEventListener('click', () => {
	const message = messageInput.value;
	if (message !== '') {
		messages.push({
			sender: 'user',
			text: message,
			timestamp: new Date().toLocaleString()
		});
		displayMessages();
		messageInput.value = '';
	}
});

function displayMessages() {
	chatBox.innerHTML = '';
	messages.forEach(message => {
		const messageDiv = document.createElement('div');
		messageDiv.className = message.sender === 'user' ? 'alert alert-primary' : 'alert alert-secondary';
		messageDiv.innerHTML = `
			<strong>${message.sender === 'user' ? 'You' : 'Bot'}</strong> (${message.timestamp}):<br>
			${message.text}
		`;
		chatBox.appendChild(messageDiv);
	});
}

messages.push({
	sender: 'bot',
	text: 'Hi there! How can I help you?',
	timestamp: new Date().toLocaleString()
});

displayMessages();
