import Layout from 'components/Layout';
import * as S from './style';
import MainCover from 'assets/pngs/MainCover.png';
import tab01 from 'assets/pngs/tab01.png';
import tab02 from 'assets/pngs/tab02.png';
import tab03 from 'assets/pngs/tab03.png';
import { useState } from 'react';

type Item = {
  id: number;
  imageSrc: string;
  title: string;
  description: string;
};

const items: Item[] = [
  {
    id: 1,
    imageSrc: tab01,
    title: '프로젝트 찾기 / 만들기',
    description:
      '하고싶었던 프로젝트를 찾거나 만들어보세요.원하던 분위기의 팀이나 팀원을 찾을 수 있어요 !',
  },
  {
    id: 2,
    imageSrc: tab02,
    title: '프로젝트 참여하기',
    description:
      '자신있는 분야를 찾아 자신을 뽐내보세요! 원하던 분위기에서 개발할 수 있어요 .',
  },
  {
    id: 3,
    imageSrc: tab03,
    title: '성장하면서 개발하기',
    description:
      '팀원들과 협업하면서 스스로의 실력을 향상시켜보세요. 프로젝트가 끝나면 더욱 성장한 자신을 볼 수 있어요!',
  },
];

const Main = () => {
  const [currentItem, setCurrentItem] = useState<Item | null>(null);

  const handleButtonClick = (item: Item) => {
    setCurrentItem(item);
  };
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
        <S.MainBox
          style={{
            padding: '220px 204px',
            boxSizing: 'border-box',
            boxShadow: 'none',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <S.Tabs>
            {items.map((item) => (
              <S.TabButton
                key={item.id}
                active={currentItem?.id === item.id}
                onClick={() => handleButtonClick(item)}
              >
                {item.id}
              </S.TabButton>
            ))}
          </S.Tabs>
          {currentItem && (
            <>
              <S.Image
                src={currentItem.imageSrc}
                alt={`이미지 ${currentItem.id}`}
              />
              <S.Description>
                <S.SmallTitle>{currentItem.title}</S.SmallTitle>
                <S.Caption>{currentItem.description}</S.Caption>
              </S.Description>
            </>
          )}
        </S.MainBox>
      </S.Container>
    </Layout>
  );
};

export default Main;
