import React from 'react';
import ProjectBox from 'components/ProjectBox';
import Dropdown from 'components/Dropdown';
import dummy from 'fixtures/detail.dummy';
import * as S from './style';
import Layout from 'components/Layout';

const dropdownOptions = [
  {
    id: '0',
    currentOption: '분야 선택',
    options: ['Web', 'iOS', 'Android'],
  },
  {
    id: '1',
    currentOption: '직군 선택',
    options: ['Front-end', 'Back-end', 'Designer'],
  },
  {
    id: '2',
    currentOption: '정렬 기준 선택',
    options: ['인기순', '마이쫑 많은 순', '최신순'],
  },
];

const Explore = () => {
  const [isOpened, setIsOpened] = React.useState([false, false, false]);

  const handleDropdown = (e: React.MouseEvent<HTMLDivElement>) => {
    const { id } = e.currentTarget;
    const parsedId = parseInt(id);
    const copy = [...isOpened];
    copy[parsedId] = !copy[parsedId];
    setIsOpened(copy);
  };

  return (
    <Layout>
      <S.Contents>
        <S.Banner />
        <S.Filter>
          {dropdownOptions.map((option) => (
            <Dropdown
              key={option.id}
              isOpened={isOpened[parseInt(option.id)]}
              {...option}
              onClick={handleDropdown}
            />
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
    </Layout>
  );
};

export default Explore;
