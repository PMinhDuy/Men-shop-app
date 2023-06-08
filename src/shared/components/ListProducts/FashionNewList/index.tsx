import { Col, Row } from "antd";
import FashionNewItemComponent from "./FashionNewItem";
import { useGetFashionNewsQuery } from "../../../../generated/schemas";

function FashionNewListComponent() {
  const { data } = useGetFashionNewsQuery();
  return (
    <Row justify={"space-between"}>
      {data?.fashionNews?.map((item, index) => (
        <Col key={index}>
          <FashionNewItemComponent
            authorName={item?.authorName}
            avatar={item?.avatar}
            content={item?.content}
            createdAt={item?.createdAt}
            title={item?.title}
          />
        </Col>
      ))}
    </Row>
  );
}

export default FashionNewListComponent;
