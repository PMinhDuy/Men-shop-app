import BannerLayout from "../shared/components/layout/BannerLayout";
import ContentLayout from "../shared/components/layout/ContentLayout";
import SidebarLayout from "../shared/components/layout/SidebarLayout";
import HeaderLayout from "./../shared/components/layout/HeaderLayout";

export default function Page() {
  return (
    <div>
      <HeaderLayout />
      <SidebarLayout />
      <BannerLayout />
      <ContentLayout title="sản phẩm hot" />
    </div>
  );
}
