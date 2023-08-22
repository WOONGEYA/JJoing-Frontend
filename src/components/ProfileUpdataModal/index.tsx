import React, { useState, useEffect } from 'react';
import * as S from './style';
import EditIcon from 'assets/EditIcon';
import CloseIcon from 'assets/CloseIcon';
import Input from 'components/Input';
import Button from 'components/Button';
import { useRecoilState } from 'recoil';
import { accessGoogle } from 'apis/recoil';
import instance from 'apis/httpClient';

interface ProfileUpdateModalProps {
  closeModal: () => void;
}

interface UserProfile {
  statusMessage: string;
  nickName: string;
  githubUrl: string;
  name: string;
  email: string;
  school: string;
  major: string;
}

const ProfileUpdateModal = ({ closeModal }: ProfileUpdateModalProps) => {
  const [img, setImg] = useRecoilState(accessGoogle);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [imageUrl, setImageUrl] = useState<string>(img);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await instance.get('/user', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        });
        setImg(response.data.imgUrl);
        setProfile(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchUserData();
  }, []);

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      setImageUrl(URL.createObjectURL(selectedFile));

      const formData = new FormData();
      formData.append('image', selectedFile);

      try {
        await instance.post('/user', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        });

        console.log('Image uploaded successfully!');
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    }
  };

  const handleProfileFieldChange = (
    field: keyof UserProfile,
    value: string,
  ) => {
    if (profile === null) return;

    const newProfile: UserProfile = { ...profile, [field]: value };
    setProfile(newProfile);
  };

  const updateProfile = async () => {
    try {
      await instance.put(
        '/user',
        {
          nickname: profile?.nickName,
          githubUrl: profile?.githubUrl,
          email: profile?.email,
          statusMessage: profile?.statusMessage,
          major: profile?.major,
          imgUrl: imageUrl,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        },
      );

      closeModal();
    } catch (error) {
      console.error('Error updating user profile:', error);
    }
  };

  if (!profile) {
    return <div>Loading...</div>;
  }

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
          <input type='file' id='file' onChange={handleImageChange} />
          <EditIcon style={{ position: 'absolute', zIndex: '2' }} />
        </S.Profile>
      </S.Content>
      <S.Content>
        <S.ContentTitle>닉네임</S.ContentTitle>
        <Input
          placeholder='아이디를 입력해주세요.'
          width='calc(100% - 32px)'
          name='name'
          type='text'
          value={profile?.nickName || ''}
          onChange={(e) => handleProfileFieldChange('nickName', e.target.value)}
        />
      </S.Content>
      <S.Content>
        <S.ContentTitle>깃허브 링크</S.ContentTitle>
        <Input
          placeholder='깃허브 링크를 입력해주세요'
          width='calc(100% - 32px)'
          name='name'
          type='text'
          value={profile.githubUrl || ''}
          onChange={(e) =>
            handleProfileFieldChange('githubUrl', e.target.value)
          }
        />
      </S.Content>
      <S.Content>
        <S.ContentTitle>이메일 주소</S.ContentTitle>
        <Input
          placeholder=''
          width='calc(100% - 32px)'
          name='name'
          type='text'
          value={profile.email || ''}
          onChange={(e) => handleProfileFieldChange('email', e.target.value)}
          readOnly
        />
      </S.Content>
      <S.Content>
        <S.ContentTitle>상태 메시지</S.ContentTitle>
        <S.Description
          name='name'
          value={profile.statusMessage || ''}
          onChange={(e) =>
            handleProfileFieldChange('statusMessage', e.target.value)
          }
        />
      </S.Content>
      <S.Content>
        <S.ContentTitle>분야</S.ContentTitle>
        <Input
          placeholder='분야를 입력해주세요'
          width='calc(100% - 32px)'
          name='name'
          type='text'
          value={profile.major || ''}
          onChange={(e) => handleProfileFieldChange('major', e.target.value)}
        />
      </S.Content>

      <Button value='저장' onClick={updateProfile} />
    </S.ModalContainer>
  );
};

export default ProfileUpdateModal;
