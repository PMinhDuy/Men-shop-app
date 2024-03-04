import Each from '#/shared/components/common/Each';
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
      <Each
        arrayOf={MESSAGE}
        render={(item, index) => <ChatMessage key={index} message={item.content} isReceive={item.isReceive} />}
      />
    </div>
  );
}

export default ChatMessageContainer;
