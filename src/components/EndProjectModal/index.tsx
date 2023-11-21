import React from 'react';
import instance from 'apis/httpClient';
import * as S from './style';

interface GenerateModalProps {
  closeModal: () => void;
  pageId: number;
}

const EndProjectModal = ({ closeModal, pageId }: GenerateModalProps) => {
  const onEnd = async () => {
    await instance.put(`/project/close/${pageId}`, {
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
        <S.MainText>정말 해당 프로젝트를 마감하시겠습니까?</S.MainText>
        <S.SubText>마감한 프로젝트는 복구할 수 없습니다.</S.SubText>
        <S.ButtonsWrapper>
          <S.CancelButton
            onClick={() => {
              closeModal();
            }}
          >
            취소
          </S.CancelButton>
          <S.SuccessButton onClick={onEnd}>마감</S.SuccessButton>
        </S.ButtonsWrapper>
      </S.ModalTextWrapper>
    </S.ModalContainer>
  );
};

export default EndProjectModal;
