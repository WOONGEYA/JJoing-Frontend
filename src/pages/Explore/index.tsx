import React from 'react';
import Layout from 'components/Layout';
import Dropdown from 'components/Dropdown';
import ProjectBox from 'components/ProjectBox';
import instance from 'apis/httpClient';
import * as S from './style';

const dropdownOptions = [
  {
    id: '0',
    currentOption: '개발 분야',
    options: ['Web', 'iOS', 'Android', '게임', '기타'],
  },
  {
    id: '1',
    currentOption: '모집 직군',
    options: ['Front-end', 'Back-end', 'Designer', '기타'],
  },
  {
    id: '2',
    currentOption: '정렬 기준',
    options: ['인기순', '조회수 많은 순', '최신순'],
  },
];

interface ProjectDataType {
  id: number;
  name: string;
  content: string;
}

const Explore = () => {
  const [isOpened, setIsOpened] = React.useState([false, false, false]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [projectData, setProjectData] = React.useState<ProjectDataType[]>([]);
  const accessToken = localStorage.getItem('accessToken');

  React.useEffect(() => {
    fetchAllProjects();
  }, []);

  const fetchAllProjects = async () => {
    try {
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

  const handleDropdown = (e: React.MouseEvent<HTMLDivElement>) => {
    const { id } = e.currentTarget;
    const parsedId = parseInt(id);
    const copy = [...isOpened];
    copy[parsedId] = !copy[parsedId];
    setIsOpened(copy);
  };

  return (
    <Layout>
      <S.Contents>
        <S.Banner />
        <S.Filter>
          {dropdownOptions.map((option) => (
            <Dropdown
              key={option.id}
              {...option}
              isOpened={isOpened[parseInt(option.id)]}
              onClick={handleDropdown}
            />
          ))}
        </S.Filter>
        <S.ProjectList>
          <S.Title>프로젝트 목록 😎</S.Title>
          <S.ProjectContainer>
            {!isLoading ? (
              projectData ? (
                // 지금 요청받은 데이터가 좀 달라서 any는 임시방편으로 사용함
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
          </S.ProjectContainer>
        </S.ProjectList>
      </S.Contents>
    </Layout>
  );
};

export default Explore;
