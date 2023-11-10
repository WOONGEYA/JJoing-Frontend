import Layout from 'components/Layout';
import * as S from './style';
import CloseIcon from 'assets/CloseIcon';
import theme from 'styles/theme';
import Input from 'components/Input';
import UploadIcon from 'assets/UploadIcon';
import { useState } from 'react';
import instance from 'apis/httpClient';

const CreateBoard = () => {
  const [imageUrl, setImageUrl] = useState<string>('');

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
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    }
  };

  return (
    <Layout>
      <S.Container>
        <S.TextContainer>
          <S.CloseWrapper>
            <S.Curcor>
              <CloseIcon width={25} height={25} color={theme.grey[600]} />
            </S.Curcor>
          </S.CloseWrapper>
          <S.TextBox>
            <Input placeholder='제목을 입력해주세요.' height={27} />

            <S.Description
              required
              placeholder='내용을 입력해주세요'
              // value={userInput.content}
              // onChange={(e) => handleInputChange('content', e.target.value)}
            />
          </S.TextBox>
          <S.ImgContainer>
            <S.ImgTitle>이미지 추가</S.ImgTitle>
            <S.AddImgContainer>
              <S.ProfileImage url={imageUrl} htmlFor='file'></S.ProfileImage>
              <S.Input type='file' id='file' onChange={handleImageChange} />
              {imageUrl.length < 1 && (
                <S.UploadWrapper>
                  <UploadIcon />
                </S.UploadWrapper>
              )}
            </S.AddImgContainer>
            <S.ButtonContainer>
              <S.SubmitBtn>완료</S.SubmitBtn>
            </S.ButtonContainer>
          </S.ImgContainer>
        </S.TextContainer>
      </S.Container>
    </Layout>
  );
};

export default CreateBoard;
