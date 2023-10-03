import { useParams } from 'react-router-dom';
import * as S from './style';
import instance from 'apis/httpClient';
import { useEffect, useState } from 'react';
import * as F from 'styles/flex';
import useModal from 'hooks/useModal';
import ShowJJoingPerson from 'components/ShowJJoingPerson';
import Header from 'components/Header';

interface User {
  id: number;
  introduce: string;
  userName: string;
  position: string;
}

const ProjectJoinList = () => {
  const { id } = useParams<{ id: string }>();
  const [userData, setUserData] = useState<User[]>([]);

  useEffect(() => {
    instance.get(`/application/project/${id}`).then((res) => {
      console.log('res', res.data);
      setUserData(res.data);
    });
  }, [id]);

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
        <S.MainTitle>신청된 쪼잉</S.MainTitle>
        {userData.map((data) =>
          data.userName.length > 0 ? (
            <S.Container key={data.id} onClick={OpenJjoingList}>
              <S.Element>
                <F.FlexVertical>
                  <S.TitleBox>
                    <S.Element>
                      <S.Desciption>자기소개: {data.introduce}</S.Desciption>
                      <S.Position>분야: {data.position}</S.Position>
                    </S.Element>
                    <S.SubTitle>이름: {data.userName}</S.SubTitle>
                  </S.TitleBox>
                </F.FlexVertical>
              </S.Element>
            </S.Container>
          ) : (
            <div key={data.id}>
              <div>sdfsdf</div>
            </div>
          ),
        )}
      </S.JJoingContainer>
    </>
  );
};

export default ProjectJoinList;
