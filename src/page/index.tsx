import FashionNewListComponent from "../shared/components/ListProducts/FashionNewList";
import GoodPriceProductListComponent from "../shared/components/ListProducts/GoodPriceProductList";
import HotProductListComponent from "../shared/components/ListProducts/HotProductList";
import NewProductListComponent from "../shared/components/ListProducts/NewProductList";
import SaleProductListComponent from "../shared/components/ListProducts/SaleProductList";
import BannerLayout from "../shared/components/layout/BannerLayout";
import ContentLayout from "../shared/components/layout/ContentLayout";
import SectionBranch from "../shared/components/layout/SectionBranch";
import MainLayout from "../shared/hocs/MainLayout";

const CONTENT_LAYOUT = [
  {
    title: "sản phẩm hot",
    childrenComponent: <HotProductListComponent />,
    className: {
      titleColor: "text-primary-green-color",
      backgroundColor: "bg-[#FFFAF0]",
      backgroundButtonColor: "bg-primary-green-color",
    },
  },
  {
    title: "hàng mới về",
    childrenComponent: <NewProductListComponent />,
    showButton: false,
    className: {
      titleColor: "text-primary-green-color",
      backgroundColor: "bg-white",
      backgroundButtonColor: "bg-primary-green-color",
    },
  },
  {
    title: "sale đồng giá - đừng lo về giá",
    childrenComponent: <SaleProductListComponent />,
    className: {
      titleColor: "text-white",
      backgroundColor: "bg-primary-green-color",
      backgroundButtonColor: "bg-primary-yellow-color",
    },
    showSidebar: false,
  },
  {
    title: "sản phẩm giá tốt",
    childrenComponent: <GoodPriceProductListComponent />,
    className: {
      titleColor: "text-primary-green-color",
      backgroundColor: "bg-[#FFFAF0]",
      backgroundButtonColor: "bg-primary-green-color",
    },
    showButton: false,
  },
  {
    title: "tin tức thời trang",
    childrenComponent: <FashionNewListComponent />,
    className: {
      titleColor: "text-primary-green-color",
      backgroundColor: "bg-[#FFFAF0]",
      backgroundButtonColor: "bg-primary-green-color",
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
          <BannerLayout />
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
          <SectionBranch />
        </>
      </MainLayout>
    </>
  );
}
