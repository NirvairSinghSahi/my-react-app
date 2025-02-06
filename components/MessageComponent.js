import { useState } from 'react';

export default function MessageComponent({ onMessageChange }) {
  const [message, setMessage] = useState('');

  return (
    <div>
      <h2>Type a Message</h2>
      <input 
        type="text" 
        value={message} 
        onChange={(e) => {
          setMessage(e.target.value);
          onMessageChange(e.target.value);
        }} 
        placeholder="Enter your message..."
      />
      <p>Your Message: {message}</p>
    </div>
  );
}
