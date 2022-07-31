import styled from 'styled-components';
import { MessageType } from '../data/messages';

type MessageProps = {
  message: MessageType;
};

type MessageBodyProps = {
  primary: boolean;
  date: Date;
};
const MessageBpdy = styled.div<MessageBodyProps>`
  max-width: 90%;
  word-wrap: break-word;
  padding: 0.6rem;
  border-radius: 0.6rem;
  background-color: ${({ primary }) =>
    primary ? 'var(--primary)' : '#d5d5d5'};
  align-self: ${({ primary }) => (primary ? 'flex-end' : 'flex-start')};

  & p {
    color: ${({ primary }) => (primary ? 'white' : 'black')};
  }
`;

export default function Message({ message }: MessageProps) {
  return (
    <MessageBpdy primary={message.author === 1} date={message.date}>
      <p>{message.message}</p>
    </MessageBpdy>
  );
}
