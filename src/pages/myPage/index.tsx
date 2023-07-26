import React from 'react';
import * as S from './style';
import SpongeBob from 'assets/spongeBob.webp';

const dummy_data = [
  {
    id: 0,
    name: '스폰지밥 1',
    contents: '비키니시티',
  },
  {
    id: 1,
    name: '스폰지밥 2',
    contents: '집게리아',
  },
  {
    id: 2,
    name: '스폰지밥 3',
    contents: '뚱이',
  },
  {
    id: 3,
    name: '스폰지밥 4',
    contents: '다람이',
  },
  {
    id: 4,
    name: '스폰지밥 5',
    contents: '징징이',
  },
  {
    id: 5,
    name: '스폰지밥 6',
    contents: '스폰지밥',
  },
  {
    id: 6,
    name: '스폰지밥 7',
    contents: '게살버거',
  },
  {
    id: 7,
    name: '스폰지밥 8',
    contents: '퐁퐁부인',
  },
  {
    id: 8,
    name: '스폰지밥 9',
    contents: '뒤집개',
  },
];

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
                <S.Name>뚱이 님</S.Name>
                <S.Follow>
                  <S.FollowDiv>팔로우 0</S.FollowDiv>
                  <S.FollowDiv>팔로우 0</S.FollowDiv>
                </S.Follow>
                <S.School>
                  <S.SchoolDiv>부산소마고</S.SchoolDiv> / <S.Dev>FRONT-END</S.Dev>
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
                <S.ProjectName>{el.name}</S.ProjectName>
                <S.Contents>{el.contents}</S.Contents>
              </S.Project>
            ))}
          </S.Projects>
        </S.ProjectDiv>
      </S.Container>
    </>
  );
};

export default index;
