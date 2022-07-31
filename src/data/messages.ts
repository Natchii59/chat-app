export type MessageType = {
  author: number;
  message: string;
  date: Date;
};

const Messages: MessageType[] = [
  {
    author: 1,
    message: 'Hello',
    date: new Date(),
  },
  {
    author: 2,
    message: 'Hello, how are you ?',
    date: new Date(),
  },
];

export default Messages;
