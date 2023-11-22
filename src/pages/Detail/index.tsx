import React, { useState } from 'react';
import theme from 'styles/theme';
import { useNavigate, useParams } from 'react-router-dom';
import MemberIcon from 'assets/MemberIcon';
import useModal from 'hooks/useModal';
import SendProfile from 'components/SendProfile';
import EndProjectModal from 'components/EndProjectModal';
import Layout from 'components/Layout';
import CalendarIcon from 'assets/CalendarIcon';
import Tag from 'components/Tag';
import * as S from './style';
import { useRecoilValue } from 'recoil';
import { userKey } from 'apis/recoil';
import GenerateModalEdit from 'components/GenerateModalEdit';
import { toast } from 'react-toastify';
import ArrowIcon from 'assets/ArrowIcon';
import KebabIcon from 'assets/KebabIcon';
import { IProjectDetailInfo } from 'types/IProjectDetailInfo';
import { IMember } from 'types/IMember';
import {
  ProjectLiked,
  ReadDetailProject,
  ReadDetailProjectMember,
} from 'contents/queryKey';
import { useMutation, useQueries, useQueryClient } from 'react-query';
import {
  addProjectDetail,
  deleteHeart,
  deleteProjectDetail,
  getProjectDetail,
  getProjectMember,
  getIsLiked,
} from 'apis';
import LoadingPage from 'pages/LoadingPage';
import DetailModal from 'components/DetailModal';

