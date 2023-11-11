import React, { useEffect, useState, useRef } from 'react';
import Layout from 'components/Layout';
import { MainCover, tab1, tab2, tab3, card1, card2, card3 } from 'assets/png';
import LoginModal from 'components/LoginModal';
import useModal from 'hooks/useModal';
import { useNavigate } from 'react-router-dom';
import * as S from './style';

const Main = () => {
  const { openModal, closeModal } = useModal();
  const navigate = useNavigate();

  const merit1Ref = useRef<HTMLDivElement>(null);
  const merit2Ref = useRef<HTMLDivElement>(null);
  const merit3Ref = useRef<HTMLDivElement>(null);

  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      if (
        merit3Ref.current &&
        scrollY >= merit3Ref.current.offsetTop - windowHeight / 2
      ) {
        setActiveSection(3);
      } else if (
        merit2Ref.current &&
        scrollY >= merit2Ref.current.offsetTop - windowHeight / 2
      ) {
        setActiveSection(2);
      } else if (
        merit1Ref.current &&
        scrollY >= merit1Ref.current.offsetTop - windowHeight / 2
      ) {
        setActiveSection(1);
      } else {
        setActiveSection(0);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleModalOpen = () => {
    openModal({
      component: <LoginModal closeModal={closeModal} />,
    });
  };

  const checkLoginStatus = () => {
    const accessToken = localStorage.getItem('accessToken');
    return accessToken !== null;
  };

  const handleStartButton = () => {
    const isUserLoggedIn = checkLoginStatus();

    if (isUserLoggedIn) {
      navigate('/explore');
    } else {
      handleModalOpen();
    }
  };

  return (
    <Layout>
      <S.Welcome>
        <S.Landing>
          <S.WelcomeContent>
            <div>
              <S.Title>
                프로젝트를 함께 할 팀원을
                <S.Emphasis>쪼잉</S.Emphasis>에서 찾아보세요!
              </S.Title>
              <S.Subtitle>
                관심 분야의 프로젝트를 직접 생성하거나 찾아보세요. 쪼잉은 더
                나은 프로젝트 경험을 위해 시작되었습니다.
              </S.Subtitle>
              <S.Button onClick={handleStartButton}>쪼잉 시작하기</S.Button>
            </div>
          </S.WelcomeContent>
          <S.MainImage src={MainCover}></S.MainImage>
        </S.Landing>
      </S.Welcome>
      <S.Merit>
        <S.Title style={{ marginBottom: 0 }}>쪼잉은 이런 점이 좋아요!</S.Title>
        <S.MeritContainer
          ref={merit1Ref}
          style={{ opacity: activeSection >= 1 ? 1 : 0 }}
        >
          <S.MeritImage>
            <S.Page>
              <S.Number $active={activeSection >= 1 ? 'true' : 'false'}>
                1
              </S.Number>
              <S.Image src={tab1} />
            </S.Page>
          </S.MeritImage>
          <S.MeritText>
            <S.MainMerit>프로젝트 찾기 / 만들기</S.MainMerit>
            <S.MeritDescription>
              하고싶었던 프로젝트를 찾거나 직접 만들어 보세요. 원하던 분위기의
              팀이나 팀원을 찾을 수도 있어요!
            </S.MeritDescription>
          </S.MeritText>
        </S.MeritContainer>
        <S.MeritContainer
          ref={merit2Ref}
          style={{ opacity: activeSection >= 2 ? 1 : 0 }}
        >
          <S.MeritImage>
            <S.Page>
              <S.Number $active={activeSection >= 2 ? 'true' : 'false'}>
                2
              </S.Number>
              <S.Image src={tab2} />
            </S.Page>
          </S.MeritImage>
          <S.MeritText>
            <S.MainMerit>프로젝트 찾기 / 만들기</S.MainMerit>
            <S.MeritDescription>
              하고싶었던 프로젝트를 찾거나 직접 만들어 보세요. 원하던 분위기의
              팀이나 팀원을 찾을 수도 있어요!
            </S.MeritDescription>
          </S.MeritText>
        </S.MeritContainer>
        <S.MeritContainer
          ref={merit3Ref}
          style={{ opacity: activeSection >= 3 ? 1 : 0 }}
        >
          <S.MeritImage>
            <S.Page>
              <S.Number $active={activeSection >= 3 ? 'true' : 'false'}>
                3
              </S.Number>
              <S.Image src={tab3} />
            </S.Page>
          </S.MeritImage>
          <S.MeritText>
            <S.MainMerit>프로젝트 찾기 / 만들기</S.MainMerit>
            <S.MeritDescription>
              하고싶었던 프로젝트를 찾거나 직접 만들어 보세요. 원하던 분위기의
              팀이나 팀원을 찾을 수도 있어요!
            </S.MeritDescription>
          </S.MeritText>
        </S.MeritContainer>
      </S.Merit>
      <S.Help>
        <S.Title>쪼잉이 도와줄 수 있어요!</S.Title>
        <S.HelpContent>
          <S.Tabs>
            <S.Tab>
              <S.TabContent>
                <S.TabTitle>
                  원하는 분야의 프로젝트를 빠르게 찾을 수 있도록
                </S.TabTitle>
                <S.TabImage src={card1} />
              </S.TabContent>
            </S.Tab>
            <S.Tab>
              <S.TabContent>
                <S.TabTitle>
                  원하는 분위기의 프로젝트 팀을 찾을 수 있도록
                </S.TabTitle>
                <S.TabImage src={card2} />
              </S.TabContent>
            </S.Tab>
            <S.Tab>
              <S.TabContent>
                <S.TabTitle>
                  협업으로 내 실력을 더 높이 끌어올릴 수 있도록
                </S.TabTitle>
                <S.TabImage src={card3} />
              </S.TabContent>
            </S.Tab>
          </S.Tabs>
          <S.Login onClick={handleStartButton}>쪼잉 로그인 하러가기</S.Login>
        </S.HelpContent>
      </S.Help>
    </Layout>
  );
};

export default Main;
