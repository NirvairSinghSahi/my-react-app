import { useState } from 'react';

export default function MessageForm() {
  const [message, setMessage] = useState('');
  const [submittedMessage, setSubmittedMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedMessage(message);
    setMessage('');
  };

  return (
    <div className="card">
      <h2>Enter a Message</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button type="submit">Submit</button>
      </form>
      {submittedMessage && (
        <p style={{ fontWeight: "bold", color: "#0047ab", transition: "opacity 0.3s ease-in" }}>
          You submitted: {submittedMessage} ✅
        </p>
      )}
    </div>
  );
}
