import instance from 'apis/httpClient';
import * as S from './style';
import { toast } from 'react-toastify';

interface GenerateModalProps {
  closeModal: () => void;
  pageId: number;
}

const EndProjectModal = ({ closeModal, pageId }: GenerateModalProps) => {
  const onEnd = () => {
    const fetchData = async () => {
      try {
        const { data } = await instance.put(`/project/close/${pageId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        });
        toast.success('프로젝트가 마감되었습니다.');
        window.location.reload();
      } catch (error) {
        toast.error('프로젝트 마감실패.');
      }
    };

    fetchData();
  };

  return (
    <S.ModalContainer>
      <S.ModalTextWrapper>
        <S.MainText>정말 해당 프로젝트를 마감하시겠습니까?</S.MainText>
        <S.SubText>마감한 프로젝트는 복구할 수 없습니다.</S.SubText>
        <S.ButtonsWrapper>
          <S.CancleButton
            onClick={() => {
              closeModal();
            }}
          >
            취소
          </S.CancleButton>
          <S.SuccessButton onClick={onEnd}>마감</S.SuccessButton>
        </S.ButtonsWrapper>
      </S.ModalTextWrapper>
    </S.ModalContainer>
  );
};

export default EndProjectModal;
