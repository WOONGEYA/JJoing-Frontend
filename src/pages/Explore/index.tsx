import React, { useEffect } from 'react';
import ProjectBox from 'components/ProjectBox';
import Dropdown from 'components/Dropdown';
import * as S from './style';
import Layout from 'components/Layout';
import instance from 'apis/httpClient';

const dropdownOptions = [
  {
    id: '0',
    currentOption: '정렬 기준 선택',
    options: ['인기순', '마이쫑 많은 순', '최신순'],
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
        <S.ProjectList>
          <S.Title>프로젝트 목록 😎</S.Title>
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
        </S.ProjectList>
      </S.Contents>
    </Layout>
  );
};

export default Explore;
