import { Col, Row, Image, Typography } from "antd";
import Logo from "#/assets/images/logo.png";
import {
  EnvironmentFilled,
  ClockCircleFilled,
  PhoneFilled,
} from "@ant-design/icons";
import FooterInformationContainer from "../common/FooterInformationContainer";

const SHOP_INFORMATION = [
  {
    icon: <EnvironmentFilled />,
    title:
      "Tầng 6, Tòa nhà Ladeco, 266 Đội Cấn, Phường Liễu Giai, Quận Ba Đình, TP Hà Nội",
  },
  {
    icon: <ClockCircleFilled />,
    title:
      "Giờ làm việc: Từ 9:00 đến 22:00 các ngày trong tuần từ Thứ 2 đến Chủ nhật",
  },
  {
    icon: <PhoneFilled />,
    title: "Hotline",
    detail: "1900 6750",
  },
];

function Footer() {
  return (
    <div className="w-full bg-[#212529] px-[200px] py-10">
      <Row>
        <Col className="space-y-4">
          <div className="w-full flex flex-col">
            <Image src={Logo} width={200} height={60} />
            <Typography.Text className="text-primary-yellow-color ">
              Shop thời trang và phụ kiện DuyAmazonShop
            </Typography.Text>
          </div>
          <div className="flex flex-col space-y-2">
            {SHOP_INFORMATION.map((item, id) => (
              <FooterInformationContainer
                key={id}
                icon={item.icon}
                title={item.title}
                detail={item.detail}
              />
            ))}
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Footer;
