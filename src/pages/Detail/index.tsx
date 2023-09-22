import React, { useEffect, useState } from 'react';
import Header from 'components/Header';
import * as S from './style';
import theme from 'styles/theme';
import { useParams } from 'react-router-dom';
import instance from 'apis/httpClient';
import MemberIcon from 'assets/MemberIcon';
import { useRecoilValue } from 'recoil';
import { selectingId, userKey } from 'apis/recoil';
import useModal from 'hooks/useModal';
import SendProfile from 'components/SendProfile';
import EndProjectModal from 'components/EndProjectModal';

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
  const [projectUsers, setProjectUsers] = useState<Member[]>([]);
  const user = useRecoilValue(userKey);
  const selectId = useRecoilValue(selectingId);

  const { openModal, closeModal } = useModal();

  const JJoingNow = () => {
    openModal({
      component: <SendProfile pageId={Number(id)} closeModal={closeModal} />,
    });
  };

  const EndProject = () => {
    openModal({
      component: (
        <EndProjectModal closeModal={closeModal} pageId={Number(id)} />
      ),
    });
  };

  const seeJjoingList = () => {
    instance.get(`/application/project/${id}`).then((res) => {
      console.log(res.data);
    });
  };

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
        setProjectUsers(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  console.log(projectUsers);
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
              {user === projectUsers[0]?.userId ? (
                <>
                  {selectId === 1 ? (
                    <S.ButtonGap></S.ButtonGap>
                  ) : (
                    <S.Button color={theme.secondary} onClick={EndProject}>
                      프로젝트 마감하기
                    </S.Button>
                  )}
                  <S.Button color={theme.primary} onClick={seeJjoingList}>
                    신청목록 조회하기
                  </S.Button>
                </>
              ) : (
                <>
                  <S.ButtonGap />
                  <S.Button color={theme.secondary} onClick={JJoingNow}>
                    지금 쪼잉하기!!
                  </S.Button>
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
