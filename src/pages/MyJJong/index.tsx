import React, { useState } from 'react';
import Footer from 'components/Footer';
import Header from 'components/Header';
import * as S from './style';
import instance from 'apis/httpClient';
import ProjectBox from 'components/ProjectBox';

interface Project {
  id: number;
  name: string;
  content: string;
  currentPeople: number;
  requiredPeople: number;
  viewCount: number;
  imgUrl: string;
  likeCount: number;
  selectId: number;
  likeState: boolean;
}

const MyJJong = () => {
  const [projectJJoing, setProjectJJoing] = useState<Project[]>([]);

  React.useEffect(() => {
    const fetchedData = async () => {
      try {
        const response = (await instance.get('/like/my')).data;
        setProjectJJoing(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchedData();
  }, []);

  return (
    <>
      <Header />
      <S.Container>
        <S.Header>
          <S.Title>마이쫑에 추가한 프로젝트</S.Title>
        </S.Header>
        <S.Projects>
          {projectJJoing.length > 0 ? (
            projectJJoing.map((data) => (
              <ProjectBox
                id={data.id}
                key={data.id}
                name={data.name}
                content={data.content}
                currentPeople={data.currentPeople}
                requiredPeople={data.requiredPeople}
                imgUrl={data.imgUrl}
                viewCount={data.viewCount}
                likeCount={data.likeCount}
                likeState={data.likeState}
              />
            ))
          ) : (
            <S.NoJJoingContainer>
              <S.NoJJoingText>마이쫑에 추가한 알림이 없습니다</S.NoJJoingText>
            </S.NoJJoingContainer>
          )}
        </S.Projects>
      </S.Container>
      <Footer />
    </>
  );
};

export default MyJJong;
