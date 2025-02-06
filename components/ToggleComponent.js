import { useState } from 'react';

export default function ToggleComponent({ message }) {
  const [visible, setVisible] = useState(true);

  return (
    <div className="card">
      <h2>Toggle Message</h2>
      <p
        style={{
          color: visible ? "#28a745" : "#dc3545",
          fontWeight: "bold",
          transition: "opacity 0.5s ease",
          opacity: visible ? 1 : 0,
        }}
      >
        {visible ? message : "Message is hidden."}
      </p>
      <button onClick={() => setVisible(!visible)}>
        {visible ? "Hide Message" : "Show Message"}
      </button>
    </div>
  );
}
