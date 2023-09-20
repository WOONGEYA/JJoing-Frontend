import * as S from './style';
import CloseIcon from 'assets/CloseIcon';
import Input from 'components/Input';
import Button from 'components/Button';
import React from 'react';
import instance from 'apis/httpClient';

interface GenerateModalProps {
  pageId: number;
  closeModal: () => void;
}

const SendProfile = ({ closeModal, pageId }: GenerateModalProps) => {
  return (
    <S.ModalContainer>
      <S.TitleContainer>
        <S.Title>자기소개 작성 🖨</S.Title>
        <CloseIcon cursor='pointer' onClick={() => closeModal()} />
      </S.TitleContainer>
      <S.Content>
        <S.ContentTitle>자기소개</S.ContentTitle>
        {/* <Input
          placeholder='자기소개를 력해주세요.'
          width='calc(100% - 32px)'
          name='produce'
          type='text'
          value={produdce}
          onChange={onChange}
        /> */}
      </S.Content>
      <S.Content>
        <S.ContentTitle>분야</S.ContentTitle>
        {/* <Input
          placeholder='분야를 입력해주세요.'
          width='calc(100% - 32px)'
          name='skills'
          type='text'
          value={userSkills}
          onChange={onChange}
        /> */}
      </S.Content>
      {/* <Button value='저장' onClick={onSubmit} /> */}
    </S.ModalContainer>
  );
};

export default SendProfile;
