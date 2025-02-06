import Navbar from '../components/Navbar';
import ToggleComponent from '../components/ToggleComponent';
import GreetingComponent from '../components/GreetingComponent';
import MessageForm from '../components/MessageForm';

export default function UserInteractions() {
  return (
    <div>
      <Navbar />
      <h1>✨ Interactive Components ✨</h1>
      <ToggleComponent message="This is a toggled message!" />
      <GreetingComponent />
      <MessageForm />
    </div>
  );
}
