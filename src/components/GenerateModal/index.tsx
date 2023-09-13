import React, { useState } from 'react';
import * as S from './style';
import CloseIcon from 'assets/CloseIcon';
import Input from 'components/Input';
import { FlexVertical } from 'styles/flex';
import UploadImage from 'assets/UploadImage';
import theme from 'styles/theme';
import Button from 'components/Button';

interface GenerateModalProps {
  closeModal: () => void;
}

interface UserInput {
  name: string;
  recruitMembers: number;
  startDate: string;
  endDate: string;
  selectedCategories: string[];
  content: string;
  moodType: string[];
  skill: string[];
  communicationTool: string[];
}

const initialUserInput: UserInput = {
  name: '',
  recruitMembers: 0,
  startDate: '',
  endDate: '',
  selectedCategories: [],
  content: '',
  moodType: [],
  skill: [],
  communicationTool: [],
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

  const handleInputChange = (
    field: keyof UserInput,
    value: UserInput[keyof UserInput],
  ) => {
    setUserInput((prevInput) => ({
      ...prevInput,
      [field]: value,
    }));
  };

  const handleProfileImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (!files) return;

    const reader = new FileReader();

    reader.onload = (e: ProgressEvent<FileReader>) => {
      const result = e.target?.result;
      setUploadedImage(String(result));
    };

    reader.readAsDataURL(files[0]);
  };

  const handleCompletion = () => {
    console.log(userInput);
    closeModal();
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
                required
                placeholder='모집 인원을 알려주세요'
                type='number'
                value={userInput.recruitMembers}
                onChange={(e) =>
                  handleInputChange('recruitMembers', parseInt(e.target.value))
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
                  handleAddItem('selectedCategories', e.currentTarget.value, e)
                }
              />
              <S.TagArea>
                {userInput.selectedCategories.map((tag, index) => (
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
                  handleAddItem('moodType', e.currentTarget.value, e)
                }
              />
              <S.TagArea>
                {userInput.moodType.map((tag, index) => (
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
                  handleAddItem('skill', e.currentTarget.value, e)
                }
              />
              <S.TagArea>
                {userInput.skill.map((tag, index) => (
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
                  handleAddItem('communicationTool', e.currentTarget.value, e)
                }
              />
              <S.TagArea>
                {userInput.communicationTool.map((tag, index) => (
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
                <S.UploadImage htmlFor='file'>
                  <UploadImage />
                  <S.Footnote style={{ color: theme.grey[600] }}>
                    선택하여 이미지를 업로드 해주세요.
                  </S.Footnote>
                  <input
                    type='file'
                    id='file'
                    accept='.jpg, .png, .jpeg'
                    onChange={handleProfileImage}
                    style={{ display: 'none' }}
                  />
                </S.UploadImage>
              )}
            </S.InputArea>
            <FlexVertical style={{ justifyContent: 'space-between' }}>
              <Button
                onClick={() => setTab(true)}
                value={'이전'}
                background={theme.grey[500]}
              />
              <Button value={'완료'} onClick={handleCompletion} />
            </FlexVertical>
          </>
        )}
      </S.ModalContents>
    </S.Container>
  );
};

export default GenerateModal;
