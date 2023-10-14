import { useParams } from 'react-router-dom';
import * as S from './style';
import instance from 'apis/httpClient';
import { useEffect, useState } from 'react';
import useModal from 'hooks/useModal';
import ShowJJoingPerson from 'components/ShowJJoingPerson';
import Header from 'components/Header';
import NoNotify from 'components/NoNotify';
import { useQuery } from 'react-query';

interface User {
  id: number;
  introduce: string;
  userName: string;
  position: string;
  phone: string;
  school: string;
  userImg: string;
  userId: number;
}

const ProjectJoinList = () => {
  const { id } = useParams();
  const parsedId = Number(id);
  const [userData, setUserData] = useState<User[]>([]);

  const isUser = async (id: number) => {
    const { data } = await instance.get(`/application/project/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    });
    return data;
  };

  useQuery(['isUser', parsedId], () => isUser(parsedId), {
    onSuccess: (data) => {
      setUserData(data);
    },
  });

  const OpenJjoingList = () => {
    openModal({
      component: (
        <ShowJJoingPerson closeModal={closeModal} userData={userData} />
      ),
    });
  };

  const { openModal, closeModal } = useModal();

  return (
    <>
      <Header />
      <S.JJoingContainer>
        <S.TitleContainer>
          <S.MainTitle>쪼잉 신청 확인하기</S.MainTitle>
          <S.SubTitle>프로필을 클릭해 상세 사항을 확인해 보세요!</S.SubTitle>
        </S.TitleContainer>
        {userData.length > 0 ? (
          userData.map((data) => (
            <S.Container key={data.id} onClick={OpenJjoingList}>
              <S.ProfileImg src={data.userImg} alt='' />
              <S.UserInfoContainer>
                <div>{data.userName}</div>
                <S.UserInfo>
                  {data.school} / {data.position}
                </S.UserInfo>
              </S.UserInfoContainer>
            </S.Container>
          ))
        ) : (
          <S.NoJJoingContainer>
            <NoNotify />
          </S.NoJJoingContainer>
        )}
      </S.JJoingContainer>
    </>
  );
};

export default ProjectJoinList;
