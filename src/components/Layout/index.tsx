import React from 'react';
import Footer from 'components/Footer';
import Header from 'components/Header';
import * as S from './style';

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <S.Background>
      <Header />
      <S.Wrapper>{children}</S.Wrapper>
      <Footer />
    </S.Background>
  );
};

export default Layout;
