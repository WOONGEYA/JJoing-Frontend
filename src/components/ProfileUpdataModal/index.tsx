import React, { useState } from 'react';
import * as S from './style';
import EditIcon from 'assets/EditIcon';
import CloseIcon from 'assets/CloseIcon';
import Input from 'components/Input';
import Button from 'components/Button';
import ProfileImg from 'assets/profile.webp';
import axios from 'axios';

const contents = [
  { name: '아이디', id: 'id', type: 'text' },
  { name: '깃허브 링크', id: 'github', type: 'url' },
  { name: '이메일 주소', id: 'email', type: 'email' },
  { name: '상태 메세지', id: 'statusMessage', type: 'text' },
  { name: '분야', id: 'field', type: 'text' },
];

interface ProfileUpdateModalProps {
  closeModal: () => void;
}

const ProfileUpdateModal = ({ closeModal }: ProfileUpdateModalProps) => {
  const [profile, setProfile] = useState({});
  React.useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://jjoing.kro.kr/user', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        });
        console.log(response.data);
        setProfile(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  console.log('profile', profile);

  const [imageUrl, setImageUrl] = React.useState<string>(ProfileImg);

  const handleProfileImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (!files) return;

    const reader = new FileReader();

    reader.onload = (e: ProgressEvent<FileReader>) => {
      const result = e.target?.result;
      setImageUrl(String(result));
    };

    reader.readAsDataURL(files[0]);
  };

  return (
    <S.ModalContainer>
      <S.TitleContainer>
        <S.Title>프로필 수정하기 🖨</S.Title>
        <CloseIcon cursor='pointer' onClick={() => closeModal()} />
      </S.TitleContainer>
      <S.Content>
        <S.ContentTitle>프로필 이미지</S.ContentTitle>
        <S.Profile>
          <S.ProfileImage url={imageUrl} htmlFor='file' />
          <input
            type='file'
            id='file'
            accept='.jpg, .png, .jpeg'
            onChange={handleProfileImage}
          />
          <EditIcon style={{ position: 'absolute', zIndex: '2' }} />
        </S.Profile>
      </S.Content>
      <S.Content>
        <S.ContentTitle>아이디</S.ContentTitle>
        <Input
          placeholder=''
          width='calc(100% - 32px)'
          name='name'
          type='text'
        />
      </S.Content>
      <S.Content>
        <S.ContentTitle>깃허브 링크</S.ContentTitle>
        <Input
          placeholder=''
          width='calc(100% - 32px)'
          name='name'
          type='text'
        />
      </S.Content>
      <S.Content>
        <S.ContentTitle>이메일 주소</S.ContentTitle>
        <Input
          placeholder=''
          width='calc(100% - 32px)'
          name='name'
          type='text'
        />
      </S.Content>
      <S.Content>
        <S.ContentTitle>상태 메시지</S.ContentTitle>
        <Input
          placeholder=''
          width='calc(100% - 32px)'
          name='name'
          type='text'
        />
      </S.Content>
      <S.Content>
        <S.ContentTitle>분야</S.ContentTitle>
        <Input
          placeholder=''
          width='calc(100% - 32px)'
          name='name'
          type='text'
        />
      </S.Content>

      <Button value='저장' onClick={() => closeModal()} />
    </S.ModalContainer>
  );
};

export default ProfileUpdateModal;
