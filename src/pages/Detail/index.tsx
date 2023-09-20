import React, { useEffect, useState } from 'react';
import Header from 'components/Header';
import * as S from './style';
import theme from 'styles/theme';
import { useParams } from 'react-router-dom';
import instance from 'apis/httpClient';
import MemberIcon from 'assets/MemberIcon';
import { useRecoilValue } from 'recoil';
import { userKey } from 'apis/recoil';

interface CategoryPropsType {
  categories: string[];
}

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

interface Member {
  userId: number;
  name: string;
  imgUrl: string;
}

const Detail = () => {
  const { id } = useParams();
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [projectUsers, setProjectUsers] = useState<Member[] | null>(null);
  const user = useRecoilValue(userKey);

  console.log(user);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await instance.get(`/project/${id}`);
        setUserInfo(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await instance.get(`/project/member/${id}`);
        console.log(data);
        setProjectUsers(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <>
      <Header />
      <S.Container>
        <S.ProjectBox>
          <S.MainContents>
            <S.Image src={userInfo?.imgUrl} alt={userInfo?.name} />
            <S.MainDesc>
              <S.Title>{userInfo?.name}</S.Title>
              <S.DeadLine>📅 모집 기한</S.DeadLine>
              <S.DeadLine style={{ color: theme.grey[500] }}>
                {userInfo?.startDate} ~ {userInfo?.endDate}
              </S.DeadLine>
              <S.Member>
                <S.MemberTitle>
                  <MemberIcon />
                  <span>멤버</span>
                </S.MemberTitle>
                <S.MemberImages>
                  {projectUsers?.map((image) => (
                    <S.MemberProfile
                      key={image.userId}
                      src={image.imgUrl}
                      alt={image.name}
                    />
                  ))}
                </S.MemberImages>
              </S.Member>
              {user && projectUsers && user !== projectUsers[0]?.userId && (
                <>
                  <S.Button color={theme.primary}>마이쫑에 추가하기</S.Button>
                  <S.Button color={theme.secondary}>지금 쪼잉하기!!</S.Button>
                </>
              )}
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
