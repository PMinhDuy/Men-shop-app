import { Col, Row, Typography } from "antd";
import { DoubleLeftOutlined, DoubleRightOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Product, useGetProductsQuery } from "../../../generated/schemas";
import ProductItem from "../common/ProductItem";

interface ContentLayoutInterface {
  title?: string;
  backgroundColor?: string;
}

const CONTENT = [
  {
    id: 0,
    title: "Quần áo",
  },
  {
    id: 1,
    title: "Phụ kiện",
  },
  {
    id: 2,
    title: "Giày dép",
  },
  {
    id: 3,
    title: "Bé gái",
  },
  {
    id: 4,
    title: "Bé trai",
  },
];

function ContentLayout({ title, backgroundColor }: ContentLayoutInterface) {
  const [selectedId, setSelectedId] = useState(0);
  const { data } = useGetProductsQuery();

  console.log("data", data?.products);

  return (
    <div className="bg-[#FFFAF0]">
      <div
        className={`w-full bg[${backgroundColor}] flex justify-between px-[200px] py-[50px]`}
      >
        <Typography.Text className="uppercase font-bold text-4xl text-[#1c5b41]">
          {title}
        </Typography.Text>
        <div className="flex items-center space-x-10">
          <DoubleLeftOutlined
            className="hover:text-[#1c5b41] cursor-pointer"
            onClick={() => setSelectedId((id) => (id === 0 ? 4 : id - 1))}
          />
          <Row gutter={[12, 0]}>
            {CONTENT.map((item) => (
              <Col key={item.id}>
                <div
                  className={`px-[20px] text-base py-2 hover:cursor-pointer ${
                    item.id === selectedId
                      ? "bg-[#FE9614] text-white transition-all duration-400"
                      : ""
                  } rounded-xl`}
                  onClick={() => setSelectedId(item.id)}
                >
                  {item.title}
                </div>
              </Col>
            ))}
          </Row>
          <DoubleRightOutlined
            className="hover:text-[#1c5b41] cursor-pointer"
            onClick={() => setSelectedId((id) => (id === 4 ? 0 : id + 1))}
          />
        </div>
      </div>
      <Row gutter={[24, 24]} justify={"center"}>
        {data?.products?.map((product: Product | null) => {
          return (
            <Col key={product?.id}>
              <ProductItem productItem={product} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default ContentLayout;
