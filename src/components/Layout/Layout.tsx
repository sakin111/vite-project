
import React from "react";
import  type { ReactNode } from "react";
import Navbar from "./NavBar/NavBar";
import Footer from "./Footer";



interface LayoutProps {
  children: ReactNode;
  hideNav?: boolean;
  hideFooter?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, hideNav, hideFooter }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {!hideNav && <Navbar />}
      <main className="flex-1">{children}</main>
      {!hideFooter && <Footer />}
    </div>
  );
};

export default Layout;