import { useState } from 'react';
import Conversation from './components/Conversation';
import Footer from './components/Footer';
import Header from './components/Header';
import Messages, { MessageType } from './data/messages';

export type MessagesProps = {
  messages: MessageType[];
  setMessages?: React.Dispatch<React.SetStateAction<MessageType[]>>;
};

export default function App() {
  const [messages, setMessages] = useState<MessageType[]>(Messages);

  return (
    <>
      <Header />

      <Conversation messages={messages} />

      <Footer messages={messages} setMessages={setMessages} />
    </>
  );
}
