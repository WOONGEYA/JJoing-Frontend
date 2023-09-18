import React, { useEffect, useState } from 'react';
import Header from 'components/Header';
import MemberIcon from 'assets/MemberIcon';
import * as S from './style';
import dummy from 'fixtures/detail.dummy';
import theme from 'styles/theme';
import { useParams } from 'react-router-dom';
import instance from 'apis/httpClient';

interface MembersPropsType {
  images: string[];
}

interface CategoryPropsType {
  categories: string[];
}

const Members = ({ images }: MembersPropsType) => (
  <S.Member>
    <S.MemberTitle>
      <MemberIcon />
      <span>멤버</span>
    </S.MemberTitle>
    <S.MemberImages>
      {images.map((image, index) => (
        <S.MemberProfile
          key={index}
          src={image}
          alt={`MemberIcon ${index + 1}`}
        />
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

interface UserInfo {
  content: string;
  coops: string[];
  currentPeople: number;
  endDate: string;
  imgUrl: string;
  moods: string[];
  name: string;
  positions: string[];
  requiredPeople: number;
  skills: string[];
  startDate: string;
}

const Detail = () => {
  const { id } = useParams();
  const [userInfo, setUserInfo] = useState<UserInfo | null>();

  useEffect(() => {
    const fetchedData = async () => {
      try {
        const { data } = await instance.get(`/project/${id}`);
        setUserInfo(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchedData();
  }, []);

  console.log('userInfo', userInfo);

  const [{ memberImage }] = dummy;

  return (
    <>
      <Header />
      <S.Container>
        <S.ProjectBox>
          <S.MainContents>
            <S.Image src={userInfo?.imgUrl} />
            <S.MainDesc>
              <S.Title>{userInfo?.name}</S.Title>
              <S.DeadLine>📅 모집 기한</S.DeadLine>
              <S.DeadLine style={{ color: theme.grey[500] }}>
                {userInfo?.startDate} ~ {userInfo?.endDate}
              </S.DeadLine>
              <Members images={memberImage} />
              <S.Button color={theme.primary}>마이쫑에 추가하기</S.Button>
              <S.Button color={theme.secondary}>지금 쪼잉하기!!</S.Button>
            </S.MainDesc>
          </S.MainContents>
          <S.CallOut>📋 프로젝트 설명</S.CallOut>
          <S.Description>{userInfo?.content}</S.Description>
          <S.CallOut>🧑‍💻 업무 카테고리</S.CallOut>
          <S.SubCallOut>👪 개발 분위기</S.SubCallOut>
          <CategoryList categories={userInfo?.moods || []} />
          <S.SubCallOut>🛠 사용 기술</S.SubCallOut>
          <CategoryList categories={userInfo?.skills || []} />
          <S.SubCallOut>🤝 협업 툴</S.SubCallOut>
          <CategoryList categories={userInfo?.coops || []} />
        </S.ProjectBox>
      </S.Container>
    </>
  );
};

export default Detail;
