import React from 'react';
import ProjectBox from 'components/ProjectBox';
import Header from 'components/Header/index';
import * as S from './style';
import select from '../../assets/select.svg';

interface ProjectData {
  title: string;
  subtitle: string;
  de: number;
  fe: number;
  be: number;
  isCompleted: '모집중' | '진행중' | '완료됨';
}

const Explore = () => {
  const dummyData: ProjectData[] = [
    {
      title: '박우빈과 함께, 귀칼 스터디!',
      subtitle: '간단한 프로젝트 소개글입니다. 마라탕이랑 탕후루',
      de: 1,
      fe: 2,
      be: 3,
      isCompleted: '모집중',
    },
    {
      title: '교내 소개팅 어플 만들기',
      subtitle: '간단한 프로젝트 소개글입니다. 마라탕이랑 탕후루',
      de: 4,
      fe: 5,
      be: 6,
      isCompleted: '진행중',
    },
    {
      title: '동해물과 백두산이',
      subtitle: '간단한 프로젝트 소개글입니다. 마라탕이랑 탕후루',
      de: 7,
      fe: 8,
      be: 9,
      isCompleted: '완료됨',
    },
    {
      title: '왜들그리 다운 돼있어',
      subtitle: '간단한 프로젝트 소개글입니다. 마라탕이랑 탕후루',
      de: 10,
      fe: 11,
      be: 12,
      isCompleted: '모집중',
    },
    {
      title: '잘생긴 한예준 만들기',
      subtitle: '간단한 프로젝트 소개글입니다. 마라탕이랑 탕후루',
      de: 13,
      fe: 14,
      be: 15,
      isCompleted: '진행중',
    },
  ];

  return (
    <>
      <Header />
      <S.Container>
        <S.Categories>
          <S.CTitle>All</S.CTitle>
          <S.CSelects>
            <S.SInner>
              모집중
              <S.SelectIcon src={select} />
            </S.SInner>
            <S.SInner>
              백엔드
              <S.SelectIcon src={select} />
            </S.SInner>
            <S.SInner>
              최신순
              <S.SelectIcon src={select} />
            </S.SInner>
          </S.CSelects>
        </S.Categories>
        <S.Contents>
          {dummyData.map((data, index) => (
            <ProjectBox
              key={index}
              title={data.title}
              subtitle={data.subtitle}
              de={data.de}
              fe={data.fe}
              be={data.be}
              isCompleted={data.isCompleted}
            />
          ))}
        </S.Contents>
      </S.Container>
    </>
  );
};

export default Explore;
