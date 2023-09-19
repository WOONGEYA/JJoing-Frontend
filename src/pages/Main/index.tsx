import Layout from 'components/Layout';
import * as S from './style';

const Main = () => {
  return (
    <Layout>
      <S.Contents>
        <S.Banner />
        <S.Projects>
          <S.TrendingContainer>
            <S.Title>인기 급상승 프로젝트 👇</S.Title>
            <S.Trending></S.Trending>
          </S.TrendingContainer>
          <S.RecommendedContainer>
            <S.Title>희성님을 위한 맞춤 프로젝트 👇</S.Title>
            <S.Recommended></S.Recommended>
          </S.RecommendedContainer>
        </S.Projects>
      </S.Contents>
    </Layout>
  );
};

export default Main;
