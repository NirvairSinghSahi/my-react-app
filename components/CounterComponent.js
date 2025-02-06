import { useState } from 'react';

export default function CounterComponent({ title }) {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <h2>{title}</h2>
      <p style={{ fontSize: "30px", fontWeight: "bold", color: "#0070f3" }}>
        {count}
      </p>
      <button onClick={() => setCount(count + 1)}>➕ Increment</button>
      <button onClick={() => setCount(count - 1)}>➖ Decrement</button>
    </div>
  );
}
