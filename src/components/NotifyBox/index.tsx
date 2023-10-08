import * as S from './style';
import * as F from 'styles/flex';
import trash from 'assets/trash.svg';
import useModal from 'hooks/useModal';
import DeleteConfirm from 'components/DeleteConfirm';
import { useNavigate } from 'react-router-dom';

interface NotifyBoxProps {
  id: number;
  title: string;
  content: string;
}

function NotifyBox({ id, title, content }: NotifyBoxProps) {
  const { openModal, closeModal } = useModal();

  const modalOpen = () => {
    openModal({
      component: <DeleteConfirm id={id} closeModal={closeModal} />,
    });
  };

  const navigate = useNavigate();

  const gotoNotify = () => {
    navigate(`/detail/${id}`);
  };

  console.log(id);
  return (
    <S.Container>
      <S.Element onClick={gotoNotify}>
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
