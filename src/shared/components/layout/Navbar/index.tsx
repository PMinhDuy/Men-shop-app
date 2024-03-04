import { Col, Divider, Row, Typography } from 'antd';
import { PhoneOutlined } from '@ant-design/icons';

const SideBarInformation = [
  {
    id: '0',
    title: 'Trang chủ',
  },
  {
    id: '1',
    title: 'Thời trang Nam',
    subItem: [
      {
        id: '1-0',
        title: 'Sơ mi nam',
      },
      {
        id: '1-1',
        title: 'Quần âu nam',
      },
      {
        id: '1-2',
        title: 'Quần short nam',
      },
    ],
  },
  {
    id: '2',
    title: 'Sản phẩm',
    subItem: [
      {
        id: '2-0',
        title: 'Sản phẩm nổi bật',
        subItem: [
          {
            id: '2-0-0',
            title: 'Quần áo',
          },
          {
            id: '2-0-1',
            title: 'Phụ kiện',
          },
          {
            id: '2-0-2',
            title: 'Giầy dép',
          },
          {
            id: '2-0-2',
            title: 'Bé trai',
          },
          {
            id: '2-0-2',
            title: 'Bé gái',
          },
        ],
      },
      {
        id: '2-1',
        title: 'Sản phẩm hot trend',
      },
      {
        id: '2-2',
        title: 'Sản phẩm khuyến mãi',
      },
    ],
  },
  {
    id: '3',
    title: 'Bé trai',
  },
  {
    id: '4',
    title: 'Bé gái',
  },
  {
    id: '5',
    title: 'Tin tức',
  },
  {
    id: '6',
    title: 'Liên hệ',
  },
];

function NavBar() {
  return (
    <div className="h-16 flex px-40 items-center justify-between w-full bg-[#FFFAF0]">
      <div className="flex gap-14 relative justify-between">
        {SideBarInformation.map((item) => (
          <div key={item.id}>
            <div className="text-base text-primary-green-color font-bold">{item.title}</div>
            {item.subItem && (
              <div className="flex flex-col bg-[#FFFAF0] absolute">
                {item.subItem.map((i) => (
                  <div key={i.id}>{i.title}</div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between space-x-4">
        <Divider type="vertical" className="bg-primary-green-color h-4" />
        <div className="flex items-center space-x-2">
          <PhoneOutlined />
          <Typography className="text-primary-green-color text-base font-semibold">Hotline: 1900 6750</Typography>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
