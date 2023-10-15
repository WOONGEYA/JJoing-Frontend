import React, { useEffect } from 'react';
import ProjectBox from 'components/ProjectBox';
import Dropdown from 'components/Dropdown';
import * as S from './style';
import Layout from 'components/Layout';
import instance from 'apis/httpClient';
import { useRecoilValue } from 'recoil';
import { sortProject, sortProject2 } from 'apis/recoil';
import Dropdown2 from 'components/Dropdown2';

const dropdownOptions = [
  {
    id: '0',
    currentOption: '최신순',
    options: ['최신순', '조회수 많은 순', '마이쫑 많은 순'],
  },
];

const dropdownOptions2 = [
  {
    id: '0',
    currentOption: '전체 프로젝트',
    options: ['전체 프로젝트', '진행중인 프로젝트', '끝난 프로젝트'],
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
  likeCount: number;
  selectId: number;
  likeState: boolean;
}

const Explore = () => {
  const [isOpened, setIsOpened] = React.useState([false, false, false]);
  const [isOpened2, setIsOpened2] = React.useState([false, false]);
  const [myProject, setMyProject] = React.useState<NewProject[]>([]);

  const handleDropdown = (e: React.MouseEvent<HTMLDivElement>) => {
    const { id } = e.currentTarget;
    const parsedId = parseInt(id);
    const copy = [...isOpened];
    copy[parsedId] = !copy[parsedId];
    setIsOpened(copy);
  };

  const handleDropdown2 = (e: React.MouseEvent<HTMLDivElement>) => {
    const { id } = e.currentTarget;
    const parsedId = parseInt(id);
    const copy = [...isOpened2];
    copy[parsedId] = !copy[parsedId];
    setIsOpened2(copy);
  };

  const projectSort = useRecoilValue(sortProject);
  const projectSort2 = useRecoilValue(sortProject2);

  const fetchProjects = React.useCallback(() => {
    const params: { state?: string; criteria?: string } = {};

    if (!localStorage.getItem('accessToken')) {
      instance.get('/project').then((res) => setMyProject(res.data));
    } else {
      if (projectSort === '진행중인 프로젝트') {
        params.state = 'FINDING';
      } else if (projectSort === '끝난 프로젝트') {
        params.state = 'FOUND';
      }

      if (projectSort2 === '조회수 많은 순') {
        params.criteria = 'view';
      } else if (projectSort2 === '마이쫑 많은 순') {
        params.criteria = 'like';
      }

      instance
        .get('/project', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
          params,
        })
        .then((res) => setMyProject(res.data));
    }
  }, [projectSort, projectSort2]);

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  return (
    <Layout>
      <S.Contents>
        <S.Banner />
        {localStorage.getItem('accessToken') && (
          <S.FilterContainer>
            <S.Filter>
              {dropdownOptions2.map((option) => (
                <Dropdown
                  key={option.id}
                  isOpened={isOpened2[parseInt(option.id)]}
                  {...option}
                  onClick={handleDropdown2}
                />
              ))}
            </S.Filter>
            <S.Filter>
              {dropdownOptions.map((option) => (
                <Dropdown2
                  key={option.id}
                  isOpened={isOpened[parseInt(option.id)]}
                  {...option}
                  onClick={handleDropdown}
                />
              ))}
            </S.Filter>
          </S.FilterContainer>
        )}
        <S.ProjectList>
          <S.Title>프로젝트 목록 😎</S.Title>
          <S.ProjectContainer>
            {myProject.map((data) => (
              <ProjectBox key={data.id} {...data} />
            ))}
          </S.ProjectContainer>
        </S.ProjectList>
      </S.Contents>
    </Layout>
  );
};

export default Explore;
