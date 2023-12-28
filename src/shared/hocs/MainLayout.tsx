import type { ReactNode } from 'react';
import Footer from '../components/layout/Footer';
import HeaderLayout from '../components/layout/Header';
import SectionGetInformation from '../components/layout/SectionGetInformation';
import SidebarLayout from '../components/layout/SidebarLayout';

interface MainLayoutProps {
  children: ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="z-40">
      <HeaderLayout />
      <SidebarLayout />
      {children}
      <SectionGetInformation />
      <Footer />
    </div>
  );
}

export default MainLayout;
