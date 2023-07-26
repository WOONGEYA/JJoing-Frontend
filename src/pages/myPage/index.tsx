import React from 'react';
import * as S from './style';
import SpongeBob from 'assets/spongeBob.webp';
import Github from 'assets/github.png';
import PeoplePng from 'assets/bi_people-fill.png';
import { dummy_data } from 'fixtures/dummyData';

const truncate = (str: string) => {
  return str?.length > 30 ? str.substring(0, 30) + '...' : str;
};

const MyPage = () => {
  return (
    <>
      <S.Container>
        <S.ProfileContainer>
          <S.ProfileBox>
            <S.Profile>
              <S.Circle />
            </S.Profile>
            <S.Information>
              <S.InformationContainer>
                <S.Name>
                  뚱이
                  <S.Gimg src={Github} alt='github' />
                </S.Name>
                <S.SchoolDiv>부산소프트웨어마이스터고등학교</S.SchoolDiv>
                <S.Follow>
                  <S.FollowDiv>팔로워 251</S.FollowDiv>
                  <S.FollowDiv>팔로우 317</S.FollowDiv>
                </S.Follow>
                <S.School>프론트엔드 개발자 지망생, 18살 남자입니다.</S.School>
              </S.InformationContainer>
            </S.Information>
          </S.ProfileBox>
          <S.EditBox>
            <S.EditDiv>
              <S.Edit>프로필 수정하기</S.Edit>
            </S.EditDiv>
          </S.EditBox>
        </S.ProfileContainer>
        <S.ProfileNav>
          <S.ShowProfile>참여중인 프로젝트</S.ShowProfile>
          <S.ShowLine />
        </S.ProfileNav>
        <S.ProjectDiv>
          <S.Projects>
            {dummy_data.map((data) => (
              <S.Project key={data.id}>
                <S.Picture src={SpongeBob} alt='spongeBob' />
                <S.ProjectName>
                  <S.Names>{data.name}</S.Names>
                </S.ProjectName>
                <S.Contents>
                  <S.ConT>{truncate(data.contents)}</S.ConT>
                </S.Contents>
                <S.People>
                  <S.PeopleDiv>
                    <img src={PeoplePng} alt='people' />
                    <S.Counts>3/5</S.Counts>
                  </S.PeopleDiv>
                </S.People>
              </S.Project>
            ))}
          </S.Projects>
        </S.ProjectDiv>

        <S.ProfileNav>
          <S.ShowProfile>참여했던 프로젝트</S.ShowProfile>
          <S.ShowLine />
        </S.ProfileNav>
        <S.ProjectDiv>
          <S.Projects>
            {dummy_data.map((data) => (
              <S.Project key={data.id}>
                <S.Picture src={SpongeBob} alt='spongeBob' />
                <S.ProjectName>
                  <S.Names>{data.name}</S.Names>
                </S.ProjectName>
                <S.Contents>
                  <S.ConT>{truncate(data.contents)}</S.ConT>
                </S.Contents>
                <S.People>
                  <S.PeopleDiv>
                    <img src={PeoplePng} alt='people' />
                    <S.Counts>3/5</S.Counts>
                  </S.PeopleDiv>
                </S.People>
              </S.Project>
            ))}
          </S.Projects>
        </S.ProjectDiv>
      </S.Container>
    </>
  );
};

export default MyPage;
