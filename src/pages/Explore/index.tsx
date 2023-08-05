import React from 'react';
import ProjectBox from 'components/ProjectBox';
import Header from 'components/Header/index';
import Footer from 'components/Footer';
import * as S from './style';
import Reset from 'assets/Reset';
import Dropdown from 'components/Dropdown';

const options = ['전문분야 선택', '지역 옵션', '전문가 옵션', '인기순'];

const Explore = () => {
  return (
    <S.Container>
      <Header />
      <S.Contents>
        <S.Banner />
        <S.Filter>
          <S.Reset>
            <Reset />
          </S.Reset>
          {options.map((obj) => (
            <Dropdown key={obj} name={obj} />
          ))}
        </S.Filter>
        <S.ProjectList>
          <S.Title>프로젝트 목록 😎</S.Title>
          <S.ProjectContainer>
            <ProjectBox />
            <ProjectBox />
            <ProjectBox />
            <ProjectBox />
            <ProjectBox />
            <ProjectBox />
            <ProjectBox />
            <ProjectBox />
            <ProjectBox />
            <ProjectBox />
            <ProjectBox />
            <ProjectBox />
            <ProjectBox />
            <ProjectBox />
            <ProjectBox />
          </S.ProjectContainer>
        </S.ProjectList>
      </S.Contents>
      <Footer />
    </S.Container>
  );
};

export default Explore;
