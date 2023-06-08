import { ReactNode } from "react";
import BannerLayout from "../components/layout/BannerLayout";
import Footer from "../components/layout/Footer";
import HeaderLayout from "../components/layout/HeaderLayout";
import SectionBranch from "../components/layout/SectionBranch";
import SectionGetInformation from "../components/layout/SectionGetInformation";
import SidebarLayout from "../components/layout/SidebarLayout";

interface MainLayoutProps {
  children: ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <HeaderLayout />
      <SidebarLayout />
      <BannerLayout />
      {children}
      <SectionBranch />
      <SectionGetInformation />
      <Footer />
    </>
  );
}

export default MainLayout;
