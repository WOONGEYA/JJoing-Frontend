import React from 'react';
import ProjectBox from 'components/ProjectBox';
import Header from 'components/Header';
import Footer from 'components/Footer';
import * as S from './style';

const Main = () => {
  return (
    <S.Container>
      <Header />
      <S.Contents>
        <S.Banner />
        <S.Projects>
          <S.TrendingContainer>
            <S.Title>인기 급상승 프로젝트 👇</S.Title>
            <S.Trending>
              {/** map 쓸 수 있도로 ㄱ 나중에 바꿀 것 */}
              <ProjectBox />
              <ProjectBox />
              <ProjectBox />
              <ProjectBox />
              <ProjectBox />
              <ProjectBox />
            </S.Trending>
          </S.TrendingContainer>
          <S.RecommendedContainer>
            <S.Title>희성님을 위한 맞춤 프로젝트 👇</S.Title>
            <S.Recommended>
              <ProjectBox />
              <ProjectBox />
              <ProjectBox />
              <ProjectBox />
              <ProjectBox />
              <ProjectBox />
            </S.Recommended>
          </S.RecommendedContainer>
        </S.Projects>
      </S.Contents>
      <Footer />
    </S.Container>
  );
};

export default Main;
