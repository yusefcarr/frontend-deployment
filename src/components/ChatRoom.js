import React, { useState } from 'react';

const ChatRoom = () => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { user: 'User1', message: 'Welcome to the chat room!' },
    { user: 'User2', message: 'Hi everyone!' },
  ]);

  // Handle sending a new message
  const sendMessage = (e) => {
    e.preventDefault();

    if (message.trim()) {
      setChatHistory([...chatHistory, { user: 'You', message }]);
      setMessage(''); // Clear the input field
    }
  };

  return (
    <div className="chat-room-container">
      <h2>Chat Room</h2>
      
      {/* Chat Window */}
      <div className="chat-window">
        {chatHistory.map((chat, index) => (
          <div key={index} className="chat-message">
            <strong>{chat.user}:</strong> {chat.message}
          </div>
        ))}
      </div>

      {/* Message Input */}
      <form onSubmit={sendMessage} className="chat-form">
        <input
          type="text"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="chat-input"
        />
        <button type="submit" className="chat-send-button">
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatRoom;
