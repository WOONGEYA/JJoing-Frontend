import React from 'react';
import GithubIcon from 'assets/GithubIcon';
import EmailIcon from 'assets/EmailIcon';
import Layout from 'components/Layout';
import ProjectBox from 'components/ProjectBox';
import * as S from './style';
import { Link, useParams } from 'react-router-dom';
import Tooltip from 'components/Tooltip';
import Input from 'components/Input';
import instance from 'apis/httpClient';
import Button from 'components/Button';

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

const MyPage = () => {
  const { id } = useParams();
  const [selected, setSelected] = React.useState(0);
  const [othersProject, setOthersProject] = React.useState<Project[] | null>(
    [],
  );
  const [endOthersProject, setEndOthersProject] = React.useState<
    Project[] | null
  >();
  const [userProfile, setUserProfile] = React.useState<UserProfile | null>(
    null,
  );
  const [userInput, setUserInput] = React.useState<string>('');

  const handleTabSelect = (e: React.MouseEvent<HTMLDivElement>) => {
    const id = parseInt(e.currentTarget.id);
    setSelected(id);
  };

  const copyTooltipText = (text: string) => {
    navigator.clipboard.writeText(text).then(() => alert('복사 완료'));
  };

  React.useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await instance.get(`/user/${id}`);
        setUserProfile(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await instance.get(`/project/${id}/user`);
        setOthersProject(data);
      } catch (error) {
        console.log('실패');
      }
    };

    fetchData();
  }, [id]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await instance.get(`/project/${id}/user/end`);
        setEndOthersProject(data);
      } catch (error) {
        console.log('실패');
      }
    };

    fetchData();
  }, [id]);

  const filteredProjects = othersProject
    ? othersProject.filter((project) => {
        const projectName = project.name.toLowerCase();
        const projectContent = project.content.toLowerCase();
        const searchQuery = userInput.toLowerCase();
        return (
          projectName.includes(searchQuery) ||
          projectContent.includes(searchQuery)
        );
      })
    : [];

  const filteredEndProjects = endOthersProject
    ? endOthersProject.filter((project) => {
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
          <S.UserContainer>
            <S.UserInformation>
              <S.UserWrapper>
                <S.UserImage>
                  <S.Image src={userProfile?.imgUrl} alt='profile' />
                </S.UserImage>
                <S.UserData>
                  <div>
                    <S.Names>
                      <S.UserName>{userProfile?.nickName}</S.UserName>
                      <S.UserNickName>{userProfile?.name}</S.UserNickName>
                    </S.Names>
                    <S.UserPosition>
                      {userProfile?.school} /{' '}
                      {userProfile?.major
                        ? userProfile?.major
                        : '(분야 정보 없음)'}
                    </S.UserPosition>
                  </div>
                  <S.Follow></S.Follow>
                  <S.StatusMessage>
                    {userProfile?.statusMessage}
                  </S.StatusMessage>
                </S.UserData>
              </S.UserWrapper>
              <S.ButtonContainer>
                <Button value='팔로우' />
              </S.ButtonContainer>
            </S.UserInformation>
            <S.UserLinks>
              <Link to={String(userProfile?.githubUrl)}>
                <GithubIcon />
              </Link>
              <Tooltip
                value={String(userProfile?.email)}
                onClick={() => copyTooltipText(String(userProfile?.email))}
                style={{ cursor: 'pointer' }}
              >
                <Link to={`mailto:${String(userProfile?.email)}`}>
                  <EmailIcon />
                </Link>
              </Tooltip>
            </S.UserLinks>
          </S.UserContainer>
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
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
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
                    likeCount={data.likeCount}
                    likeState={data.likeState}
                  />
                ))
            ) : selected === 0 ? (
              <S.NoContents>참여중인 프로젝트가 없습니다.</S.NoContents>
            ) : null}
            {selected === 1 && filteredEndProjects.length > 0 ? (
              filteredEndProjects
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
                    likeCount={data.likeCount}
                    likeState={data.likeState}
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
