import Navbar from '../components/Navbar';
import CounterComponent from '../components/CounterComponent';
import ToggleComponent from '../components/ToggleComponent';
import MessageComponent from '../components/MessageComponent';

export default function ComponentsDemo() {
  return (
    <div>
      <Navbar />
      <h1>Components Demo</h1>
      <CounterComponent title="Click Counter" />
      <ToggleComponent message="Hello, this message can be toggled!" />
      <MessageComponent onMessageChange={() => {}} />
    </div>
  );
}
