import React from 'react';
import ProjectBox from 'components/ProjectBox';
import Header from 'components/Header/index';
import * as S from './style';
import select from 'assets/select.svg';
import { dummyData } from '../../data/dummy'

const Explore = () => {

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
