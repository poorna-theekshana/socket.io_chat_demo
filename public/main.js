const socket = io(); // Connect to the server

// Listen for chat messages from the server
socket.on('chat message', (msg) => {
  const messageList = document.getElementById('messages');
  const messageItem = document.createElement('li');
  messageItem.textContent = msg;
  messageList.appendChild(messageItem);
});

// Handle form submission to send chat messages
document.getElementById('messageForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const messageInput = document.getElementById('messageInput');
  const message = messageInput.value;

  // Send the message to the server
  socket.emit('chat message', message);
  messageInput.value = ''; // Clear the input field
});
