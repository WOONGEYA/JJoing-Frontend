import React, { useState } from 'react';
import * as S from './style';
import CloseIcon from 'assets/CloseIcon';
import Input from 'components/Input';
import { FlexVertical } from 'styles/flex';
import UploadImage from 'assets/UploadImage';
import theme from 'styles/theme';
import Button from 'components/Button';
import instance from 'apis/httpClient';
import EditIcon from 'assets/EditIcon';

interface GenerateModalProps {
  closeModal: () => void;
}

interface UserInput {
  name: string;
  requiredPeople: number;
  startDate: string;
  endDate: string;
  skills: string[];
  content: string;
  moods: string[];
  coops: string[];
  positions: string[];
  imgUrl: string;
}

const initialUserInput: UserInput = {
  name: '',
  requiredPeople: 0,
  startDate: '',
  endDate: '',
  skills: [],
  content: '',
  moods: [],
  coops: [],
  positions: [],
  imgUrl: '',
};

const GenerateModal = ({ closeModal }: GenerateModalProps) => {
  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    let month = String(today.getMonth() + 1);
    let day = String(today.getDate());

    if (month.length === 1) {
      month = `0${month}`;
    }

    if (day.length === 1) {
      day = `0${day}`;
    }

    return `${year}-${month}-${day}`;
  };

  const [userInput, setUserInput] = useState(initialUserInput);
  const [tab, setTab] = useState(true);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [startDate, setStartDate] = useState(getCurrentDate());
  const [imageUrl, setImageUrl] = useState<string>('');
  const [newImageUrl, setNewImageUrl] = useState<string>('');

  const handleInputChange = (
    field: keyof UserInput,
    value: UserInput[keyof UserInput],
  ) => {
    setUserInput((prevInput) => ({
      ...prevInput,
      [field]: value,
    }));
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const img =
      'https://blog.kakaocdn.net/dn/bqPYzR/btraWSj02cT/HnIasx6vc09IszobY6Fwe0/img.jpg';
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      setImageUrl(URL.createObjectURL(selectedFile));

      const formData = new FormData();
      formData.append('image', selectedFile);

      const blob = new Blob([JSON.stringify(selectedFile)], {
        type: 'application/json',
      });

      formData.append('data', blob);

      try {
        const { data } = await instance.post('/project/image', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        });

        console.log('img', data.imgUrl);
        setNewImageUrl(data.imgUrl);

        if (!data.imgUrl) {
          setNewImageUrl(img);
        }
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    } else {
      setImageUrl(img);
      setNewImageUrl(img);
    }
  };

  const handleCompletion = () => {
    console.log(
      '유저 업데이트',
      userInput?.name,
      userInput?.content,
      userInput?.requiredPeople,
      userInput?.endDate,
      userInput?.skills,
      userInput?.coops,
      userInput?.moods,
      userInput?.positions,
      newImageUrl,
    );
  };
  const handleAddItem = (
    field: keyof UserInput,
    value: string,
    event: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (event.key === 'Enter' && value.trim() !== '') {
      event.preventDefault();
      setUserInput((prevInput) => ({
        ...prevInput,
        [field]: [...(prevInput[field] as string[]), value.trim()],
      }));
      event.currentTarget.value = '';
    }
  };

  const updateProfile = async () => {
    try {
      const newProject = {
        name: userInput?.name, // 프로젝트 이름 1
        content: userInput?.content, // 프로젝트 설명 5
        requiredPeople: userInput?.requiredPeople, // 모집 인원 2
        endDate: userInput?.endDate, // 모집 기한 4
        skills: userInput?.skills, // 사용 기술 7
        coops: userInput?.coops, // 협업 툴 8
        moods: userInput?.moods, // 개발 분위기 6
        positions: userInput?.positions, // 모집 분야 3
        imgUrl: newImageUrl, // 이미지 9
      };

      await instance.post('/project', newProject, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      });

      closeModal();
    } catch (error) {
      console.error('Error updating user profile:', error);
    }
  };

  return (
    <S.Container>
      <S.Header>
        <S.ModalTitle>프로젝트 생성하기 🖨</S.ModalTitle>
        <CloseIcon onClick={closeModal} />
      </S.Header>
      <S.ModalContents>
        {tab ? (
          <>
            <S.InputArea>
              <S.HeadLine>프로젝트 이름</S.HeadLine>
              <Input
                required
                placeholder='프로젝트 이름을 알려주세요'
                type='text'
                value={userInput.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
              />
            </S.InputArea>
            <S.InputArea>
              <S.HeadLine>모집 인원</S.HeadLine>
              <Input
                min='0'
                required
                placeholder='모집 인원을 알려주세요'
                type='number'
                value={userInput.requiredPeople}
                onChange={(e) =>
                  handleInputChange('requiredPeople', parseInt(e.target.value))
                }
              />
            </S.InputArea>
            <S.InputArea>
              <S.HeadLine>모집 기한</S.HeadLine>
              <FlexVertical style={{ gap: '24px' }}>
                <Input
                  required
                  placeholder='시작 날짜'
                  id='currentDate'
                  width={216}
                  type='date'
                  value={startDate}
                  readOnly
                />
                <Input
                  placeholder='종료 날짜'
                  width={216}
                  type='date'
                  value={userInput.endDate}
                  onChange={(e) => handleInputChange('endDate', e.target.value)}
                />
              </FlexVertical>
            </S.InputArea>

            <S.HeadLine>모집 분야</S.HeadLine>
            <S.InputArea>
              <Input
                required
                width={216}
                type='text'
                placeholder='예시) 프론트, 백엔드, 디자이너'
                onKeyPress={(e) =>
                  handleAddItem('positions', e.currentTarget.value, e)
                }
              />
              <S.TagArea>
                {userInput.positions.map((tag, index) => (
                  <S.Tag key={index}>{tag}</S.Tag>
                ))}
              </S.TagArea>
            </S.InputArea>
            <S.InputArea>
              <S.HeadLine>프로젝트 설명</S.HeadLine>
              <S.Description
                required
                placeholder='프로젝트에 대해 설명해주세요.'
                value={userInput.content}
                onChange={(e) => handleInputChange('content', e.target.value)}
              />
            </S.InputArea>
            <S.Button onClick={() => setTab((prev) => !prev)}>다음</S.Button>
          </>
        ) : (
          <>
            <S.HeadLine>개발분위기</S.HeadLine>
            <S.InputArea>
              <Input
                required
                width={216}
                type='text'
                placeholder='예시) 진중함, 목표지향, 창의적'
                onKeyPress={(e) =>
                  handleAddItem('moods', e.currentTarget.value, e)
                }
              />
              <S.TagArea>
                {userInput.moods.map((tag, index) => (
                  <S.Tag key={index}>{tag}</S.Tag>
                ))}
              </S.TagArea>
            </S.InputArea>
            <S.HeadLine>사용 기술</S.HeadLine>
            <S.InputArea>
              <Input
                required
                width={216}
                type='text'
                placeholder='사용 기술을 적어주세요.'
                onKeyPress={(e) =>
                  handleAddItem('skills', e.currentTarget.value, e)
                }
              />
              <S.TagArea>
                {userInput.skills.map((tag, index) => (
                  <S.Tag key={index}>{tag}</S.Tag>
                ))}
              </S.TagArea>
            </S.InputArea>
            <S.HeadLine>협업 툴</S.HeadLine>
            <S.InputArea>
              <Input
                required
                width={216}
                type='text'
                placeholder='협업할 때 쓰는 툴을 알려주세요.'
                onKeyPress={(e) =>
                  handleAddItem('coops', e.currentTarget.value, e)
                }
              />
              <S.TagArea>
                {userInput.coops.map((tag, index) => (
                  <S.Tag key={index}>{tag}</S.Tag>
                ))}
              </S.TagArea>
            </S.InputArea>
            <S.HeadLine>커버 이미지 추가</S.HeadLine>
            <S.InputArea>
              {uploadedImage ? (
                <S.UploadedImage
                  src={uploadedImage}
                  alt='Uploaded Cover'
                  style={{ maxWidth: '100%', height: '255px' }}
                />
              ) : (
                <S.UploadImage>
                  <S.Profile>
                    <S.ProfileImage url={imageUrl} htmlFor='file' />
                    <input type='file' id='file' onChange={handleImageChange} />
                    <EditIcon style={{ position: 'absolute', zIndex: '2' }} />
                  </S.Profile>
                </S.UploadImage>
              )}
            </S.InputArea>
            <FlexVertical style={{ justifyContent: 'space-between' }}>
              <Button
                onClick={() => setTab(true)}
                value={'이전'}
                background={theme.grey[500]}
              />
              <Button value={'완료'} onClick={updateProfile} />
            </FlexVertical>
          </>
        )}
      </S.ModalContents>
    </S.Container>
  );
};

export default GenerateModal;
