import React from 'react';
import ProjectBox from 'components/ProjectBox';
import Header from 'components/Header/index';
import Footer from 'components/Footer';
import * as S from './style';
import ResetIcon from 'assets/ResetIcon';
import Dropdown from 'components/Dropdown';
import dummy from 'fixtures/detail.dummy';

const options = ['전문분야 선택', '지역 옵션', '전문가 옵션', '인기순'];

const Explore = () => {
  return (
    <S.Container>
      <Header />
      <S.Contents>
        <S.Banner />
        <S.Filter>
          <S.Reset>
            <ResetIcon />
          </S.Reset>
          {options.map((obj) => (
            <Dropdown key={obj} name={obj} />
          ))}
        </S.Filter>
        <S.ProjectList>
          <S.Title>프로젝트 목록 😎</S.Title>
          <S.ProjectContainer>
            {dummy.map((data) => (
              <ProjectBox
                key={data.id}
                title={data.title}
                description={data.description}
                currentPeople={data.currentPeople}
                requiredPeople={data.requiredPeople}
              />
            ))}
          </S.ProjectContainer>
        </S.ProjectList>
      </S.Contents>
      <Footer />
    </S.Container>
  );
};

export default Explore;
