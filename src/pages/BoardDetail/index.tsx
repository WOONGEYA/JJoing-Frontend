import Layout from 'components/Layout';
import * as S from './style';
import EyeIcon from 'assets/EyeIcon';
import MessageIcon from 'assets/MessageIcon';
import theme from 'styles/theme';
import MessageBox from 'components/MessageBox';
import KebabIcon from 'assets/KebabIcon';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getBoardProject } from 'apis/api';
import { ReadDetailProject } from 'contents/queryKey';
import { IDetailProject } from 'types/IDetailProject';
import { useRecoilValue } from 'recoil';
import { userKey } from 'apis/recoil';

const BoardDetail = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [projectDetail, setProjectDetail] = useState<IDetailProject>();
  const { id } = useParams();
  const ids = useRecoilValue(userKey);

  useQuery({
    queryKey: [ReadDetailProject],
    queryFn: () => getBoardProject(Number(id)),
    onSuccess: (data: IDetailProject) => {
      setProjectDetail(data);
    },
  });

  const EditProject = () => {
    console.log('Edit');
  };
  const onDelete = () => {
    console.log('Delete');
  };

  console.log(projectDetail?.userId, ids);
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
                  <S.ProfileImg src={projectDetail?.userImg} alt='userImg' />
                  <S.ProfileDetailBox>
                    <S.UserName>{projectDetail?.userName}</S.UserName>
                    <S.BoardDate>
                      {projectDetail?.createTime.replace('T', ' ')}
                    </S.BoardDate>
                  </S.ProfileDetailBox>
                </S.ProfileInfoContainer>
                <S.Detail>
                  <S.ProjectDetail>
                    <S.ProfileInfo></S.ProfileInfo>
                  </S.ProjectDetail>
                  <S.DetialWrapper>
                    <S.DetailBox>
                      <EyeIcon color={theme.grey[500]} />
                      {projectDetail?.viewCount}
                    </S.DetailBox>
                    <S.DetailBox>
                      <MessageIcon color={theme.grey[500]} />2
                    </S.DetailBox>
                  </S.DetialWrapper>
                </S.Detail>
              </S.UserInfoContainer>
            </S.TextBox>
            <S.ContentContainer>
              <S.Content>{projectDetail?.content}</S.Content>
              <S.CountMessage>댓글 16개</S.CountMessage>
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
