import React from 'react';
import GithubIcon from 'assets/GithubIcon';
import EmailIcon from 'assets/EmailIcon';
import Layout from 'components/Layout';
import useModal from 'hooks/useModal';
import ProjectBox from 'components/ProjectBox';
import * as S from './style';
import { Link } from 'react-router-dom';
import Button from 'components/Button';
import Tooltip from 'components/Tooltip';
import Input from 'components/Input';
import instance from 'apis/httpClient';
import ProfileUpdateModal from 'components/ProfileUpdateModal';

const MyPage = () => {
  interface UserProfile {
    statusMessage: string;
    nickName: string;
    githubUrl: string;
    name: string;
    email: string;
    imgUrl: string;
    school: string;
    major: string;
  }

  interface NewProject {
    id: number;
    name: string;
    content: string;
    currentPeople: number;
    requiredPeople: number;
    viewCount: number;
    imgUrl: string;
  }

  const [selected, setSelected] = React.useState(0);
  const [myProject, setMyProject] = React.useState<NewProject[] | null>([]);
  const [userProfile, setUserProfile] = React.useState<UserProfile | null>(
    null,
  );
  const [userInput, setUserInput] = React.useState<string>('');

  const { openModal, closeModal } = useModal();

  const modalOpen = () => {
    openModal({
      component: <ProfileUpdateModal closeModal={closeModal} />,
    });
  };

  const copyTooltipText = (text: string) => {
    navigator.clipboard.writeText(text).then(() => alert('복사 완료'));
  };

  const handleTabSelect = (e: React.MouseEvent<HTMLDivElement>) => {
    const id = parseInt(e.currentTarget.id);
    setSelected(id);
  };

  React.useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await instance.get('/user', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        });
        setUserProfile(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  React.useEffect(() => {
    instance
      .get('/project/my', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      })
      .then((response) => {
        setMyProject(response.data);
        console.log(response.data);
      });
  }, []);

  // Modify the project filtering logic to use userInput state
  const filteredProjects = myProject
    ? myProject.filter((project) => {
        const projectName = project.name.toLowerCase();
        const projectContent = project.content.toLowerCase();
        const searchQuery = userInput.toLowerCase();

        return (
          projectName.includes(searchQuery) ||
          projectContent.includes(searchQuery)
        );
      })
    : [];

  return (
    <Layout>
      <S.Contents>
        <S.UserContainer>
          {/* ... */}
          <S.TabContainer>
            <S.TabWrapper>
              <S.Tab id={0} selected={selected} onClick={handleTabSelect}>
                참여중인 프로젝트
              </S.Tab>
              <S.Tab id={1} selected={selected} onClick={handleTabSelect}>
                참여했던 프로젝트
              </S.Tab>
              <S.Underline selected={selected} />
            </S.TabWrapper>
            <S.Search>
              <Input
                type='search'
                width={296}
                placeholder='검색어를 입력해주세요.'
                value={userInput} // Pass user input value
                onChange={(e) => setUserInput(e.target.value)} // Update user input state
              />
            </S.Search>
          </S.TabContainer>
          <S.Projects>
            {selected === 0 && filteredProjects.length > 0 ? (
              filteredProjects
                .slice()
                .sort((a, b) => b.id - a.id)
                .map((data) => (
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
                ))
            ) : selected === 0 ? (
              <S.NoContents>참여중인 프로젝트가 없습니다.</S.NoContents>
            ) : null}
            {selected === 1 && filteredProjects.length > 0 ? (
              filteredProjects
                .slice()
                .sort((a, b) => b.id - a.id)
                .map((data) => (
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
                ))
            ) : selected === 1 ? (
              <S.NoContents>참여했던 프로젝트가 없습니다.</S.NoContents>
            ) : null}
          </S.Projects>
        </S.UserContainer>
      </S.Contents>
    </Layout>
  );
};

export default MyPage;
