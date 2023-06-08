import { Col, Row, Image, Typography } from "antd";
import Logo from "../../../assets/images/logo.png";

function Footer() {
  return (
    <div className="w-full bg-[#212529]">
      <div className="w-full">
        <Image src={Logo} width={200} height={60} />
        <Typography.Text>
          Shop thời trang và phụ kiện DuyAmazonShop
        </Typography.Text>
      </div>
      <Row>
        <Col></Col>
      </Row>
    </div>
  );
}

export default Footer;
