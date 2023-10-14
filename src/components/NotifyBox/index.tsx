import * as S from './style';
import * as F from 'styles/flex';
import trash from 'assets/trash.svg';
import useModal from 'hooks/useModal';
import DeleteConfirm from 'components/DeleteConfirm';
import React from 'react';
import instance from 'apis/httpClient';
import { useQuery } from 'react-query';
import ShowJJoingPerson from 'components/ShowJJoingPerson';
import { useNavigate } from 'react-router-dom';

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

interface NotifyBoxProps {
  id: number;
  title: string;
  content: string;
  projectId: number;
}

function NotifyBox({ id, title, content, projectId }: NotifyBoxProps) {
  const { openModal, closeModal } = useModal();
  const [userData, setUserData] = React.useState<User[]>([]);

  const modalOpen = () => {
    openModal({
      component: <DeleteConfirm id={id} closeModal={closeModal} />,
    });
  };

  const isUser = async (id: number) => {
    const { data } = await instance.get(`/application/project/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    });
    return data;
  };

  useQuery(['isUser', projectId], () => isUser(projectId), {
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

  const navigate = useNavigate();

  const GotoDetail = (projectId: number) => {
    navigate(`/detail/${projectId}`);
    console.log('안녕');
  };
  return (
    <S.Container>
      <S.Element
        onClick={() =>
          projectId !== null && content.includes('일원')
            ? GotoDetail(projectId)
            : OpenJjoingList
        }
      >
        <F.FlexVertical>
          <S.TitleBox>
            <S.Element>
              <S.Desciption>{title}</S.Desciption>
            </S.Element>
            <S.SubTitle>{content}</S.SubTitle>
          </S.TitleBox>
        </F.FlexVertical>
      </S.Element>
      <S.Else>
        <S.Icon
          src={trash}
          style={{ marginRight: '30px', cursor: 'pointer' }}
          onClick={modalOpen}
        />
      </S.Else>
    </S.Container>
  );
}

export default NotifyBox;
