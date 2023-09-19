import React, { useState } from 'react';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Search from 'components/Search';
import * as S from './style';
import instance from 'apis/httpClient';

const MyJJong = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (newValue: string) => {
    setSearchValue(newValue);
  };

  React.useEffect(() => {
    const fetchedData = async () => {
      try {
        const response = (await instance.get('/like/my')).data;
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchedData();
  }, []);

  return (
    <>
      <Header />
      <S.Container>
        <S.Header>
          <S.Title>마이쫑에 추가한 프로젝트</S.Title>
          <Search value={searchValue} onChange={handleSearchChange} />
        </S.Header>
        <S.Projects>
          {/* {filteredProjects.map((data, index) => (
            <ProjectBox
              key={index}
              name={data.name}
              description={data.description}
              currentPeople={data.currentPeople}
              requiredPeople={data.requiredPeople}
            />
          ))} */}
        </S.Projects>
      </S.Container>
      <Footer />
    </>
  );
};

export default MyJJong;
