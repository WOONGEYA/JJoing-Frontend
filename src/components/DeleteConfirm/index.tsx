import instance from 'apis/httpClient';
import * as S from './style';
import { toast } from 'react-toastify';

interface GenerateModalProps {
  closeModal: () => void;
  id: number;
}

const DeleteConfirm = ({ closeModal, id }: GenerateModalProps) => {
  const onDelete = () => {
    const fetchData = async () => {
      try {
        await instance.delete(`/notification/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        });
        toast.success('알림을 삭제했습니다.');
        window.location.reload();
      } catch (error) {
        console.log('에러');
      }
    };

    fetchData();
  };

  return (
    <S.ModalContainer>
      <S.ModalTextWrapper>
        <S.MainText>정말 해당 알림을 삭제하시겠습니까?</S.MainText>
        <S.SubText>삭제한 알림은 복구할 수 없습니다.</S.SubText>
        <S.ButtonsWrapper>
          <S.CancelButton // 클릭시에 나오게 하려면 () => closeModal
            onClick={() => {
              closeModal();
            }}
          >
            취소
          </S.CancelButton>
          <S.SuccessButton onClick={onDelete}>삭제</S.SuccessButton>
        </S.ButtonsWrapper>
      </S.ModalTextWrapper>
    </S.ModalContainer>
  );
};

export default DeleteConfirm;
