import { useNavigate } from 'react-router-dom';
import ProfileUpdateModal from 'components/ProfileUpdateModal';
import useModal from 'hooks/useModal';
import theme from 'styles/theme';
import * as S from './style';

interface EditDirectlyModal {
  closeModal: () => void;
}

const EditDirectlyModal = ({ closeModal }: EditDirectlyModal) => {
  const { openModal } = useModal();
  const navigate = useNavigate();

  const openProfileUpdateModal = () => {
    openModal({
      component: <ProfileUpdateModal closeModal={closeModal} />,
    });
  };

  const handleAcceptButton = () => {
    navigate('/mypage');
    openProfileUpdateModal();
  };

  return (
    <S.Container>
      <S.Content>
        <S.Title>
          쪼잉을 처음 시작하시는군요! 지금 바로 프로필을 업데이트 하시겠나요?
        </S.Title>
        <S.Explanation>
          프로필을 업데이트하면 쪼잉을 하기 더 좋아요.
        </S.Explanation>
      </S.Content>
      <S.ButtonContainer>
        <S.Button color={theme.primary} onClick={handleAcceptButton}>
          지금 업데이트하기
        </S.Button>
        <S.Button color={theme.grey[500]} onClick={closeModal}>
          거절하기
        </S.Button>
      </S.ButtonContainer>
    </S.Container>
  );
};

export default EditDirectlyModal;
