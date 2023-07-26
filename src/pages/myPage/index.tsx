import React from 'react';
import * as S from './style';
import SpongeBob from 'assets/spongeBob.webp';
import Github from 'assets/github.png';
import PeoplePng from 'assets/bi_people-fill.png';

const dummy_data = [
  {
    id: 0,
    name: '스폰지밥 1',
    contents: '비키니시티비키니시티비키니시티비키니시티비키니시티비키니시티비키니시티비키니시티',
  },
  {
    id: 1,
    name: '스폰지밥 2',
    contents: '집게리아집게리아집게리아집게리아집게리아집게리아집게리아집게리아집게리아집게리아',
  },
  {
    id: 2,
    name: '스폰지밥 3',
    contents: '뚱이뚱이뚱이뚱이뚱이뚱이뚱이',
  },
  {
    id: 0,
    name: '스폰지밥 1',
    contents: '비키니시티비키니시티비키니시티비키니시티비키니시티비키니시티비키니시티비키니시티',
  },
  {
    id: 1,
    name: '스폰지밥 2',
    contents: '집게리아집게리아집게리아집게리아집게리아집게리아집게리아집게리아집게리아집게리아',
  },
  {
    id: 2,
    name: '스폰지밥 3',
    contents: '뚱이뚱이뚱이뚱이뚱이뚱이뚱이',
  },
];

const truncate = (str: string) => {
  return str?.length > 30 ? str.substring(0, 30) + '...' : str;
};

const index = () => {
  return (
    <>
      <S.HeaderPadding />
      <S.Container>
        <S.ProfileContainer>
          <S.ProfileBox>
            <S.Profile>
              <S.Circle />
            </S.Profile>
            <S.Information>
              <S.Inf>
                <S.Name>
                  뚱이
                  <S.Gimg src={Github} alt='github' />
                </S.Name>
                <S.SchoolDiv>부산소프트웨어마이스터고등학교</S.SchoolDiv>
                <S.Follow>
                  <S.FollowDiv>팔로우 251</S.FollowDiv>
                  <S.FollowDiv>팔로우 317</S.FollowDiv>
                </S.Follow>
                <S.School>
                  <S.Dev>프론트엔드 개발자 지망생, 18살 남자입니다. </S.Dev>
                </S.School>
              </S.Inf>
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
          <S.Together>
            <S.Tfont>참여중인 프로젝트</S.Tfont>
          </S.Together>
          <S.Projects>
            {dummy_data.map((el) => (
              <S.Project key={el.id}>
                <S.Picture src={SpongeBob} alt='spongeBob' />
                <S.ProjectName>
                  <S.Names>{el.name}</S.Names>
                </S.ProjectName>
                <S.Contents>
                  <S.ConT>{truncate(el.contents)}</S.ConT>
                </S.Contents>
                <S.People>
                  <S.Peo>
                    <img src={PeoplePng} alt='people' />
                  </S.Peo>
                  <S.Counts>3/5</S.Counts>
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
          <S.Together>
            <S.Tfont>참여했던 프로젝트</S.Tfont>
          </S.Together>
          <S.Projects>
            {dummy_data.map((el) => (
              <S.Project key={el.id}>
                <S.Picture src={SpongeBob} alt='spongeBob' />
                <S.ProjectName>
                  <S.Names>{el.name}</S.Names>
                </S.ProjectName>
                <S.Contents>
                  <S.ConT>{truncate(el.contents)}</S.ConT>
                </S.Contents>
                <S.People>
                  <S.Peo>
                    <img src={PeoplePng} alt='people' />
                  </S.Peo>
                  <S.Counts>3/5</S.Counts>
                </S.People>
              </S.Project>
            ))}
          </S.Projects>
        </S.ProjectDiv>
      </S.Container>
    </>
  );
};

export default index;
