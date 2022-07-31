import styled from 'styled-components';
import { FiSend } from 'react-icons/fi';
import { useState } from 'react';
import { MessagesProps } from '../App';

const FooterBody = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  width: 96%;
  margin: 0 auto 0.8rem auto;
  border-radius: 1rem;
  background-color: white;
  box-shadow: 0 0 8px #16161643;
  padding: 0.6rem;
  display: flex;
  align-items: center;

  & button {
    background: none;
    border: none;
    font-size: 1.4rem;
    display: flex;
    align-items: center;

    &:hover {
      cursor: pointer;
      color: var(--primary);
    }

    &:focus {
      color: var(--primary);
      outline: none;
    }
  }
`;

const MessageInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 1rem;
  padding: 0.4rem;
`;

export default function Footer({ messages, setMessages }: MessagesProps) {
  const [message, setMessage] = useState<string>('');

  const handleSendMessage = () => {
    if (!!message) {
      setMessages!([
        ...messages,
        {
          message,
          author: 1,
          date: new Date(),
        },
      ]);
      setMessage('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSendMessage();
  };

  return (
    <FooterBody>
      <MessageInput
        type='text'
        placeholder='Votre message'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <button onClick={handleSendMessage}>
        <FiSend />
      </button>
    </FooterBody>
  );
}
