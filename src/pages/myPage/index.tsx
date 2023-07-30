import React from 'react';
import * as S from './style'; // Updated import for the styles
import SpongeBob from 'assets/spongeBob.webp';
import Github from 'assets/github.png';
import PeoplePng from 'assets/PeopleSvg.svg';
import { dummy_data } from 'fixtures/dummyData';

const truncate = (str: string) => {
  return str?.length > 30 ? `${str.substring(0, 30)}...` : str;
};

const MyPage = () => {
  return (
    <>
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
                  <S.GithubImg src={Github} alt='github' />
                </S.CharacterName>
                <S.SchoolName>부산소프트웨어마이스터고등학교</S.SchoolName>
                <S.FollowWrapper>
                  <S.FollowerDiv>팔로워 251</S.FollowerDiv>
                  <S.FollowDiv>팔로우 317</S.FollowDiv>
                </S.FollowWrapper>
                <S.CharacterSchool>프론트엔드 개발자 지망생, 18살 남자입니다.</S.CharacterSchool>
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
                  <S.Contents>{truncate(data.contents)}</S.Contents>
                </S.ProjectContentsWrapper>
                <S.ProjectInformationWrapper>
                  <S.PeopleWrapper>
                    <S.PeopleIcon src={PeoplePng} alt='people' />
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
                  <S.Contents>{truncate(data.contents)}</S.Contents>
                </S.ProjectContentsWrapper>
                <S.ProjectInformationWrapper>
                  <S.PeopleWrapper>
                    <S.PeopleIcon src={PeoplePng} alt='people' />
                    <S.ProjectMemberCounts>3/5</S.ProjectMemberCounts>
                  </S.PeopleWrapper>
                </S.ProjectInformationWrapper>
              </S.Project>
            ))}
          </S.ShowProjects>
        </S.ProjectWrapper>
      </S.Wrapper>
    </>
  );
};

export default MyPage;
