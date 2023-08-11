import React from 'react';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Background from './style';

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Background>
      <Header />
      {children}
      <Footer />
    </Background>
  );
};

export default Layout;
