import React, { useState } from 'react';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Search from 'components/Search';
import * as S from './style';
import dummy from 'fixtures/myjjong.dummy';
import ProjectBox from 'components/ProjectBox';

const MyJJong = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (newValue: string) => {
    setSearchValue(newValue);
  };

  const filteredProjects = dummy.filter((data) =>
    data.title.toLowerCase().includes(searchValue.toLowerCase()),
  );

  return (
    <>
      <Header />
      <S.Container>
        <S.Header>
          <S.Title>마이쫑에 추가한 프로젝트</S.Title>
          <Search value={searchValue} onChange={handleSearchChange} />
        </S.Header>
        <S.Projects>
          {filteredProjects.map((data, index) => (
            <ProjectBox
              key={index}
              title={data.title}
              description={data.description}
              currentPeople={data.currentPeople}
              requiredPeople={data.requiredPeople}
            />
          ))}
        </S.Projects>
      </S.Container>
      <Footer />
    </>
  );
};

export default MyJJong;
