import React from 'react';
import ProjectBox from 'components/ProjectBox';
import Layout from 'components/Layout';
import dummy from 'fixtures/detail.dummy';
import * as S from './style';

const Main = () => {
  return (
    <Layout>
      <S.Contents>
        <S.Banner />
        <S.Projects>
          <S.TrendingContainer>
            <S.Title>인기 급상승 프로젝트 👇</S.Title>
            <S.Trending>
              {dummy
                .filter((data) => data.id <= 6)
                .map((data) => (
                  <ProjectBox
                    key={data.id}
                    title={data.title}
                    description={data.description}
                    currentPeople={data.currentPeople}
                    requiredPeople={data.requiredPeople}
                  />
                ))}
            </S.Trending>
          </S.TrendingContainer>
          <S.RecommendedContainer>
            <S.Title>희성님을 위한 맞춤 프로젝트 👇</S.Title>
            <S.Recommended>
              {dummy
                .filter((data) => data.id <= 6)
                .map((data) => (
                  <ProjectBox
                    key={data.id}
                    title={data.title}
                    description={data.description}
                    currentPeople={data.currentPeople}
                    requiredPeople={data.requiredPeople}
                  />
                ))}
            </S.Recommended>
          </S.RecommendedContainer>
        </S.Projects>
      </S.Contents>
    </Layout>
  );
};

export default Main;
