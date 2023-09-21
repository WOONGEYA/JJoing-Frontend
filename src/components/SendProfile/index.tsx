import * as S from './style';
import CloseIcon from 'assets/CloseIcon';
import Input from 'components/Input';
import Button from 'components/Button';
import React from 'react';
import instance from 'apis/httpClient';
import { error } from 'console';
import { toast } from 'react-toastify';

interface GenerateModalProps {
  pageId: number;
  closeModal: () => void;
}

const SendProfile = ({ closeModal, pageId }: GenerateModalProps) => {
  const [produdce, setProdudce] = React.useState<string>('');
  const [userSkills, setUserSkills] = React.useState<string>('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;

    if (name === 'produce') {
      setProdudce(value);
    }

    if (name === 'skills') {
      setUserSkills(value);
    }
  };

  const onSubmit = () => {
    const sendData = {
      introduce: produdce,
      position: userSkills,
    };

    try {
      instance.post(`application/${pageId}`, sendData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      });
      toast.success('프로젝트 신청에 성공했습니다.');
    } catch {
      toast.error('이미 신청한 프로젝트입니다.');
    }
  };

  return (
    <S.ModalContainer>
      <S.TitleContainer>
        <S.Title>자기소개 작성 🖨</S.Title>
        <CloseIcon cursor='pointer' onClick={() => closeModal()} />
      </S.TitleContainer>
      <S.Content>
        <S.ContentTitle>자기소개</S.ContentTitle>
        <Input
          placeholder='자기소개를 력해주세요.'
          width='calc(100% - 25px)'
          name='produce'
          type='text'
          value={produdce}
          onChange={onChange}
          required
        />
      </S.Content>
      <S.Content>
        <S.ContentTitle>분야</S.ContentTitle>
        <Input
          placeholder='분야를 입력해주세요.'
          width='calc(100% - 25px)'
          name='skills'
          type='text'
          value={userSkills}
          onChange={onChange}
          required
        />
      </S.Content>
      <Button value='신청' onClick={onSubmit} />
    </S.ModalContainer>
  );
};

export default SendProfile;
