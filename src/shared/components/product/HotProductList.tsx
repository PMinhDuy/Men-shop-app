import { Col, Row } from 'antd';
import ProductItem from './ProductItem';
import { useGetProductsQuery } from '../../../generated/schemas';
import Each from '../common/Each';

export default function HotProductListComponent() {
  const { data } = useGetProductsQuery();

  return (
    <Row gutter={[24, 24]} justify={'space-between'}>
      <Each
        arrayOf={data?.products.filter((item) => Number(item.id) <= 10) ?? []}
        render={(item) => (
          <Col key={item.id}>
            <ProductItem sizeImage={200} productItem={item} />
          </Col>
        )}
      />
    </Row>
  );
}
