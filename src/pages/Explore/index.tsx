import React, { useEffect } from 'react';
import ProjectBox from 'components/ProjectBox';
import Dropdown from 'components/Dropdown';
import * as S from './style';
import Layout from 'components/Layout';
import instance from 'apis/httpClient';

const dropdownOptions = [
  {
    id: '0',
    currentOption: '정렬 기준',
    options: ['조회수 순', '인기 순', '최신순'],
  },
  {
    id: '1',
    currentOption: '모집 중',
    options: ['모집중', '모집 종료', '프로젝트 종료'],
  },
];
interface NewProject {
  id: number;
  name: string;
  content: string;
  currentPeople: number;
  requiredPeople: number;
  viewCount: number;
  imgUrl: string;
}

const Explore = () => {
  const [isOpened, setIsOpened] = React.useState([false, false, false]);
  const [myProject, setMyProject] = React.useState<NewProject[]>([]);

  const handleDropdown = (e: React.MouseEvent<HTMLDivElement>) => {
    const { id } = e.currentTarget;
    const parsedId = parseInt(id);
    const copy = [...isOpened];
    copy[parsedId] = !copy[parsedId];
    setIsOpened(copy);
  };

  useEffect(() => {
    instance.get('/project').then((res) => {
      setMyProject(res.data);
    });
  }, []);

  // useEffect(() => {
  //   const fetchData = async (criteria: string, state: string) => {
  //     try {
  //       const response = await instance.get(
  //         `/project?criteria=${criteria}&state=${state}`,
  //       );
  //       setMyProject(response.data);
  //     } catch (error) {
  //       console.error('Error fetching filtered data:', error);
  //     }
  //   };

  //   fetchData('new', 'finding');
  // }, []);

  const sortMethod = () => {
    const fetchData = async (state: string) => {
      try {
        const response = await instance.get(
          `/project?criteria=criteria&state=${state}`,
          { params: { state } },
        );
        setMyProject(response.data);
      } catch (error) {
        console.error('Error fetching filtered data:', error);
      }
    };
  };

  return (
    <Layout>
      <S.Contents>
        <S.Banner />
        <S.Filter>
          {dropdownOptions.map((option) => (
            <Dropdown
              key={option.id}
              isOpened={isOpened[parseInt(option.id)]}
              {...option}
              onClick={handleDropdown}
            />
          ))}
        </S.Filter>
        <S.ProjectContainer>
          {myProject.map((data) => (
            <ProjectBox
              id={data.id}
              key={data.id}
              name={data.name}
              content={data.content}
              currentPeople={data.currentPeople}
              requiredPeople={data.requiredPeople}
              imgUrl={data.imgUrl}
              viewCount={data.viewCount}
            />
          ))}
        </S.ProjectContainer>
      </S.Contents>
    </Layout>
  );
};

export default Explore;
