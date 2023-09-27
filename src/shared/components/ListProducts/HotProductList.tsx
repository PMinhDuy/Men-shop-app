import { Col, Row } from "antd";
import ProductItem from "../common/ProductItem";
import { Product, useGetProductsQuery } from "../../../generated/schemas";
import { useEffect, useState } from "react";

export default function HotProductListComponent() {
  const { data } = useGetProductsQuery();

  const [test, setTest] = useState(0);

  useEffect(() => {
    console.log(test);
  }, []);

  return (
    <Row gutter={[24, 24]} justify={"space-between"}>
      {data?.products
        ?.filter((item) => Number(item?.id) <= 10)
        .map((product: Product | null) => {
          return (
            <Col key={product?.id}>
              <ProductItem sizeImage={200} productItem={product} />
            </Col>
          );
        })}
    </Row>
  );
}
