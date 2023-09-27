import { ReactNode } from 'react';
import Footer from '../components/layout/Footer';
import HeaderLayout from '../components/layout/HeaderLayout';
import SectionGetInformation from '../components/layout/SectionGetInformation';
import SidebarLayout from '../components/layout/SidebarLayout';

interface MainLayoutProps {
  children: ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <HeaderLayout />
      <SidebarLayout />
      {children}
      <SectionGetInformation />
      <Footer />
    </>
  );
}

export default MainLayout;
