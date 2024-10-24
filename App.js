const chatBox = document.getElementById('chat-box');
const inputField = document.getElementById('input-field');
const sendButton = document.getElementById('send-button');

const botResponses = {
    hello: "Hi there! How can I assist you today?",
    help: "Sure, what do you need help with?",
    goodbye: "Goodbye! Have a great day!",
    default: "Sorry, I didn't understand that. Can you please clarify?"
};

function addMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');

    if (sender === 'user') {
        messageElement.classList.add('user-message');
    } else {
        messageElement.classList.add('bot-message');
    }

    messageElement.textContent = message;
    chatBox.appendChild(messageElement);

    setTimeout(() => {
        messageElement.style.transform = 'translateX(0)';
        messageElement.style.opacity = '1';
    }, 100);

    chatBox.scrollTop = chatBox.scrollHeight;
}

function handleUserInput() {
    const userMessage = inputField.value.trim().toLowerCase();

    if (userMessage === "") return;

    addMessage(userMessage, 'user');

    let botMessage = botResponses[userMessage] || botResponses.default;

    setTimeout(() => {
        addMessage(botMessage, 'bot');
    }, 500);

    inputField.value = "";
}

sendButton.addEventListener('click', handleUserInput);

inputField.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        handleUserInput();
    }
});