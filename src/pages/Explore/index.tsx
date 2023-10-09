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

  useEffect(() => {
    instance.get('/project').then((res) => {
      setMyProject(res.data);
    });
  }, []);

  useEffect(() => {
    if (projectSort === '진행중인 프로젝트') {
      instance
        .get('/project', {
          params: { state: 'FINDING' },
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        })
        .then((res) => {
          setMyProject(res.data);
        });
    }
    if (projectSort === '끝난 프로젝트') {
      instance
        .get('/project', {
          params: { state: 'FOUND' },
        })
        .then((res) => {
          setMyProject(res.data);
        });
    }
    if (projectSort === '전체 프로젝트') {
      instance.get('/project').then((res) => {
        setMyProject(res.data);
      });
    }
  }, [projectSort]);

  useEffect(() => {
    if (
      projectSort === '진행중인 프로젝트' &&
      projectSort2 === '마이쫑 많은 순'
    ) {
      instance
        .get('/project', {
          params: { criteria: 'like', state: 'FINDING' },
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        })
        .then((res) => {
          setMyProject(res.data);
        });
    }
    if (
      projectSort === '진행중인 프로젝트' &&
      projectSort2 === '조회수 많은 순'
    ) {
      instance
        .get('/project', {
          params: { criteria: 'view', state: 'FINDING' },
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        })
        .then((res) => {
          setMyProject(res.data);
        });
    }
    if (projectSort === '진행중인 프로젝트' && projectSort2 === '최신순') {
      instance
        .get('/project', {
          params: { state: 'FINDING' },
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        })
        .then((res) => {
          setMyProject(res.data);
        });
    }
    if (projectSort === '끝난 프로젝트' && projectSort2 === '마이쫑 많은 순') {
      instance
        .get('/project', {
          params: { criteria: 'like', state: 'FOUND' },
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        })
        .then((res) => {
          setMyProject(res.data);
        });
    }
    if (projectSort === '끝난 프로젝트' && projectSort2 === '조회수 많은 순') {
      instance
        .get('/project', {
          params: { criteria: 'view', state: 'FOUND' },
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        })
        .then((res) => {
          setMyProject(res.data);
        });
    }
    if (projectSort === '끝난 프로젝트' && projectSort2 === '최신순') {
      instance
        .get('/project', {
          params: { state: 'FOUND' },
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        })
        .then((res) => {
          setMyProject(res.data);
        });
    }

    if (projectSort === '전체 프로젝트' && projectSort2 === '마이쫑 많은 순') {
      instance
        .get('/project', {
          params: { criteria: 'like' },
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        })
        .then((res) => {
          setMyProject(res.data);
        });
    }
    if (projectSort === '전체 프로젝트' && projectSort2 === '조회수 많은 순') {
      instance
        .get('/project', {
          params: { criteria: 'view' },
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        })
        .then((res) => {
          setMyProject(res.data);
        });
    }
    if (projectSort === '전체 프로젝트' && projectSort2 === '최신순') {
      instance
        .get('/project', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        })
        .then((res) => {
          setMyProject(res.data);
        });
    }
  }, [projectSort2]);

  console.log('projectSort', projectSort);
  console.log('projectSort2', projectSort2);

  return (
    <Layout>
      <S.Contents>
        <S.Banner />
        <S.FilterContainer>
          {localStorage.getItem('accessToken') ? (
            <>
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
            </>
          ) : null}
        </S.FilterContainer>
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
                likeCount={data.likeCount}
                likeState={data.likeState}
              />
            ))}
          </S.ProjectContainer>
        </S.ProjectList>
      </S.Contents>
    </Layout>
  );
};

export default Explore;
