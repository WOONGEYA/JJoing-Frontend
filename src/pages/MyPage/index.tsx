import React, { useEffect } from 'react';
import GithubIcon from 'assets/GithubIcon';
import LinkIcon from 'assets/LinkIcon';
import EmailIcon from 'assets/EmailIcon';
import profile from 'assets/profile.webp';
import Layout from 'components/Layout';
import useModal from 'hooks/useModal';
import ProfileUpdateModal from 'components/ProfileUpdataModal';
import ProjectBox from 'components/ProjectBox';
import dummy from 'fixtures/detail.dummy';
import profile_data from 'fixtures/profile.dummy';
import * as S from './style';
import { Link } from 'react-router-dom';
import Button from 'components/Button';
import Tooltip from 'components/Tooltip';
import Input from 'components/Input';
import axios from 'axios';

const MyPage = () => {
  const [selected, setSelected] = React.useState(0);
  const { openModal, closeModal } = useModal();

  const {
    id,
    school,
    follower,
    following,
    github,
    email,
    personalLink,
    statusMessage,
    field,
  } = profile_data;

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
        const response = await axios.get('http://jjoing.kro.kr/project', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        });
        console.log('data:', response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <Layout>
      <S.Contents>
        <S.UserContainer>
          <S.UserInformation>
            <S.UserWrapper>
              <S.UserImage>
                <S.Image onClick={modalOpen} src={profile} alt='profile' />
              </S.UserImage>
              <S.UserData>
                <div>
                  <S.UserName>{id}</S.UserName>
                  <S.UserPosition>
                    {school} / {field}
                  </S.UserPosition>
                </div>
                <S.Follow>
                  팔로워 {follower} 팔로잉 {following}
                </S.Follow>
                <S.StatusMessage>{statusMessage}</S.StatusMessage>
              </S.UserData>
            </S.UserWrapper>
            <S.ButtonContainer>
              <Button value='프로필 편집하기' onClick={modalOpen} />
            </S.ButtonContainer>
          </S.UserInformation>
          <S.UserLinks>
            <Link to={github}>
              <GithubIcon />
            </Link>
            <Tooltip
              value={email}
              onClick={() => copyTooltipText(email)}
              style={{ cursor: 'pointer' }}
            >
              <Link to={`mailto:${email}`}>
                <EmailIcon />
              </Link>
            </Tooltip>
            <Link to={personalLink}>
              <LinkIcon />
            </Link>
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
          {selected === 0 &&
            (dummy ? (
              dummy.map((data) => (
                <ProjectBox
                  key={data.id}
                  title={data.title}
                  description={data.description}
                  currentPeople={data.currentPeople}
                  requiredPeople={data.requiredPeople}
                />
              ))
            ) : (
              <S.NoContents>참여중인 프로젝트가 없습니다.</S.NoContents>
            ))}
          {selected === 1 &&
            (dummy ? (
              dummy.map((data) => (
                <ProjectBox
                  key={data.id}
                  title={data.title}
                  description={data.description}
                  currentPeople={data.currentPeople}
                  requiredPeople={data.requiredPeople}
                />
              ))
            ) : (
              <S.NoContents>참여했던 프로젝트가 없습니다.</S.NoContents>
            ))}
        </S.Projects>
      </S.Contents>
    </Layout>
  );
};

export default MyPage;
