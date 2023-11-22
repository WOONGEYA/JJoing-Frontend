import * as S from './style';
import * as F from 'styles/flex';
import trash from 'assets/trash.svg';
import useModal from 'hooks/useModal';
import { useNavigate } from 'react-router-dom';
import DeleteConfirm from 'components/DeleteConfirm';
import { User } from 'components/NotifyBox';
import NotifyAlert from 'components/NotifyAlert';

interface UserProps {
  id: number;
  title: string;
  content: string;
  projectId: number;
  userId: number;
}

const NotifyPerson = ({ id, title, content, projectId, userId }: UserProps) => {
  const { openModal, closeModal } = useModal();

  const OpenJjoingList = () => {
    openModal({
      component: <NotifyAlert closeModal={closeModal} userId={id} />,
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
};

export default NotifyPerson;
