import FashionNewListComponent from "../shared/components/ListProducts/FashionNewList";
import GoodPriceProductListComponent from "../shared/components/ListProducts/GoodPriceProductList";
import HotProductListComponent from "../shared/components/ListProducts/HotProductList";
import NewProductListComponent from "../shared/components/ListProducts/NewProductList";
import SaleProductListComponent from "../shared/components/ListProducts/SaleProductList";
import ContentLayout from "../shared/components/layout/ContentLayout";
import MainLayout from "../shared/hocs/MainLayout";

const CONTENT_LAYOUT = [
  {
    title: "sản phẩm hot",
    childrenComponent: <HotProductListComponent />,
    className: {
      titleColor: "text-[#1c5b41]",
      backgroundColor: "bg-[#FFFAF0]",
      backgroundButtonColor: "bg-[#1c5b41]",
    },
  },
  {
    title: "hàng mới về",
    childrenComponent: <NewProductListComponent />,
    showButton: false,
    className: {
      titleColor: "text-[#1c5b41]",
      backgroundColor: "bg-white",
      backgroundButtonColor: "bg-[#1c5b41]",
    },
  },
  {
    title: "sale đồng giá - đừng lo về giá",
    childrenComponent: <SaleProductListComponent />,
    className: {
      titleColor: "text-white",
      backgroundColor: "bg-[#1c5b41]",
      backgroundButtonColor: "bg-[#FE9614]",
    },
    showSidebar: false,
  },
  {
    title: "sản phẩm giá tốt",
    childrenComponent: <GoodPriceProductListComponent />,
    className: {
      titleColor: "text-[#1c5b41]",
      backgroundColor: "bg-[#FFFAF0]",
      backgroundButtonColor: "bg-[#1c5b41]",
    },
    showButton: false,
  },
  {
    title: "tin tức thời trang",
    childrenComponent: <FashionNewListComponent />,
    className: {
      titleColor: "text-[#1c5b41]",
      backgroundColor: "bg-[#FFFAF0]",
      backgroundButtonColor: "bg-[#1c5b41]",
    },
    showButton: false,
    showSidebar: false,
  },
];

export default function Page() {
  return (
    <>
      <MainLayout>
        <>
          {CONTENT_LAYOUT.map((item, index) => (
            <ContentLayout
              key={index}
              title={item.title}
              childrenComponent={item.childrenComponent}
              className={{
                titleColor: item.className.titleColor,
                backgroundColor: item.className.backgroundColor,
                backgroundButtonColor: item.className.backgroundButtonColor,
              }}
              showButton={item.showButton}
              showSidebar={item.showSidebar}
            />
          ))}
        </>
      </MainLayout>
    </>
  );
}
