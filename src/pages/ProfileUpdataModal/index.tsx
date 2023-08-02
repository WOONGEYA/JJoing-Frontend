import React from 'react';
import * as S from './style';
import EditImg from 'assets/EditIcon.svg';
import X from 'assets/x.svg';
import ProfileUpdateModalProps from 'types/IProfileUpdateModalProps.type';

const ProfileUpdateModal: React.FC<ProfileUpdateModalProps> = ({ closeModal }) => {
  const Submit = () => {
    closeModal();
  };

  return (
    <S.ModalWrapper>
      <S.ModalHeader>
        <S.ModalTitle>프로필 수정하기</S.ModalTitle>
        <S.CloseButton onClick={closeModal}>
          <S.ImgX src={X} alt='x' />
        </S.CloseButton>
      </S.ModalHeader>
      <S.ModalEditImgTitle>프로필 이미지</S.ModalEditImgTitle>
      <S.ModalImgWrapper>
        <S.ProfileImg>
          <S.EditProfile>
            <S.EditImg src={EditImg} alt='EditImg' />
          </S.EditProfile>
        </S.ProfileImg>
      </S.ModalImgWrapper>
      <S.EditIdTitle>아이디</S.EditIdTitle>
      <S.EditInput type='text' placeholder='뚱이' />
      <S.EditIdTitle>깃허브 링크</S.EditIdTitle>
      <S.EditInput type='text' placeholder='https://github.com/lsj0202' />
      <S.EditIdTitle>이메일 주소</S.EditIdTitle>
      <S.EditInput type='text' placeholder='2022046@bssm.hs.kr' />
      <S.EditIdTitle>상태 메시지</S.EditIdTitle>
      <S.EditInputMessage placeholder='뚱이 스폰지밥 징징이 다람이 핑핑이' />
      <S.EditIdTitle>분야</S.EditIdTitle>
      <S.EditInput type='text' placeholder='Frontend' />
      <S.ModalButtonWrapper>
        <S.SubmitButton onClick={Submit}>저장</S.SubmitButton>
      </S.ModalButtonWrapper>
    </S.ModalWrapper>
  );
};

export default ProfileUpdateModal;
