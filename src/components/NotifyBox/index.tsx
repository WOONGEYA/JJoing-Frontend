import React from 'react';
import instance from 'apis/httpClient';
import { useQuery } from 'react-query';
import * as S from './style';
import * as F from 'styles/flex';
import trash from 'assets/trash.svg';
import useModal from 'hooks/useModal';
import { useNavigate } from 'react-router-dom';
import DeleteConfirm from 'components/DeleteConfirm';
import NotifyAlert from 'components/NotifyAlert';

export interface User {
  id: number;
  introduce: string;
  userName: string;
  position: string;
  phone: string;
  school: string;
  userImg: string;
  userId: number;
}

export interface NotifyBoxProps {
  id: number;
  title: string;
  content: string;
  projectId: number;
  userId: number;
  fromUserId: number;
  applicationId: number;
}

function NotifyBox({
  id,
  title,
  content,
  projectId,
  fromUserId,
  applicationId,
}: NotifyBoxProps) {
  const { openModal, closeModal } = useModal();

  const [userData, setUserData] = React.useState<User[]>([]);

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
        <NotifyAlert
          closeModal={closeModal}
          fromUserId={fromUserId}
          applicationId={applicationId}
        />
      ),
    });
  };

  const modalOpen = () => {
    openModal({
      component: <DeleteConfirm id={id} closeModal={closeModal} />,
    });
  };

  const navigate = useNavigate();

  const GotoDetail = (projectId: number) => {
    navigate(`/detail/${projectId}`);
  };

  return (
    <S.Container>
      <S.Element
        onClick={() =>
          projectId !== null && content.includes('일원')
            ? GotoDetail(projectId)
            : OpenJjoingList()
        }
      >
        <F.FlexVertical>
          <S.TitleBox>
            <S.Element>
              <S.Description>{title}</S.Description>
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
