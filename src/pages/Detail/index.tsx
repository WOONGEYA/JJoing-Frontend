import React, { useEffect, useState } from 'react';
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
import GenerateModalEdit from 'components/GenerateModalEdit';
import NumberIcon from 'assets/NumberIcon.svg';
import { toast } from 'react-toastify';
import ArrowIcon from 'assets/ArrowIcon';

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
  id: number;
}

interface Member {
  userId: number;
  name: string;
  imgUrl: string;
}

const Detail = () => {
  const { id } = useParams();
  const [userInfo, setUserInfo] = React.useState<UserInfo>();
  const [projectUsers, setProjectUsers] = React.useState<Member[]>([]);
  const [isEnd, setIsEnd] = useState(false);
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
      console.log('에러');
    }
  };

  const getProjectMember = async () => {
    try {
      const { data } = await instance.get(`/project/member/${id}`);
      setProjectUsers(data);
    } catch (error) {
      console.log('에러');
    }
  };

  React.useEffect(() => {
    getProject();
    getProjectMember();
  }, [id]);

  const goOthersPage = (userId: number) => {
    navigate(`/others/${userId}`);
  };

  const addHeart = () => {
    try {
      instance
        .post(`/like/${id}`, null, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        })
        .then(() => {
          setTimeout(() => {
            window.location.reload();
          }, 100);
        });
    } catch (error) {
      console.log('좋아요 가져오기 실패');
    }
  };

  const deleteHeart = () => {
    try {
      instance
        .delete(`/like/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        })
        .then(() => {
          setTimeout(() => {
            window.location.reload();
          }, 100);
        });
    } catch (error) {
      console.log('실패');
    }
  };

  useEffect(() => {
    instance
      .get(`/like/check/${id}/project`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      })
      .then((res) => {
        setIsEnd(res.data);
      });
  }, []);

  const [isTrue, setIsTrue] = useState(false);

  const toggle = () => {
    setIsTrue((prev) => !prev);
  };

  const EditProject = () => {
    openModal({
      component: (
        <GenerateModalEdit closeModal={closeModal} pageId={Number(id)} />
      ),
    });
  };

  const onDelete = async () => {
    await instance.delete(`/project/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    });
    navigate('/explore');
    toast.success('프로젝트가 삭제되었습니다');
  };

  const userId = useRecoilValue(userKey);

  console.log('userKey', userId);

  return (
    <Layout>
      <S.Contents>
        <S.ArrowContainer to='/explore'>
          <ArrowIcon />
        </S.ArrowContainer>
        <S.ProjectLayout>
          <S.ProjectInfo>
            <S.ProjectImageContainer>
              <S.ProjectImage src={userInfo?.imgUrl} />
            </S.ProjectImageContainer>
            <S.ProjectBasicInfo>
              <S.ProjectName>
                {userInfo?.name}
                {projectUsers[0]?.userId === userId && (
                  <S.SvgIcon src={NumberIcon} alt='SVG' onClick={toggle} />
                )}
                {isTrue && (
                  <S.DropdownContainer>
                    <S.Options>
                      <S.Option onClick={EditProject}>수정</S.Option>
                      <S.Option onClick={onDelete}>삭제</S.Option>
                    </S.Options>
                  </S.DropdownContainer>
                )}
              </S.ProjectName>
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
                {!localStorage.getItem('accessToken') ? (
                  <S.Button color={theme.grey[600]} cursor='default'>
                    먼저 로그인을 해 주세요.
                  </S.Button>
                ) : user === projectUsers[0]?.userId ? (
                  <>
                    <S.Button
                      color={
                        userInfo?.state === 'FOUND'
                          ? theme.grey[600]
                          : theme.secondary
                      }
                      onClick={EndProject}
                      cursor={userInfo?.state === 'FOUND' ? 'default' : ''}
                    >
                      프로젝트 마감하기
                    </S.Button>
                    <S.Button color={theme.primary} onClick={seeJjoingList}>
                      신청목록 조회하기
                    </S.Button>
                  </>
                ) : (
                  <>
                    {userInfo?.state === 'FOUND' ? (
                      <S.Button color={theme.grey[600]} cursor='default'>
                        모집이 마감되었습니다.
                      </S.Button>
                    ) : (
                      <S.Button color={theme.primary} onClick={JJoingNow}>
                        지금 쪼잉하기!
                      </S.Button>
                    )}
                    {isEnd === true ? (
                      <S.Button color={theme.warning} onClick={deleteHeart}>
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
