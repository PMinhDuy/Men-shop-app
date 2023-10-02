import { CHAT_HASH } from '#/shared/ultils/constant';
import { Drawer } from 'antd';
import { useLocation } from 'react-router-dom';
import ChatHeader from './ChatHeader';
import ChatFooter from './ChatFooter';
import ChatBody from './ChatBody';

function ChatModal() {
  const { hash } = useLocation();

  const chatVisible = hash === CHAT_HASH;

  return (
    <Drawer
      closable={false}
      headerStyle={{ boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)' }}
      placement="right"
      open={chatVisible}
      title={<ChatHeader />}
      footer={<ChatFooter />}
    >
      <ChatBody />
    </Drawer>
  );
}

export default ChatModal;
