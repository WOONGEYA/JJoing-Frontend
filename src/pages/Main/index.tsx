import React from 'react';
import Layout from 'components/Layout';
import ProjectBox from 'components/ProjectBox';
import instance from 'apis/httpClient';
import * as S from './style';

interface ProjectDataType {
  id: number;
  name: string;
  content: string;
}

const Main = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [projectData, setProjectData] = React.useState<ProjectDataType[]>([]);

  React.useEffect(() => {
    fetchAllProjects();
  }, []);

  const fetchAllProjects = async () => {
    try {
      const accessToken = localStorage.getItem('accessToken');

      const response = (
        await instance.get('/project', {
          headers: {
            Authorization: accessToken,
          },
        })
      ).data;

      setProjectData(response);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <S.Contents>
        <S.Banner />
        <S.Projects>
          <S.TrendingContainer>
            <S.Title>인기 급상승 프로젝트 👇</S.Title>
            <S.Trending>
              {!isLoading ? (
                projectData ? (
                  projectData.map((data: any) => (
                    <ProjectBox
                      key={data.id}
                      title={data.name}
                      description={data.content}
                      currentPeople={data.currentPeople}
                      requiredPeople={data.requiredPeople}
                    />
                  ))
                ) : (
                  <h1>프로젝트가 없습니다.</h1>
                )
              ) : (
                <h1>불러오는 중...</h1>
              )}
            </S.Trending>
          </S.TrendingContainer>
          <S.RecommendedContainer>
            <S.Title>희성님을 위한 맞춤 프로젝트 👇</S.Title>
            <S.Recommended>
              {!isLoading ? (
                projectData ? (
                  projectData.map((data: any) => (
                    <ProjectBox
                      key={data.id}
                      title={data.name}
                      description={data.content}
                      currentPeople={data.currentPeople}
                      requiredPeople={data.requiredPeople}
                    />
                  ))
                ) : (
                  <h1>프로젝트가 없습니다.</h1>
                )
              ) : (
                <h1>불러오는 중...</h1>
              )}
            </S.Recommended>
          </S.RecommendedContainer>
        </S.Projects>
      </S.Contents>
    </Layout>
  );
};

export default Main;
