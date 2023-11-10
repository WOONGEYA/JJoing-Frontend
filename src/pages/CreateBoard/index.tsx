import Layout from 'components/Layout';
import * as S from './style';
import CloseIcon from 'assets/CloseIcon';
import theme from 'styles/theme';
import Input from 'components/Input';
import UploadIcon from 'assets/UploadIcon';
import { useState } from 'react';
import useImageUpload from 'hooks/useImageUpload';
import { useMutation, useQueryClient } from 'react-query';
import { createBoard } from 'apis/api';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const CreateBoard = () => {
  const [name, setName] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const { imageUrl, handleImageChange } = useImageUpload();
  const router = useNavigate();

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const {
      target: { name, value },
    } = e;

    if (name === 'title') {
      setName(value);
    }

    if (name === 'content') {
      setContent(value);
    }
  };

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: () => createBoard({ title: name, content, imgUrl: imageUrl }),
    onSuccess: () => {
      queryClient.invalidateQueries(['readBoard']);
    },
  });

  const onSubmit = () => {
    mutate();
    router('/board');
    toast.success('게시글 작성이 완료되었습니다.');
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
            <Input
              placeholder='제목을 입력해주세요.'
              height={27}
              name='title'
              onChange={onChange}
            />

            <S.Description
              required
              placeholder='내용을 입력해주세요'
              name='content'
              onChange={onChange}
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
              <S.SubmitBtn onClick={onSubmit}>완료</S.SubmitBtn>
            </S.ButtonContainer>
          </S.ImgContainer>
        </S.TextContainer>
      </S.Container>
    </Layout>
  );
};

export default CreateBoard;
