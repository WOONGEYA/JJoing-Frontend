import Layout from 'components/Layout';
import MainCover from 'assets/pngs/MainCover.png';
import tab01 from 'assets/pngs/tab01.png';
import tab02 from 'assets/pngs/tab02.png';
import tab03 from 'assets/pngs/tab03.png';
import card01 from 'assets/pngs/card01.png';
import card02 from 'assets/pngs/card02.png';
import card03 from 'assets/pngs/card03.png';
import useModal from 'hooks/useModal';
import LoginModal from 'components/LoginModal';
import * as S from './style';
import { useEffect, useState } from 'react';
import instance from 'apis/httpClient';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

interface UserProfile {
  statusMessage: string;
  nickName: string;
  githubUrl: string;
  name: string;
  email: string;
  imgUrl: string;
  school: string;
  major: string;
}

const Main = () => {
  const { openModal, closeModal } = useModal();
  const [redirect, setRedirect] = useState<UserProfile | null>(null);
  const navigate = useNavigate();

  const handleModalOpen = () => {
    openModal({
      component: <LoginModal closeModal={closeModal} />,
    });
  };

  const getUserId = async () => {
    const { data } = await instance.get('/user', {
      headers: { Authorization: localStorage.getItem('accessToken') },
    });
    setRedirect(data);
  };

  useEffect(() => {
    getUserId();
  }, []);

  return (
    <Layout>
      <S.Welcome>
        <S.Landing>
          <S.WelcomeContent>
            <div>
              <S.Title>
                프로젝트를 함께 할 팀원을{'\n'}
                <S.Emphasis>쪼잉</S.Emphasis>에서 찾아보세요!
              </S.Title>
              <S.Subtitle>
                관심 분야의 프로젝트를 직접 생성하거나 찾아보세요.{'\n'}
                쪼잉은 더 나은 프로젝트 경험을 위해 시작되었습니다.
              </S.Subtitle>
              <S.Button onClick={handleModalOpen}>쪼잉 시작하기</S.Button>
            </div>
          </S.WelcomeContent>
          <S.MainImage src={MainCover}></S.MainImage>
        </S.Landing>
      </S.Welcome>
      <S.Merit>
        <S.Title style={{ marginBottom: 0 }}>쪼잉은 이런 점이 좋아요!</S.Title>
        <S.MeritContainer>
          <S.MeritImage>
            <S.Page>
              <S.Number $active='true'>1</S.Number>
              <S.Number>2</S.Number>
              <S.Number>3</S.Number>
            </S.Page>
            <S.Image src={tab01} />
          </S.MeritImage>
          <S.MeritText>
            <S.MainMerit>프로젝트 찾기 / 만들기</S.MainMerit>
            <S.MeritDescription>
              하고싶었던 프로젝트를 찾거나 직접 만들어 보세요. {'\n'}
              원하던 분위기의 팀이나 팀원을 찾을 수도 있어요!
            </S.MeritDescription>
          </S.MeritText>
        </S.MeritContainer>
        <S.MeritContainer>
          <S.MeritImage>
            <S.Page>
              <S.Number>1</S.Number>
              <S.Number $active='true'>2</S.Number>
              <S.Number>3</S.Number>
            </S.Page>
            <S.MeritText>
              <S.MainMerit>프로젝트 시작하기</S.MainMerit>
              <S.MeritDescription>
                자신있는 분야를 찾아 실력을 마음껏 뽐내보세요! {'\n'}
                원하던 프로젝트 속에서 최선을 다 해 보아요.
              </S.MeritDescription>
            </S.MeritText>
          </S.MeritImage>
          <S.MeritText>
            <S.Image src={tab02} />
          </S.MeritText>
        </S.MeritContainer>
        <S.MeritContainer>
          <S.MeritImage>
            <S.Page>
              <S.Number>1</S.Number>
              <S.Number>2</S.Number>
              <S.Number $active='true'>3</S.Number>
            </S.Page>
            <S.Image src={tab03} />
          </S.MeritImage>
          <S.MeritText>
            <S.MainMerit>프로젝트를 하며 성장하기</S.MainMerit>
            <S.MeritDescription>
              팀원들과 협업하면서 스스로의 실력을 향상시켜보세요. {'\n'}
              프로젝트가 끝나면 더욱 성장한 자신을 볼 수 있어요!
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
                <S.TabImage src={card01} />
              </S.TabContent>
            </S.Tab>
            <S.Tab>
              <S.TabContent>
                <S.TabTitle>
                  원하는 분위기의 프로젝트 팀을 찾을 수 있도록
                </S.TabTitle>
                <S.TabImage src={card02} />
              </S.TabContent>
            </S.Tab>
            <S.Tab>
              <S.TabContent>
                <S.TabTitle>
                  협업으로 내 실력을 더 높이 끌어올릴 수 있도록
                </S.TabTitle>
                <S.TabImage src={card03} />
              </S.TabContent>
            </S.Tab>
          </S.Tabs>
          <S.Login onClick={handleModalOpen}>쪼잉 로그인 하러가기</S.Login>
        </S.HelpContent>
      </S.Help>
    </Layout>
  );
};

export default Main;
