import { useState } from 'react';
import Navbar from '../components/Navbar';

export default function Toggle() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      <Navbar />
      <h1>Toggle Message</h1>
      {isVisible && <p>This message is visible!</p>}
      <button onClick={() => setIsVisible(!isVisible)}>Toggle Message</button>
    </div>
  );
}
