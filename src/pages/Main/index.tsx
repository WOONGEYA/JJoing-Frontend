import Layout from 'components/Layout';
import * as S from './style';
import MainCover from 'assets/pngs/MainCover.png';

const Main = () => {
  return (
    <Layout>
      <S.Container>
        <S.MainBox>
          <S.CoverImage src={MainCover} />
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
        <S.MainBox
          style={{
            padding: '220px 204px',
            boxSizing: 'border-box',
            boxShadow: 'none',
          }}
        >
          <S.Title>쪼잉은 이런게 좋아요</S.Title>
          <S.Content>
            <S.Photo></S.Photo>
            <S.TextArea>
              <S.SubTitle style={{ fontWeight: '500' }}>
                안녕하세요안녕하세요
              </S.SubTitle>
              <S.Title2 style={{ fontWeight: '300' }}>
                안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요
                안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요
              </S.Title2>
            </S.TextArea>
          </S.Content>
        </S.MainBox>
        <S.MainBox
          style={{
            padding: '220px 204px',
            boxSizing: 'border-box',
            boxShadow: 'none',
          }}
        >
          <S.Title>어떻게 진행되나요?</S.Title>
          <S.Title2 style={{ fontWeight: '200' }}>
            혼자라서 미뤄왔던 프로젝트를 쪼잉으로 도전해보세요 ! 자신의 분야를
            살리고 좋은 팀원을 고를 수 있습니다. 많은 사람들을 만나면서 실력을
            쌓아보세요.
          </S.Title2>
        </S.MainBox>
      </S.Container>
    </Layout>
  );
};

export default Main;
