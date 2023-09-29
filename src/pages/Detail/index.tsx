import React from 'react';
import theme from 'styles/theme';
import { useNavigate, useParams } from 'react-router-dom';
import instance from 'apis/httpClient';
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

interface UserInfo {
  content: string;
  coops: string[];
  currentPeople: number;
  endDate: string;
  imgUrl: string;
  moods: string[];
  name: string;
  positions: string[];
  requiredPeople: number;
  skills: string[];
  startDate: string;
  state: string;
}

interface Member {
  userId: number;
  name: string;
  imgUrl: string;
}

const Detail = () => {
  const { id } = useParams();
  const [userInfo, setUserInfo] = React.useState<UserInfo | null>(null);
  const [projectUsers, setProjectUsers] = React.useState<Member[]>([]);
  const navigate = useNavigate();
  const user = useRecoilValue(userKey);

  const { openModal, closeModal } = useModal();

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

  const seeJjoingList = () => {
    navigate(`/seeMyProjectJoing/${id}`);
  };

  const getProject = async () => {
    try {
      const { data } = await instance.get(`/project/${id}`);
      setUserInfo(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getProjectMember = async () => {
    try {
      const { data } = await instance.get(`/project/member/${id}`);
      setProjectUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getProject();
    getProjectMember();
  }, [id]);

  const goOthersPage = (userId: number) => {
    navigate(`/others/${userId}`);
  };

  return (
    <Layout>
      <S.Contents>
        <S.ProjectLayout>
          <S.ProjectInfo>
            <S.ProjectImageContainer>
              <S.ProjectImage src={userInfo?.imgUrl} />
            </S.ProjectImageContainer>
            <S.ProjectBasicInfo>
              <S.ProjectName>{userInfo?.name}</S.ProjectName>
              <S.RecruitInfo>
                <S.Deadline>
                  <S.DeadlineText>
                    <CalendarIcon />
                    모집 기한
                  </S.DeadlineText>
                  <S.DeadlineDate>
                    {userInfo?.startDate} ~ {userInfo?.endDate}
                  </S.DeadlineDate>
                </S.Deadline>
                <S.Recruiting>
                  <S.RecruitingText>
                    <MemberIcon color={theme.black} />
                    모집 인원
                  </S.RecruitingText>
                  <S.RecruitingMember>
                    {userInfo?.currentPeople}/{userInfo?.requiredPeople}
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
                {user === projectUsers[0]?.userId ? (
                  <>
                    {userInfo?.state === 'FOUND' ? (
                      <S.ButtonGap></S.ButtonGap>
                    ) : (
                      <S.Button color={theme.secondary} onClick={EndProject}>
                        프로젝트 마감하기
                      </S.Button>
                    )}
                    <S.Button color={theme.primary} onClick={seeJjoingList}>
                      신청목록 조회하기
                    </S.Button>
                  </>
                ) : (
                  <>
                    <S.ButtonGap />
                    <S.Button
                      color={theme.secondary}
                      onClick={() => userInfo?.state !== 'FOUND' && JJoingNow()}
                    >
                      {userInfo?.state === 'FOUND'
                        ? '프로젝트 모집이 마감되었습니다'
                        : '지금 쪼잉하기'}
                    </S.Button>
                  </>
                )}
              </S.Buttons>
            </S.ProjectBasicInfo>
          </S.ProjectInfo>
          <S.ProjectDetail>
            <S.Description>
              <S.DescriptionText>프로젝트 설명</S.DescriptionText>
              <S.DescriptionContent>{userInfo?.content}</S.DescriptionContent>
            </S.Description>
            <S.Category>
              <S.CategoryContainer>
                <S.CategoryText>개발 분위기</S.CategoryText>
                <S.TagContainer>
                  {userInfo?.moods.map((mood) => (
                    <Tag key={mood} value={mood} />
                  ))}
                </S.TagContainer>
              </S.CategoryContainer>
              <S.CategoryContainer>
                <S.CategoryText>사용 기술</S.CategoryText>
                <S.TagContainer>
                  {userInfo?.skills.map((skill) => (
                    <Tag key={skill} value={skill} />
                  ))}
                </S.TagContainer>
              </S.CategoryContainer>
              <S.CategoryContainer>
                <S.CategoryText>협업 툴</S.CategoryText>
                <S.TagContainer>
                  {userInfo?.coops.map((coop) => (
                    <Tag key={coop} value={coop} />
                  ))}
                </S.TagContainer>
              </S.CategoryContainer>
            </S.Category>
          </S.ProjectDetail>
        </S.ProjectLayout>
      </S.Contents>
    </Layout>
  );
};

export default Detail;
