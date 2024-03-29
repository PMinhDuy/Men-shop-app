import { Col, Row, Image } from 'antd';
import { useGetProductsQuery } from '../../../generated/schemas';
import ProductItem from './ProductItem';
import Each from '../common/Each';

function SaleProductListComponent() {
  const { data } = useGetProductsQuery({
    fetchPolicy: 'network-only',
  });

  return (
    <div className="flex flex-col gap-6">
      <div>
        <Image
          preview={false}
          src="//bizweb.dktcdn.net/100/455/315/themes/894917/assets/banner_sale.png?1676282094225"
        />
      </div>
      <Row justify={'space-between'}>
        <Each
          arrayOf={data?.products.filter((item) => Number(item.id) <= 5) ?? []}
          render={(item) => (
            <Col key={item.id}>
              <ProductItem
                className={{
                  titleColor: 'text-white',
                }}
                sizeImage={200}
                productItem={item}
              />
            </Col>
          )}
        />
      </Row>
    </div>
  );
}

export default SaleProductListComponent;
