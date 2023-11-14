import React from 'react';
import GithubIcon from 'assets/GithubIcon';
import EmailIcon from 'assets/EmailIcon';
import Layout from 'components/Layout';
import useModal from 'hooks/useModal';
import ProjectBox from 'components/ProjectBox';
import * as S from './style';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'components/Button';
import Tooltip from 'components/Tooltip';
import Input from 'components/Input';
import instance from 'apis/httpClient';
import ProfileUpdateModal from 'components/ProfileUpdateModal';
import { useRecoilState, useRecoilValue } from 'recoil';
import { gotoUserProfile, gotoUserProfileId, userKey } from 'apis/recoil';
import FollowerList from 'pages/FollowerList';
import FollowingrList from 'pages/FollowingList';
import { useQueries, useQueryClient } from 'react-query';

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
  const { openModal, closeModal } = useModal();

  const navigate = useNavigate();
  const [selected, setSelected] = React.useState(0);
  const [myProject, setMyProject] = React.useState<Project[] | null>([]);
  const [endMyProject, setEndMyProject] = React.useState<Project[] | null>();
  const [userProfile, setUserProfile] = React.useState<UserProfile | null>(
    null,
  );
  const [userInput, setUserInput] = React.useState<string>('');
  const [followInfo, setFollowInfo] = React.useState();
  const [followingInfo, setFollowingInfo] = React.useState();

  const handleTabSelect = (e: React.MouseEvent<HTMLDivElement>) => {
    const id = parseInt(e.currentTarget.id);
    setSelected(id);
  };

  const copyTooltipText = (text: string) => {
    navigator.clipboard.writeText(text).then(() => alert('복사 완료'));
  };

  const id = useRecoilValue(userKey);
  const newId = Number(id);

  const modalOpen = () => {
    openModal({
      component: <ProfileUpdateModal closeModal={closeModal} />,
    });
  };
  const followerList = () => {
    openModal({
      component: (
        <FollowerList closeModal={closeModal} id={newId} navigate={navigate} />
      ),
    });
  };

  const followingList = () => {
    openModal({
      component: (
        <FollowingrList
          closeModal={closeModal}
          id={newId}
          navigate={navigate}
        />
      ),
    });
  };

  React.useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await instance.get('/user');
        setUserProfile(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [id]);

  React.useEffect(() => {
    instance
      .get('/project/my', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      })
      .then((response) => {
        setMyProject(response.data);
      });
  }, []);

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

  const filteredEndProjects = endMyProject
    ? endMyProject.filter((project) => {
        const projectName = project.name.toLowerCase();
        const projectContent = project.content.toLowerCase();
        const searchQuery = userInput.toLowerCase();

        return (
          projectName.includes(searchQuery) ||
          projectContent.includes(searchQuery)
        );
      })
    : [];

  React.useEffect(() => {
    instance
      .get('/project/my/end', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      })
      .then((response) => {
        setEndMyProject(response.data);
      });
  }, []);

  const getFollowingCount = async (id: number) => {
    const { data } = await instance.get(`/follow/${id}/following/count`);
    return data;
  };

  const getFollowCount = async (id: number) => {
    const { data } = await instance.get(`/follow/${id}/follower/count`);
    return data;
  };

  useQueries([
    {
      queryKey: ['userFollowing', id],
      queryFn: () => getFollowingCount(Number(id)),
      onSuccess: (data: any) => {
        setFollowingInfo(data);
      },
    },
    {
      queryKey: ['userFollowers', id],
      queryFn: () => getFollowCount(Number(id)),
      onSuccess: (data: any) => {
        setFollowInfo(data);
      },
    },
  ]);

  const [gotoUser, setGoToUser] = useRecoilState(gotoUserProfile);
  const gotoUserId = useRecoilValue(gotoUserProfileId);

  const router = useNavigate();

  if (gotoUser) {
    router(`/others/${gotoUserId}`);
    setGoToUser(false);
  }

  return (
    <Layout>
      <S.Contents>
        <S.UserContainer>
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
                    <S.Names>
                      <S.UserName>{userProfile?.nickName}</S.UserName>
                      <S.UserNickName>
                        {userProfile?.name
                          ? userProfile?.name
                          : '닉네임을 추가해주세요'}
                      </S.UserNickName>
                    </S.Names>
                    <S.UserPosition>
                      {userProfile?.school} /{' '}
                      {userProfile?.major
                        ? userProfile?.major
                        : '(분야를 추가해주세요)'}
                    </S.UserPosition>
                  </div>
                  <S.Follow>
                    <S.CountFollow onClick={followerList}>
                      팔로워 {followInfo}
                    </S.CountFollow>
                    <S.FowllowGap>
                      <S.CountFollow onClick={followingList}>
                        팔로우 {followingInfo}
                      </S.CountFollow>
                    </S.FowllowGap>
                  </S.Follow>
                  <S.StatusMessage>
                    {userProfile?.statusMessage
                      ? userProfile?.statusMessage
                      : '(상태 메시지를 추가해주세요)'}
                  </S.StatusMessage>
                </S.UserData>
              </S.UserWrapper>
              <S.ButtonContainer>
                <Button value='프로필 편집하기' onClick={modalOpen} />
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
              </S.ButtonContainer>
            </S.UserInformation>
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
                .map((data) => <ProjectBox key={data.id} {...data} />)
            ) : selected === 0 ? (
              <S.NoContents>참여중인 프로젝트가 없습니다.</S.NoContents>
            ) : null}
            {selected === 1 && filteredEndProjects.length > 0 ? (
              filteredEndProjects
                .slice()
                .sort((a, b) => b.id - a.id)
                .map((data) => <ProjectBox key={data.id} {...data} />)
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
