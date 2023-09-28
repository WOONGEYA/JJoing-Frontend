import React from 'react';
import Layout from 'components/Layout';
import * as S from './style';
import useModal from 'hooks/useModal';
import GenerateModal from 'components/GenerateModal';

const Main = () => {
  const { openModal, closeModal } = useModal();
  const modalOpen = () => {
    openModal({
      component: <GenerateModal closeModal={closeModal} />,
    });
  };

  return (
    <Layout>
      <S.Container>
        <S.MainBox>
          <S.MainContents>
            <S.Title>프로젝트를 함께할 팀원을</S.Title>
            <S.Title>
              <S.Emphasis>쪼잉에서</S.Emphasis>에서 찾아보세요!
            </S.Title>
            <S.SubTitle>관심 분야의 프로젝트를 쉽게 찾을 수 있어요.</S.SubTitle>
            <S.Title style={{ marginBottom: '28px' }}></S.Title>
            <S.Button to='/explore'>쪼잉 시작하기</S.Button>
          </S.MainContents>
        </S.MainBox>
      </S.Container>
    </Layout>
  );
};

export default Main;
