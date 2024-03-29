import Layout from 'components/Layout';
import * as S from './style';
import CloseIcon from 'assets/CloseIcon';
import theme from 'styles/theme';
import Input from 'components/Input';
import UploadIcon from 'assets/UploadIcon';
import { useState } from 'react';
import useImageUpload from 'hooks/useImageUpload';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { getBoardProject, putBoard } from 'apis';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { BoardKey, ReadDetailProject } from 'contents/queryKey';
import { IDetailProject } from 'types/IDetailProject';

const BoardEdit = () => {
  const [name, setName] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const { imageUrl, handleImageChange } = useImageUpload();
  const router = useNavigate();
  const { id } = useParams();

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const {
      target: { name, value },
    } = e;

    if (name === 'title') {
      setName(value);
      return;
    }

    if (name === 'content') {
      setContent(value);
      return;
    }
  };

  useQuery({
    queryKey: [ReadDetailProject],
    queryFn: () => getBoardProject(Number(id)),
    onSuccess: (data: IDetailProject) => {
      setName(data.title);
      setContent(data.content);
    },
  });

  const queryClient = useQueryClient();

  const postBoardMutate = useMutation({
    mutationFn: () =>
      putBoard({ title: name, content, imgUrl: imageUrl, id: Number(id) }),
    onSuccess: () => {
      queryClient.invalidateQueries([BoardKey]);
      router('/board');
      toast.success('게시글 수정이 완료되었습니다.');
    },
  });

  const submitPostboard = () => {
    if (name.length < 2) {
      toast.error('제목을 두 글자 이상 입력해주세요.');
      return;
    } else if (content.length < 5) {
      toast.error('내용을 다섯 글자 이상 입력해주세요.');
      return;
    } else if (name.length >= 2 && content.length >= 5) {
      postBoardMutate.mutate();
    }
  };

  return (
    <Layout>
      <S.Container>
        <S.CreateBoardTitle>게시글 수정</S.CreateBoardTitle>
        <S.TextContainer>
          <S.CloseWrapper>
            <S.Curcor>
              <CloseIcon
                width={25}
                height={25}
                color={theme.grey[600]}
                onClick={() => router(-1)}
              />
            </S.Curcor>
          </S.CloseWrapper>
          <S.TextBox>
            <Input
              placeholder='제목을 입력해주세요.'
              height={27}
              name='title'
              value={name}
              onChange={onChange}
            />

            <S.Description
              value={content}
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
              <S.SubmitBtn onClick={submitPostboard}>수정</S.SubmitBtn>
            </S.ButtonContainer>
          </S.ImgContainer>
        </S.TextContainer>
      </S.Container>
    </Layout>
  );
};

export default BoardEdit;