const Detail = () => {
  const { id } = useParams();
  const [projectInfo, setProjectInfo] = React.useState<IProjectDetailInfo>();
  const [projectUsers, setProjectUsers] = React.useState<IMember[]>([]);
  const [isEnd, setIsEnd] = useState(false);
  const userId = useRecoilValue(userKey);
  const user = useRecoilValue(userKey);
  const navigate = useNavigate();

  const { openModal, closeModal } = useModal();
  const [isTrue, setIsTrue] = useState(false);

  const toggle = () => {
    setIsTrue((prev) => !prev);
  };

  const JJoingNow = () => {
    openModal({
      component: <SendProfile pageId={Number(id)} closeModal={closeModal} />,
    });
  };

  const EndProject = () => {
    openModal({
      component: (
        <EndProjectModal closeModal={closeModal} pageId={Number(id)} />
      ),
    });
  };

  const AboutThumbnail = () => {
    openModal({
      component: (
        <DetailModal
          closeModal={closeModal}
          imgUrl={projectInfo?.imgUrl}
          pageId={Number(id)}
        />
      ),
    });
  };

  const EditProject = () => {
    openModal({
      component: (
        <GenerateModalEdit
          closeModal={closeModal}
          pageId={Number(id)}
          projectImage={projectInfo?.imgUrl}
        />
      ),
    });
  };

  const seeJjoingList = () => {
    navigate(`/seeMyProjectJoing/${id}`);
  };

  const goOthersPage = (userId: number) => {
    navigate(`/others/${userId}`);
  };

  const results = useQueries([
    {
      queryKey: [ReadDetailProject],
      queryFn: () => getProjectDetail(Number(id)),
      onSuccess: (data: IProjectDetailInfo) => {
        setProjectInfo(data);
      },
    },
    {
      queryKey: [ReadDetailProjectMember],
      queryFn: () => getProjectMember(Number(id)),
      onSuccess: (data: IMember[]) => {
        setProjectUsers(data);
      },
    },
    {
      queryKey: [ProjectLiked],
      queryFn: () => getIsLiked(Number(id)),
      onSuccess: (data: boolean) => {
        setIsEnd(data);
      },
    },
  ]);

  const isLoading = results.some((result) => result.isLoading);
  const queryClient = useQueryClient();

  const postBoardMutate = useMutation({
    mutationFn: () => deleteHeart(Number(id)),
    onSuccess: () => {
      queryClient.invalidateQueries([ProjectLiked]);
    },
  });

  const deleteProjects = useMutation({
    mutationFn: () => deleteProjectDetail(Number(id)),
    onSuccess: () => {
      navigate('/explore');
      toast.success('프로젝트가 삭제되었습니다');
      queryClient.invalidateQueries([ReadDetailProject]);
    },
  });

  const addProjects = useMutation({
    mutationFn: () => addProjectDetail(Number(id)),
    onSuccess: () => {
      queryClient.invalidateQueries([ProjectLiked]);
    },
  });

  const addHeart = () => {
    addProjects.mutate();
  };

  const DeleteProject = () => {
    deleteProjects.mutate();
  };

  const deleteMyJJoing = () => {
    postBoardMutate.mutate();
  };

  return (
    <Layout>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <S.Contents>
          <S.ArrowContainer to='/explore'>
            <ArrowIcon />
          </S.ArrowContainer>
          <S.ProjectLayout>
            <S.ProjectInfo>
              <S.ProjectImageContainer>
                <S.ProjectImage
                  onClick={AboutThumbnail}
                  src={projectInfo?.imgUrl}
                />
              </S.ProjectImageContainer>
              <S.ProjectBasicInfo>
                <S.Top>
                  <S.ProjectName>{projectInfo?.name}</S.ProjectName>
                  {projectUsers[0]?.userId === userId && (
                    <S.TabKey onClick={toggle}>
                      <KebabIcon />
                      {isTrue && (
                        <S.DropdownContainer>
                          <S.Options>
                            <S.Option onClick={EditProject}>수정</S.Option>
                            <S.Option onClick={DeleteProject}>삭제</S.Option>
                          </S.Options>
                        </S.DropdownContainer>
                      )}
                    </S.TabKey>
                  )}
                </S.Top>
                <S.RecruitInfo>
                  <S.Deadline>
                    <S.DeadlineText>
                      <CalendarIcon />
                      모집 기한
                    </S.DeadlineText>
                    <S.DeadlineDate>
                      {projectInfo?.startDate} ~ {projectInfo?.endDate}
                    </S.DeadlineDate>
                  </S.Deadline>
                  <S.Recruiting>
                    <S.RecruitingText>
                      <MemberIcon color={theme.black} />
                      모집 인원
                    </S.RecruitingText>
                    <S.RecruitingMember>
                      {projectInfo?.currentPeople}/{projectInfo?.requiredPeople}
                    </S.RecruitingMember>
                  </S.Recruiting>
                </S.RecruitInfo>
                <S.ProjectMember>
                  <S.MemberText>
                    <MemberIcon />
                    멤버
                  </S.MemberText>
                  <S.Members>
                    {projectUsers?.map((image) => (
                      <S.MemberProfile
                        key={image.userId}
                        src={image.imgUrl}
                        alt={image.name}
                        onClick={() => goOthersPage(image.userId)}
                      />
                    ))}
                  </S.Members>
                </S.ProjectMember>
                <S.Buttons>
                  {!localStorage.getItem('accessToken') ? (
                    <S.Button color={theme.grey[600]} cursor='pointer'>
                      로그인 후 이용해주세요
                    </S.Button>
                  ) : user === projectUsers[0]?.userId ? (
                    <>
                      <S.Button color={theme.primary} onClick={seeJjoingList}>
                        신청목록 확인하기
                      </S.Button>
                      <S.Button
                        color={
                          projectInfo?.state === 'FOUND'
                            ? theme.grey[600]
                            : theme.secondary
                        }
                        onClick={() => {
                          if (projectInfo?.state !== 'FOUND') {
                            EndProject();
                          }
                        }}
                        cursor={projectInfo?.state === 'FOUND' ? 'default' : ''}
                      >
                        {projectInfo?.state === 'FOUND'
                          ? '모집이 마감되었습니다'
                          : '모집 마감하기'}
                      </S.Button>
                    </>
                  ) : (
                    <>
                      {projectInfo?.state === 'FOUND' ? (
                        <S.Button color={theme.grey[600]} cursor='default'>
                          모집이 마감되었습니다
                        </S.Button>
                      ) : (
                        <S.Button color={theme.primary} onClick={JJoingNow}>
                          지금 쪼잉하기
                        </S.Button>
                      )}
                      {isEnd === true ? (
                        <S.Button
                          color={theme.warning}
                          onClick={deleteMyJJoing}
                        >
                          마이쫑에서 삭제하기
                        </S.Button>
                      ) : (
                        <S.Button color={theme.secondary} onClick={addHeart}>
                          마이쫑에 추가하기
                        </S.Button>
                      )}
                    </>
                  )}
                </S.Buttons>
              </S.ProjectBasicInfo>
            </S.ProjectInfo>
            <S.ProjectDetail>
              <S.Description>
                <S.DescriptionText>프로젝트 설명</S.DescriptionText>
                <S.DescriptionContent>
                  {projectInfo?.content}
                </S.DescriptionContent>
              </S.Description>
              <S.Category>
                <S.CategoryContainer>
                  <S.CategoryText>개발 분위기</S.CategoryText>
                  <S.TagContainer>
                    {projectInfo?.moods.map((mood) => (
                      <Tag key={mood} value={mood} />
                    ))}
                  </S.TagContainer>
                </S.CategoryContainer>
                <S.CategoryContainer>
                  <S.CategoryText>사용 기술</S.CategoryText>
                  <S.TagContainer>
                    {projectInfo?.skills.map((skill) => (
                      <Tag key={skill} value={skill} />
                    ))}
                  </S.TagContainer>
                </S.CategoryContainer>
                <S.CategoryContainer>
                  <S.CategoryText>협업 툴</S.CategoryText>
                  <S.TagContainer>
                    {projectInfo?.coops.map((coop) => (
                      <Tag key={coop} value={coop} />
                    ))}
                  </S.TagContainer>
                </S.CategoryContainer>
              </S.Category>
            </S.ProjectDetail>
          </S.ProjectLayout>
        </S.Contents>
      )}
    </Layout>
  );
};

export default Detail;
