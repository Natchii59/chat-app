import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { MessagesProps } from '../App';
import Message from './Message';

const ConversationBody = styled.div`
  height: 79vh;
  overflow: scroll;
  scrollbar-width: none;
  margin: 0 0.8rem;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export default function Conversation({ messages }: MessagesProps) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current!.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <ConversationBody>
      {messages
        .sort((a, b) => a.date.getTime() - b.date.getTime())
        .map((m, i) => (
          <Message key={'message-' + i} message={m}></Message>
        ))}

      <div ref={bottomRef}></div>
    </ConversationBody>
  );
}
