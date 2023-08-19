import React, { useState, useEffect, useMemo } from 'react';
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
  imgUrl: string;
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

  const handleProfileImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (!files) return;

    const reader = new FileReader();

    reader.onload = (e: ProgressEvent<FileReader>) => {
      const result = e.target?.result;
      setImageUrl(result as string);
    };

    reader.readAsDataURL(files[0]);
  };

  const handleProfileFieldChange = useMemo(
    () => (field: keyof UserProfile, value: string) => {
      if (profile === null) return;

      const newProfile: UserProfile = { ...profile, [field]: value };
      setProfile(newProfile);
    },
    [profile],
  );

  if (!profile) {
    return <div>Loading...</div>;
  }

  const updateProfile = async () => {
    try {
      await instance.put(
        '/user',
        {
          nickName: profile.nickName,
          githubUrl: profile.githubUrl,
          email: profile.email,
          statusMessage: profile.statusMessage,
          major: profile.major,
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
          placeholder='아이디를 입력해주세요.'
          width='calc(100% - 32px)'
          name='name'
          type='text'
          value={profile?.nickName}
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
          value={profile.githubUrl}
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
          value={profile.email}
          onChange={(e) => handleProfileFieldChange('email', e.target.value)}
          readOnly
        />
      </S.Content>
      <S.Content>
        <S.ContentTitle>상태 메시지</S.ContentTitle>
        <Input
          placeholder='상태 메시지를 입력해주세요'
          width='calc(100% - 32px)'
          name='name'
          type='text'
          value={profile.statusMessage}
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
          value={profile.major}
          onChange={(e) => handleProfileFieldChange('major', e.target.value)}
        />
      </S.Content>

      <Button value='저장' onClick={updateProfile} />
    </S.ModalContainer>
  );
};

export default ProfileUpdateModal;
