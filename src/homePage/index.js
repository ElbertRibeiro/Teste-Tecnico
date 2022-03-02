import ChatBot from 'react-simple-chatbot';
import steps from '../components/Chatbot';

export default function Chat() {
  return (
    <div>
      <ChatBot steps={steps}/>
    </div>
  );
}
