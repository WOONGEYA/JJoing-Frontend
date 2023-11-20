import React, { useState } from 'react';
import GithubIcon from 'assets/GithubIcon';
import EmailIcon from 'assets/EmailIcon';
import Layout from 'components/Layout';
import ProjectBox from 'components/ProjectBox';
import * as S from './style';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Tooltip from 'components/Tooltip';
import Input from 'components/Input';
import instance from 'apis/httpClient';
import Button from 'components/Button';
import theme from 'styles/theme';
import ProfileUpdateModal from 'components/ProfileUpdateModal';
import useModal from 'hooks/useModal';
import { useRecoilValue } from 'recoil';
import { userKey } from 'apis/recoil';
import FollowerList from 'pages/FollowerList';
import FollowingrList from 'pages/FollowingList';
import { useMutation, useQueries, useQueryClient } from 'react-query';

interface UserProfile {
  id: number;
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

interface FollowInfo {
  followCount: number;
  followingCount: number;
}

interface FollowList {
  id: string;
  name: string;
}

const MyPage = () => {
  const navigate = useNavigate();
  const { id } = useParams() as { id: string };
  const [selected, setSelected] = React.useState(0);
  const [othersProject, setOthersProject] = React.useState<Project[] | null>(
    [],
  );
  const [endOthersProject, setEndOthersProject] = React.useState<
    Project[] | null
  >();
  const [userProfile, setUserProfile] = React.useState<UserProfile>();
  const [userInput, setUserInput] = React.useState<string>('');
  const [followState, setFollowState] = React.useState(false);
  const [follow, setFollow] = useState(followState);
  const [following, setFollowing] = useState(followState);

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
  }, [id]);

  const { openModal, closeModal } = useModal();

  const modalOpen = () => {
    openModal({
      component: <ProfileUpdateModal closeModal={closeModal} />,
    });
  };

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

  const getFollowingCount = async (id: number) => {
    const { data } = await instance.get(`/follow/${id}/following/count`);
    return data;
  };

  const getFollowCount = async (id: number) => {
    const { data } = await instance.get(`/follow/${id}/follower/count`);
    return data;
  };

  const queryClient = useQueryClient();

  useQueries([
    {
      queryKey: ['userFollowing', id],
      queryFn: () => getFollowingCount(Number(id)),
      onSuccess: (data: any) => {
        setFollowing(data);
      },
    },
    {
      queryKey: ['userFollowers', id],
      queryFn: () => getFollowCount(Number(id)),
      onSuccess: (data: any) => {
        setFollow(data);
      },
    },
  ]);

  const followMutation = useMutation(
    (id: number) => instance.post(`/follow/${id}`),
    {
      onSuccess: () => {
        checkIsMyFollower();
        queryClient.invalidateQueries(['userFollowing', id]);
      },
    },
  );

  const unfollowMutation = useMutation(
    (id: number) => instance.delete(`/follow/${id}`),
    {
      onSuccess: () => {
        checkIsMyFollower();
        queryClient.invalidateQueries(['userFollowing', id]);
      },
    },
  );

  const getUserId = async () => {
    try {
      const { data } = await instance.get('/user', {
        headers: { Authorization: localStorage.getItem('accessToken') },
      });
      return data.id;
    } catch (error) {
      console.error('Error fetching user id:', error);
      return null;
    }
  };

  const getMyFollowerList = async () => {
    const id = await getUserId();
    const { data } = await instance.get(`/follow/${id}/follower`);
    return data;
  };

  const checkIsMyFollower = async () => {
    const myFollowerList = await getMyFollowerList();
    if (myFollowerList) {
      const isMyFollower = myFollowerList.some(
        (follower: FollowList) => Number(follower.id) === parseInt(id),
      );
      setFollowState(isMyFollower);
    }
  };

  React.useEffect(() => {
    checkIsMyFollower();
  }, []);

  const newId = Number(id);

  const followUser = () => {
    followMutation.mutate(newId);
  };

  const unfollowUser = () => {
    unfollowMutation.mutate(newId);
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

  const userId = useRecoilValue(userKey);

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
                  <S.Follow>
                    <S.CountFollow onClick={followerList}>
                      팔로워 {following}
                    </S.CountFollow>
                    <S.FowllowGap>
                      <S.CountFollow onClick={followingList}>
                        팔로우 {follow}
                      </S.CountFollow>
                    </S.FowllowGap>
                  </S.Follow>
                  <S.StatusMessage>
                    {userProfile?.statusMessage}
                  </S.StatusMessage>
                </S.UserData>
              </S.UserWrapper>
              <S.ButtonContainer>
                {userId === userProfile?.id ? (
                  <>
                    <Button value='프로필 편집하기' onClick={modalOpen} />
                    <S.UserLinks>
                      <Link to={String(userProfile?.githubUrl)}>
                        <GithubIcon />
                      </Link>
                      <Tooltip
                        value={String(userProfile?.email)}
                        onClick={() =>
                          copyTooltipText(String(userProfile?.email))
                        }
                        style={{ cursor: 'pointer' }}
                      >
                        <Link to={`mailto:${String(userProfile?.email)}`}>
                          <EmailIcon />
                        </Link>
                      </Tooltip>
                    </S.UserLinks>
                  </>
                ) : (
                  <>
                    {localStorage.getItem('accessToken') && (
                      <>
                        <Button
                          value={followState ? '팔로우 취소하기' : '팔로우'}
                          onClick={followState ? unfollowUser : followUser}
                          background={
                            followState ? theme.grey[500] : theme.primary
                          }
                        />
                        <S.UserLinks>
                          <Link to={String(userProfile?.githubUrl)}>
                            <GithubIcon />
                          </Link>
                          <Tooltip
                            value={String(userProfile?.email)}
                            onClick={() =>
                              copyTooltipText(String(userProfile?.email))
                            }
                            style={{ cursor: 'pointer' }}
                          >
                            <Link to={`mailto:${String(userProfile?.email)}`}>
                              <EmailIcon />
                            </Link>
                          </Tooltip>
                        </S.UserLinks>
                      </>
                    )}
                  </>
                )}
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
