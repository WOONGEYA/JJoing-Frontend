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

  return (
    <Layout>
      <S.Contents>
        <S.UserContainer>
          <S.UserInformation>
            <S.UserWrapper>
              <S.UserImage>
                <S.Image
                  onClick={modalOpen}
                  src={userProfile?.imgUrl}
                  alt='profile'
                />
              </S.UserImage>
              <S.UserData>
                <div>
                  <S.UserName>
                    {userProfile?.name}
                    {userProfile?.nickName ? (
                      <S.UserNickName>{userProfile?.nickName}</S.UserNickName>
                    ) : (
                      <S.UserNickName>(닉네임을 추가해주세요)</S.UserNickName>
                    )}
                  </S.UserName>
                  <S.UserPosition>
                    {userProfile?.school} /{' '}
                    {userProfile?.major
                      ? userProfile?.major
                      : '(분야를 추가해주세요)'}
                  </S.UserPosition>
                </div>
                <S.StatusMessage>
                  {userProfile?.statusMessage
                    ? userProfile?.statusMessage
                    : '(상태 메시지를 추가해주세요)'}
                </S.StatusMessage>
              </S.UserData>
            </S.UserWrapper>
            <S.ButtonContainer>
              <Button value='프로필 편집하기' onClick={modalOpen} />
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
            />
          </S.Search>
        </S.TabContainer>
        <S.Projects>
          {selected === 0 && myProject && myProject.length > 0 ? (
            myProject.map((data) => (
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
          {selected === 1 && myProject && myProject.length > 0 ? (
            myProject.map((data) => (
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
      </S.Contents>
    </Layout>
  );
};

export default MyPage;
