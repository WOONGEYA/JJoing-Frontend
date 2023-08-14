import React from 'react';
import Header from 'components/Header';
import Member from 'assets/Member';
import * as S from './style';
import dummy from 'fixtures/detail.dummy';
import ProjectBox from 'components/ProjectBox';
import theme from 'styles/theme';

interface MembersPropsType {
  images: string[];
}

interface CategoryPropsType {
  categories: string[];
}

const Members = ({ images }: MembersPropsType) => (
  <S.Member>
    <S.MemberTitle>
      <Member />
      <span>멤버</span>
    </S.MemberTitle>
    <S.MemberImages>
      {images.map((image, index) => (
        <S.MemberProfile key={index} src={image} alt={`Member ${index + 1}`} />
      ))}
    </S.MemberImages>
  </S.Member>
);

const CategoryList = ({ categories }: CategoryPropsType) => (
  <S.Categories>
    {categories.map((value, index) => (
      <S.Category key={index}>{value}</S.Category>
    ))}
  </S.Categories>
);

const Detail = () => {
  const [
    {
      title,
      deadline,
      memberImage,
      description,
      atmosphere,
      stack,
      cooperation,
    },
  ] = dummy;

  return (
    <>
      <Header />
      <S.Container>
        <S.ProjectBox>
          <S.MainContents>
            <S.Image />
            <S.MainDesc>
              <S.Title>{title}</S.Title>
              <S.DeadLine>📅 모집 기한</S.DeadLine>
              <S.DeadLine style={{ color: theme.grey[500] }}>
                {deadline}
              </S.DeadLine>
              <Members images={memberImage} />
              <S.Button color={theme.primary}>마이쫑에 추가하기</S.Button>
              <S.Button color={theme.secondary}>지금 쪼잉하기!!</S.Button>
            </S.MainDesc>
          </S.MainContents>
          <S.CallOut>📋 프로젝트 설명</S.CallOut>
          <S.Description>{description}</S.Description>
          <S.CallOut>🧑‍💻 업무 카테고리</S.CallOut>
          <S.SubCallOut>👪 개발 분위기</S.SubCallOut>
          <CategoryList categories={atmosphere} />
          <S.SubCallOut>🛠 사용 기술</S.SubCallOut>
          <CategoryList categories={stack} />
          <S.SubCallOut>🤝 협업 툴</S.SubCallOut>
          <CategoryList categories={cooperation} />
        </S.ProjectBox>
        <S.Title>다른 프로젝트들 😎</S.Title>
        <S.Projects>
          {dummy
            .filter((data) => data.id <= 3)
            .map((data) => (
              <ProjectBox
                key={data.id}
                title={data.title}
                description={data.description}
                currentPeople={data.currentPeople}
                requiredPeople={data.requiredPeople}
              />
            ))}
        </S.Projects>
      </S.Container>
    </>
  );
};

export default Detail;
