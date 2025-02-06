import { useState } from 'react';

export default function GreetingComponent() {
  const [name, setName] = useState('');

  return (
    <div className="card">
      <h2>Enter Your Name</h2>
      <input
        type="text"
        placeholder="Type your name..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p
        style={{
          color: name ? "#0070f3" : "#999",
          fontWeight: "bold",
          transition: "color 0.3s ease",
        }}
      >
        {name ? `Hello, ${name}! 🎉` : "Please enter your name above."}
      </p>
    </div>
  );
}
