import { Col, Divider, Row, Typography } from "antd";
import { PhoneOutlined } from "@ant-design/icons";

const SideBarInformation = [
  {
    title: "Trang chủ",
  },
  {
    title: "Thời trang Nam",
  },
  {
    title: "Sản phẩm",
  },
  {
    title: "Bé trai",
  },
  {
    title: "Bé gái",
  },
  {
    title: "Tin tức",
  },
  {
    title: "Liên hệ",
  },
];

function SidebarLayout() {
  return (
    <div className="h-16 flex px-40 items-center justify-between w-full bg-[#FFFAF0]">
      <Row gutter={24} className="space-x-6">
        {SideBarInformation.map((items) => (
          <Col className="text-base text-[#1C5B41] font-bold">
            {items.title}
          </Col>
        ))}
      </Row>
      <div className="flex items-center justify-between space-x-4">
        <Divider type="vertical" className="bg-[#1C5B41] h-4" />
        <div className="flex items-center space-x-2">
          <PhoneOutlined />
          <Typography className="text-[#1C5B41] text-base font-semibold">
            Hotline: 1900 6750
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default SidebarLayout;
