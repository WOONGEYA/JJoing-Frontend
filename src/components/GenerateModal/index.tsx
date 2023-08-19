import React, { useState } from 'react';
import * as S from './style';
import CloseIcon from 'assets/CloseIcon';
import Input from 'components/Input';
import { FlexVertical } from 'styles/flex';
import ProfileImg from 'assets/profile.webp';
import UploadImage from 'assets/UploadImage';
import theme from 'styles/theme';
import Button from 'components/Button';

interface GenerateModalProps {
  closeModal: () => void;
}

interface UserInput {
  projectName: string;
  recruitMembers: number;
  startDate: string;
  endDate: string;
  selectedCategories: string[];
  projectDescription: string;
}

const initialUserInput: UserInput = {
  projectName: '',
  recruitMembers: 0,
  startDate: '',
  endDate: '',
  selectedCategories: [],
  projectDescription: '',
};

const GenerateModal = ({ closeModal }: GenerateModalProps) => {
  const categories = ['프론트엔드', '백엔드', '앱', '디자인'];

  const [imageUrl, setImageUrl] = React.useState<string>(ProfileImg);
  const [userInput, setUserInput] = useState(initialUserInput);
  const [tab, setTab] = useState(true);

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
      setImageUrl(String(result));
    };

    reader.readAsDataURL(files[0]);
  };

  const handleCompletion = () => {
    console.log(userInput);
    closeModal();
  };

  // console.log(userInput);

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
                placeholder='프로젝트 이름을 알려주세요'
                type='text'
                value={userInput.projectName}
                onChange={(e) =>
                  handleInputChange('projectName', e.target.value)
                }
              />
            </S.InputArea>
            <S.InputArea>
              <S.HeadLine>모집 인원</S.HeadLine>
              <Input
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
                  placeholder='시작 날짜'
                  width={216}
                  type='date'
                  value={userInput.startDate}
                  onChange={(e) =>
                    handleInputChange('startDate', e.target.value)
                  }
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
            <S.InputArea>
              <S.HeadLine>모집 분야</S.HeadLine>
              <FlexVertical>
                {categories.map((data, index) => (
                  <FlexVertical key={index} style={{ gap: '8px' }}>
                    <S.CheckBox
                      type='checkbox'
                      checked={userInput.selectedCategories.includes(data)}
                      onChange={() => {
                        if (userInput.selectedCategories.includes(data)) {
                          handleInputChange(
                            'selectedCategories',
                            userInput.selectedCategories.filter(
                              (category) => category !== data,
                            ),
                          );
                        } else {
                          handleInputChange('selectedCategories', [
                            ...userInput.selectedCategories,
                            data,
                          ]);
                        }
                      }}
                    />
                    <S.Footnote>{data}</S.Footnote>
                  </FlexVertical>
                ))}
              </FlexVertical>
            </S.InputArea>
            <S.InputArea>
              <S.HeadLine>프로젝트 설명</S.HeadLine>
              <S.Description
                placeholder='프로젝트에 대해 설명해주세요.'
                value={userInput.projectDescription}
                onChange={(e) =>
                  handleInputChange('projectDescription', e.target.value)
                }
              />
            </S.InputArea>
            <S.Button onClick={() => setTab((prev) => !prev)}>다음</S.Button>
          </>
        ) : (
          <>
            <S.HeadLine>개발분위기</S.HeadLine>
            <S.InputArea>
              <Input
                width={216}
                type='text'
                placeholder='예시) 진중함, 목표지향, 창의적'
              />
            </S.InputArea>
            <S.HeadLine>사용 기술</S.HeadLine>
            <S.InputArea>
              <Input
                width={216}
                type='text'
                placeholder='사용 기술을 적어주세요.'
              />
            </S.InputArea>
            <S.HeadLine>협업 툴</S.HeadLine>
            <S.InputArea>
              <Input
                width={216}
                type='text'
                placeholder='협업할 때 쓰는 툴을 알려주세요.'
              />
            </S.InputArea>
            <S.HeadLine>커버 이미지 추가</S.HeadLine>
            <S.InputArea>
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
