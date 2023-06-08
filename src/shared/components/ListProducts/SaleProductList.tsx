import { Col, Row, Image } from "antd";
import { Product, useGetProductsQuery } from "../../../generated/schemas";
import ProductItem from "../common/ProductItem";

function SaleProductListComponent() {
  const { data } = useGetProductsQuery();
  return (
    <div className="flex flex-col gap-6">
      <div>
        <Image
          preview={false}
          src="//bizweb.dktcdn.net/100/455/315/themes/894917/assets/banner_sale.png?1676282094225"
        />
      </div>
      <Row justify={"space-between"}>
        {data?.products
          ?.filter((item) => Number(item?.id) <= 5)
          .map((product: Product | null) => {
            return (
              <Col key={product?.id}>
                <ProductItem
                  className={{
                    titleColor: "text-white",
                  }}
                  sizeImage={200}
                  productItem={product}
                />
              </Col>
            );
          })}
      </Row>
    </div>
  );
}

export default SaleProductListComponent;
