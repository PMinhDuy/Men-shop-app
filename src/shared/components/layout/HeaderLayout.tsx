import { Button, Col, Divider, Image, Input, Row, Select, Space } from "antd";
import Logo from "../../../assets/images/logo.png";
import {
  UserOutlined,
  ShoppingOutlined,
  SearchOutlined,
} from "@ant-design/icons";

const { Search } = Input;

export default function HeaderLayout() {
  return (
    <div className="bg-[#1C5B41] w-full h-[90px]">
      <Row
        justify="center"
        className="flex justify-center h-full w-full items-center"
      >
        <Col span={6} className="flex justify-center">
          <Image src={Logo} width={200} height={60} />
        </Col>
        <Col span={12} className="flex justify-center">
          <Space.Compact size="large" className="rounded-xl w-full">
            <Select
              className="w-[100px] "
              defaultValue="Tất cả"
              options={[
                {
                  label: "Tất cả",
                  value: "Tất cả",
                },
                {
                  label: "Áo quần",
                  value: "Áo quần",
                },
              ]}
            />
            <Input
              placeholder="Tìm sản phẩm bạn mong muốn"
              className="w-[400px]"
            />
            <Button className="bg-[#FE9614] flex items-center justify-center">
              <SearchOutlined className="text-white" />
            </Button>
          </Space.Compact>
        </Col>
        <Col
          span={6}
          className="flex items-center justify-start space-x-4 text-white text-base"
        >
          <div className="space-x-2 cursor-pointer hover:text-[#FE9614] flex items-center">
            <UserOutlined />
            <div>Đăng nhập/Đăng ký</div>
          </div>
          <Divider type="vertical" className="bg-white h-4" />
          <ShoppingOutlined width={100} height={100} />
        </Col>
      </Row>
    </div>
  );
}
