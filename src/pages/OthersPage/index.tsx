import React from 'react';
import GithubIcon from 'assets/GithubIcon';
import LinkIcon from 'assets/LinkIcon';
import EmailIcon from 'assets/EmailIcon';
import profile from 'assets/profile.webp';
import ProjectBox from 'components/ProjectBox';
import Layout from 'components/Layout';
import Button from 'components/Button';
import Tooltip from 'components/Tooltip';
import Input from 'components/Input';
import theme from 'styles/theme';
import { Link } from 'react-router-dom';
import dummy from 'fixtures/detail.dummy';
import profile_data from 'fixtures/profile.dummy';
import * as S from './style';

const MyPage = () => {
  const [selected, setSelected] = React.useState(0);
  const [followed, setFollowed] = React.useState(false);

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

  const copyTooltipText = (text: string) => {
    navigator.clipboard.writeText(text).then(() => alert('복사 완료'));
  };

  const handleTabSelect = (e: React.MouseEvent<HTMLDivElement>) => {
    const id = parseInt(e.currentTarget.id);
    setSelected(id);
  };

  return (
    <Layout>
      <S.Contents>
        <S.UserContainer>
          <S.UserInformation>
            <S.UserWrapper>
              <S.UserImage>
                <S.Image
                  style={{ cursor: 'default' }}
                  src={profile}
                  alt='profile'
                />
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
              <Button
                value={followed ? '언팔로우' : '팔로우'}
                background={followed ? theme.secondary : theme.primary}
                onClick={() => setFollowed(!followed)}
              />
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
          {/* {selected === 0 &&
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
            ))} */}
          {/* {selected === 1 &&
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
            ))} */}
        </S.Projects>
      </S.Contents>
    </Layout>
  );
};

export default MyPage;
