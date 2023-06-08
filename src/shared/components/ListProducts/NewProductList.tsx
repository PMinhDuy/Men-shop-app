import { Col, Row, Image } from "antd";
import { Product, useGetProductsQuery } from "../../../generated/schemas";
import ProductItem from "../common/ProductItem";

export default function NewProductListComponent() {
  const { data } = useGetProductsQuery();

  return (
    <Row gutter={[24, 24]}>
      <Col span={10}>
        <Image
          height={520}
          width={470}
          preview={false}
          src="//bizweb.dktcdn.net/100/455/315/themes/894917/assets/banner_new.png?1676282094225"
          className="rounded-xl"
        />
      </Col>
      <Col span={14} className="pl-16">
        <Row gutter={[24, 24]}>
          {data?.products
            ?.filter((item) => Number(item?.id) <= 6)
            .map((product: Product | null) => {
              return (
                <Col key={product?.id}>
                  <ProductItem sizeImage={180} productItem={product} />
                </Col>
              );
            })}
        </Row>
      </Col>
    </Row>
  );
}
