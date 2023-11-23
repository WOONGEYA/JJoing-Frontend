import React, { useState } from 'react';
import * as S from './style';
import CloseIcon from 'assets/CloseIcon';
import Input from 'components/Input';
import { FlexVertical } from 'styles/flex';
import theme from 'styles/theme';
import Button from 'components/Button';
import instance from 'apis/httpClient';
import EditIcon from 'assets/EditIcon';
import { toast } from 'react-toastify';
import { checkPostValid } from 'helper';
import { useQueryClient } from 'react-query';
import { ProjectLiked } from 'contents/queryKey';

interface GenerateModalProps {
  closeModal: () => void;
}

export interface UserInput {
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
interface TagInput {
  positions: string;
  moods: string;
  skills: string;
  coops: string;
}

const initialUserInput: UserInput = {
  name: '',
  requiredPeople: 1,
  startDate: '',
  endDate: '',
  skills: [],
  content: '',
  moods: [],
  coops: [],
  positions: [],
  imgUrl: '',
};

const initialTagInput: TagInput = {
  positions: '',
  moods: '',
  skills: '',
  coops: '',
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

  const img: string = process.env.REACT_APP_BASE_IMG || '';
  const startDate = getCurrentDate();

  const [userInput, setUserInput] = useState(initialUserInput);
  const [tab, setTab] = useState(true);
  const [imageUrl, setImageUrl] = useState<string>(img);
  const [newImageUrl, setNewImageUrl] = useState<string>(img);
  const [tagInput, setTagInput] = useState<TagInput>(initialTagInput);

  const handleInputChange = (
    field: keyof UserInput,
    value: UserInput[keyof UserInput],
  ) => {
    if (field === 'endDate') {
      if (value < startDate) {
        toast.error('날짜 형식에 맞지 않습니다.');
        return;
      }
    }

    setUserInput((prevInput) => ({
      ...prevInput,
      [field]: value,
    }));
  };

  const handleTagInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setTagInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
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
          },
        });

        setNewImageUrl(data.imgUrl);
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    }
  };

  const handleAddItem = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    if (event.key === 'Enter' && value.trim() !== '') {
      event.preventDefault();
      setTagInput((prev) => ({ ...prev, [name]: '' }));
      setUserInput((prevInput) => ({
        ...prevInput,
        [name]: [
          ...(prevInput[name as keyof UserInput] as string[]),
          value.trim(),
        ],
      }));
    }
  };

  const queryClient = useQueryClient();

  const updateProfile = async () => {
    try {
      const updatedUserInput = {
        ...userInput,
        requiredPeople: userInput.requiredPeople + 1,
      };
      const isValidPost = checkPostValid(updatedUserInput);
      if (isValidPost !== false) {
        closeModal();
        toast.success('프로젝트가 생성되었습니다!');
        await instance.post(
          '/project',
          { ...updatedUserInput, imgUrl: newImageUrl },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
          },
        );
        queryClient.invalidateQueries([ProjectLiked]);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const deletePosition = (indexToDelete: number) => {
    setUserInput((prevInput) => ({
      ...prevInput,
      positions: prevInput.positions.filter(
        (_, index) => index !== indexToDelete,
      ),
    }));
  };

  const deleteMoods = (indexToDelete: number) => {
    setUserInput((prevInput) => ({
      ...prevInput,
      moods: prevInput.moods.filter((_, index) => index !== indexToDelete),
    }));
  };

  const deleteCoops = (indexToDelete: number) => {
    setUserInput((prevInput) => ({
      ...prevInput,
      coops: prevInput.coops.filter((_, index) => index !== indexToDelete),
    }));
  };

  const deleteSkills = (indexToDelete: number) => {
    setUserInput((prevInput) => ({
      ...prevInput,
      skills: prevInput.skills.filter((_, index) => index !== indexToDelete),
    }));
  };

  return (
    <S.Container>
      <S.Header>
        <S.ModalTitle>프로젝트 생성하기 🖨</S.ModalTitle>
        <CloseIcon onClick={closeModal} style={{ cursor: 'pointer' }} />
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
                min='2'
                max='10'
                required
                placeholder='모집 인원을 알려주세요 (엔터로 구분해 주세요)'
                type='number'
                value={userInput.requiredPeople || 1}
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
            <S.InputArea>
              <S.HeadLine>모집 분야</S.HeadLine>
              <Input
                required
                type='text'
                placeholder='예시) 프론트, 백엔드, 디자이너 (엔터로 구분해 주세요)'
                value={tagInput.positions}
                name='positions'
                onChange={handleTagInputChange}
                onKeyPress={handleAddItem}
              />
              {userInput.positions.length !== 0 && (
                <S.TagArea>
                  {userInput.positions.map((tag, index) => (
                    <S.Tag key={index}>
                      {tag}
                      <CloseIcon
                        width={16}
                        height={16}
                        cursor='pointer'
                        onClick={() => deletePosition(index)}
                      />
                    </S.Tag>
                  ))}
                </S.TagArea>
              )}
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
            <S.ButtonContainer>
              <Button onClick={() => setTab((prev) => !prev)} value='다음' />
            </S.ButtonContainer>
          </>
        ) : (
          <>
            <S.InputArea>
              <S.HeadLine>개발 분위기</S.HeadLine>
              <Input
                required
                type='text'
                placeholder='예시) 진중함, 목표지향, 창의적 (엔터로 구분해 주세요)'
                value={tagInput.moods}
                name='moods'
                onChange={handleTagInputChange}
                onKeyPress={handleAddItem}
              />
              {userInput.moods.length !== 0 && (
                <S.TagArea>
                  {userInput.moods.map((tag, index) => (
                    <S.Tag key={index}>
                      {tag}
                      <CloseIcon
                        width={16}
                        height={16}
                        cursor='pointer'
                        onClick={() => deleteMoods(index)}
                      />
                    </S.Tag>
                  ))}
                </S.TagArea>
              )}
            </S.InputArea>
            <S.InputArea>
              <S.HeadLine>사용 기술</S.HeadLine>
              <Input
                required
                type='text'
                placeholder='사용 기술을 적어주세요. (엔터로 구분해 주세요)'
                value={tagInput.skills}
                name='skills'
                onChange={handleTagInputChange}
                onKeyPress={handleAddItem}
              />
              {userInput.skills.length !== 0 && (
                <S.TagArea>
                  {userInput.skills.map((tag, index) => (
                    <S.Tag key={index}>
                      {tag}
                      <CloseIcon
                        height={16}
                        width={16}
                        cursor='pointer'
                        onClick={() => deleteSkills(index)}
                      />
                    </S.Tag>
                  ))}
                </S.TagArea>
              )}
            </S.InputArea>
            <S.InputArea>
              <S.HeadLine>협업 툴</S.HeadLine>
              <Input
                required
                type='text'
                placeholder='협업할 때 쓰는 툴을 알려주세요. (엔터로 구분해 주세요)'
                value={tagInput.coops}
                name='coops'
                onChange={handleTagInputChange}
                onKeyPress={handleAddItem}
              />
              {userInput.coops.length !== 0 && (
                <S.TagArea>
                  {userInput.coops.map((tag, index) => (
                    <S.Tag key={index}>
                      {tag}
                      <CloseIcon
                        width={16}
                        height={16}
                        cursor='pointer'
                        onClick={() => deleteCoops(index)}
                      />
                    </S.Tag>
                  ))}
                </S.TagArea>
              )}
            </S.InputArea>
            <S.InputArea>
              <S.HeadLine>커버 이미지 추가</S.HeadLine>
              <S.UploadImage>
                <S.Profile>
                  <S.ProfileImage url={imageUrl} htmlFor='file' />
                  <input type='file' id='file' onChange={handleImageChange} />
                  <EditIcon
                    style={{
                      position: 'absolute',
                      zIndex: '2',
                      cursor: 'pointer',
                    }}
                  />
                </S.Profile>
              </S.UploadImage>
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
