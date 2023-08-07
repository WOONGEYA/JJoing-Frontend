import React from 'react';
import * as S from './style'; // Updated import for the styles
import SpongeBob from 'assets/spongeBob.webp';
import Github from 'assets/Github';
import Member from 'assets/Member';
import { dummy_data } from 'fixtures/mypage.dummy';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { truncate } from 'utils/truncate';

const MaxLength = 90;

const MyPage = () => {
  return (
    <>
      <Header />
      <S.Wrapper>
        <S.ProfileWrapper>
          <S.ProfileBox>
            <S.Profile>
              <S.Circle />
            </S.Profile>
            <S.InformationWrapper>
              <S.InformationContainer>
                <S.CharacterName>
                  뚱이
                  <Github />
                </S.CharacterName>
                <S.SchoolName>부산소프트웨어마이스터고등학교</S.SchoolName>
                <S.FollowWrapper>
                  <S.FollowerDiv>팔로워 251</S.FollowerDiv>
                  <S.FollowDiv>팔로우 317</S.FollowDiv>
                </S.FollowWrapper>
                <S.CharacterProfileInformation>
                  프론트엔드 개발자 지망생, 18살 남자입니다.
                </S.CharacterProfileInformation>
              </S.InformationContainer>
            </S.InformationWrapper>
          </S.ProfileBox>
          <S.EditWrapper>
            <S.EditBox>
              <S.EditName>프로필 수정하기</S.EditName>
            </S.EditBox>
          </S.EditWrapper>
        </S.ProfileWrapper>
        <S.MyProjectWrapper>
          <S.ShowMyProject>참여중인 프로젝트</S.ShowMyProject>
          <S.ProjectNavLine />
        </S.MyProjectWrapper>
        <S.ProjectWrapper>
          <S.ShowProjects>
            {dummy_data.map((data) => (
              <S.Project key={data.id}>
                <S.PojectPicture src={SpongeBob} alt='spongeBob' />
                <S.ProjectNameWrapper>
                  <S.ProjectName>{data.name}</S.ProjectName>
                </S.ProjectNameWrapper>
                <S.ProjectContentsWrapper>
                  <S.Contents>{truncate(data.contents, MaxLength)}</S.Contents>
                </S.ProjectContentsWrapper>
                <S.ProjectInformationWrapper>
                  <S.PeopleWrapper>
                    <Member />
                    <S.ProjectMemberCounts>3/5</S.ProjectMemberCounts>
                  </S.PeopleWrapper>
                </S.ProjectInformationWrapper>
              </S.Project>
            ))}
          </S.ShowProjects>
        </S.ProjectWrapper>
        <S.MyProjectWrapper>
          <S.ShowMyProject>참여했던 프로젝트</S.ShowMyProject>
          <S.ProjectNavLine />
        </S.MyProjectWrapper>
        <S.ProjectWrapper>
          <S.ShowProjects>
            {dummy_data.map((data) => (
              <S.Project key={data.id}>
                <S.PojectPicture src={SpongeBob} alt='spongeBob' />
                <S.ProjectNameWrapper>
                  <S.ProjectName>{data.name}</S.ProjectName>
                </S.ProjectNameWrapper>
                <S.ProjectContentsWrapper>
                  <S.Contents>{truncate(data.contents, MaxLength)}</S.Contents>
                </S.ProjectContentsWrapper>
                <S.ProjectInformationWrapper>
                  <S.PeopleWrapper>
                    <Member />
                    <S.ProjectMemberCounts>3/5</S.ProjectMemberCounts>
                  </S.PeopleWrapper>
                </S.ProjectInformationWrapper>
              </S.Project>
            ))}
          </S.ShowProjects>
        </S.ProjectWrapper>
      </S.Wrapper>
      <Footer />
    </>
  );
};

export default MyPage;