import React from 'react';
import instance from 'apis/httpClient';
import * as S from './style';

interface GenerateModalProps {
  closeModal: () => void;
  pageId: number;
}

const EndProjectModal2 = ({ closeModal, pageId }: GenerateModalProps) => {
  const onDelete = async () => {
    await instance.delete(`/project/${pageId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    });
    closeModal();
    window.location.reload();
  };

  return (
    <S.ModalContainer>
      <S.ModalTextWrapper>
        <S.MainText>정말 해당 프로젝트를 삭제하시겠습니까?</S.MainText>
        <S.SubText>삭제한 프로젝트는 복구할 수 없습니다.</S.SubText>
        <S.ButtonsWrapper>
          <S.CancleButton
            onClick={() => {
              closeModal();
            }}
          >
            취소
          </S.CancleButton>
          <S.SuccessButton onClick={onDelete}>삭제</S.SuccessButton>
        </S.ButtonsWrapper>
      </S.ModalTextWrapper>
    </S.ModalContainer>
  );
};

export default EndProjectModal2;