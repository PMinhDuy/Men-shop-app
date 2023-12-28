import { Col, Row } from 'antd';
import ProductItem from './ProductItem';
import { useGetProductsQuery } from '../../../generated/schemas';

export default function HotProductListComponent() {
  const { data } = useGetProductsQuery();

  return (
    <Row gutter={[24, 24]} justify={'space-between'}>
      {data?.products
        .filter((item) => Number(item.id) <= 10)
        .map((product) => {
          return (
            <Col key={product.id}>
              <ProductItem sizeImage={200} productItem={product} />
            </Col>
          );
        })}
    </Row>
  );
}
