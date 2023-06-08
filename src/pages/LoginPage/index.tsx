import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import Logo from '../../assets/logo.svg'
import Github from '../../assets/github.png'
import Google from '../../assets/google.png'
import * as S from './style';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <S.Button onClick={showModal}>
        Login
      </S.Button>
      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <S.LoginModal>
          <S.LogoPages>
            <S.Logo src={Logo} alt="img" />
          </S.LogoPages>
          <S.GooglePage>
            <S.Page>
              <S.LoginBtn src={Github} alt="" />구글 계정으로 로그인하기
            </S.Page>
          </S.GooglePage>
          <S.GooglePage>
            <S.Page>
              <S.LoginBtn src={Google} alt="" />깃허브 계정으로 로그인하기
            </S.Page>
          </S.GooglePage>
        </S.LoginModal>
      </Modal>
    </>
  );
};

export default App;