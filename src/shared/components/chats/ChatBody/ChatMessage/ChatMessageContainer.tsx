import ChatMessage from '.';

const MESSAGE = [
  {
    content: 'Hello',
    isReceive: true,
  },
  {
    content: 'World',
  },
  {
    content: 'WorldWorldssssdfdfdfsdfvssdvsvsdvdsvdsvorWorldWorld',
    isReceive: true,
  },
  {
    content: 'orWorldWorldorWorldWorld',
  },
  {
    content: 'orWorldWorldorWorldWorldorWorldWorldorWorldWorld',
  },
];

function ChatMessageContainer() {
  return (
    <div className="flex flex-col w-full gap-2">
      {MESSAGE.map((message, id) => (
        <ChatMessage key={id} message={message.content} isReceive={message.isReceive} />
      ))}
    </div>
  );
}

export default ChatMessageContainer;
