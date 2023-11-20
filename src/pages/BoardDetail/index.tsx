import Layout from 'components/Layout';
import * as S from './style';
import EyeIcon from 'assets/EyeIcon';
import MessageIcon from 'assets/MessageIcon';
import theme from 'styles/theme';
import MessageBox from 'components/MessageBox';
import KebabIcon from 'assets/KebabIcon';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { deleteBoardProject, getBoardProject } from 'apis/api';
import { ReadDetailProject } from 'contents/queryKey';
import { IDetailProject } from 'types/IDetailProject';
import { useRecoilValue } from 'recoil';
import { userKey } from 'apis/recoil';

const BoardDetail = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [projectDetail, setProjectDetail] = useState<IDetailProject>();
  const { id } = useParams();
  const ids = useRecoilValue(userKey);
  const router = useNavigate();

  useQuery({
    queryKey: [ReadDetailProject],
    queryFn: () => getBoardProject(Number(id)),
    onSuccess: (data: IDetailProject) => {
      setProjectDetail(data);
    },
  });

  const EditProject = () => {
    router(`/board/edit/${id}`);
  };

  const queryClient = useQueryClient();

  const deleteBoard = useMutation({
    mutationKey: [ReadDetailProject],
    mutationFn: () => deleteBoardProject(Number(id)),
    onSuccess: () => {
      queryClient.invalidateQueries([ReadDetailProject]);
      router('/board');
    },
  });

  const onDelete = () => {
    deleteBoard.mutate();
  };

  return (
    <Layout>
      <S.FlexBox>
        <S.Container>
          <S.TextContainer>
            <S.TextBox>
              <S.TitleWrapper>
                <S.Title>{projectDetail?.title}</S.Title>
                <S.ModifyWrapper>
                  {projectDetail?.userId === ids && (
                    <KebabIcon
                      onClick={() => {
                        setIsOpen(!isOpen);
                      }}
                    />
                  )}
                  {isOpen && (
                    <S.DropdownContainer>
                      <S.Options>
                        <S.Option onClick={EditProject}>수정</S.Option>
                        <S.Option onClick={onDelete}>삭제</S.Option>
                      </S.Options>
                    </S.DropdownContainer>
                  )}
                </S.ModifyWrapper>
              </S.TitleWrapper>
              <S.UserInfoContainer>
                <S.ProfileInfoContainer>
                  <S.ProfileImg
                    src={projectDetail?.userImg}
                    alt='userImg'
                    onClick={() => {
                      router(`/others/${projectDetail?.userId}`);
                    }}
                  />
                  <S.ProfileDetailBox>
                    <S.UserName>{projectDetail?.userName}</S.UserName>
                    <S.BoardDate>
                      {projectDetail?.createTime.replace('T', ' ')}
                    </S.BoardDate>
                  </S.ProfileDetailBox>
                </S.ProfileInfoContainer>
                <S.Detail>
                  <S.ProjectDetail></S.ProjectDetail>
                  <S.DetialWrapper>
                    <S.DetailBox>
                      <EyeIcon color={theme.grey[500]} />
                      {projectDetail?.viewCount}
                    </S.DetailBox>
                    <S.DetailBox>
                      <MessageIcon color={theme.grey[500]} />
                      {projectDetail?.commentCount}
                    </S.DetailBox>
                  </S.DetialWrapper>
                </S.Detail>
              </S.UserInfoContainer>
            </S.TextBox>
            <S.ContentContainer>
              <S.Content>{projectDetail?.content}</S.Content>
              {projectDetail?.postImg && (
                <S.ProjectImg src={projectDetail?.postImg} alt='img' />
              )}
              <S.CountMessage>
                댓글 {projectDetail?.commentCount}개
              </S.CountMessage>
            </S.ContentContainer>
            <S.MessageWrapper>
              <MessageBox />
            </S.MessageWrapper>
          </S.TextContainer>
        </S.Container>
      </S.FlexBox>
    </Layout>
  );
};

export default BoardDetail;
