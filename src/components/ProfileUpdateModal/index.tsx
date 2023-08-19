import React from 'react';
import * as S from './style';
import EditIcon from 'assets/EditIcon';
import CloseIcon from 'assets/CloseIcon';
import Input from 'components/Input';
import Button from 'components/Button';
import ProfileImg from 'assets/profile.webp';
import profile_data from 'fixtures/profile.dummy';

const contents = [
  { name: '아이디', id: 'id', type: 'text' },
  { name: '깃허브 링크', id: 'github', type: 'url' },
  { name: '이메일 주소', id: 'email', type: 'email' },
  { name: '개인 링크', id: 'personalLink', type: 'url' },
  { name: '상태 메세지', id: 'statusMessage', type: 'text' },
  { name: '분야', id: 'field', type: 'text' },
];

interface ProfileUpdateModalProps {
  closeModal: () => void;
}

interface InputValues {
  [id: string]: string;
}

const ProfileUpdateModal = ({ closeModal }: ProfileUpdateModalProps) => {
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

  const { id, github, email, personalLink, statusMessage, field } =
    profile_data;

  const [inputValues, setInputValues] = React.useState<InputValues>({
    id,
    github,
    email,
    personalLink,
    statusMessage,
    field,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
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
      {contents.map((content) => {
        return (
          <S.Content key={content.name}>
            <S.ContentTitle>{content.name}</S.ContentTitle>
            <Input
              placeholder={`${content.name}를 입력해주세요.`}
              width='calc(100% - 32px)'
              value={inputValues[content.id]}
              name={content.id}
              type={content.type}
              onChange={handleChange}
            />
          </S.Content>
        );
      })}
      <Button value='저장' onClick={() => closeModal()} />
    </S.ModalContainer>
  );
};

export default ProfileUpdateModal;
