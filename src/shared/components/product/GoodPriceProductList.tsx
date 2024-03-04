import { Col, Row, Image } from 'antd';
import { useGetProductsQuery } from '../../../generated/schemas';
import ProductItem from './ProductItem';
import Each from '../common/Each';

function GoodPriceProductListComponent() {
  const { data } = useGetProductsQuery();
  return (
    <Row gutter={[24, 24]}>
      <Col span={10}>
        <Image
          height={520}
          width={470}
          preview={false}
          src="//bizweb.dktcdn.net/100/455/315/themes/894917/assets/banner_goodprice.png?1676282094225"
          className="rounded-xl"
        />
      </Col>
      <Col span={14} className="pl-16">
        <Row gutter={[24, 24]}>
          <Each
            arrayOf={data?.products.filter((item) => Number(item.id) <= 6) ?? []}
            render={(item) => (
              <Col key={item.id}>
                <ProductItem sizeImage={180} productItem={item} />
              </Col>
            )}
          />
        </Row>
      </Col>
    </Row>
  );
}

export default GoodPriceProductListComponent;
