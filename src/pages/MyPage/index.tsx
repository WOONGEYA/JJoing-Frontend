import GithubIcon from 'assets/GithubIcon';
import dummy from 'fixtures/detail.dummy';
import Header from 'components/Header';
import Footer from 'components/Footer';
import useModal from 'hooks/useModal';
import ProfileUpdateModal from 'components/ProfileUpdataModal';
import * as S from './style';
import ProjectBox from 'components/ProjectBox';

const MyPage = () => {
  const { openModal, closeModal } = useModal();

  const modalOpen = () => {
    openModal({
      component: <ProfileUpdateModal closeModal={closeModal} />,
    });
  };

  return (
    <>
      <Header />
      <S.Wrapper>
        <S.ProfileWrapper>
          <S.ProfileBox>
            <S.Profile onClick={modalOpen}>
              <S.Circle />
            </S.Profile>
            <S.InformationWrapper>
              <S.InformationContainer>
                <S.CharacterName>
                  뚱이
                  <GithubIcon />
                </S.CharacterName>
                <S.SchoolName>부산소프트웨어마이스터고등학교</S.SchoolName>
                <S.FollowWrapper>
                  <S.FollowerDiv>팔로워 251</S.FollowerDiv>
                  <S.FollowDiv>팔로우 317</S.FollowDiv>
                </S.FollowWrapper>
                <S.CharacterProfileInformation>
                  프론트엔드 개발자 지망생, 18살 남자입니다.
                </S.CharacterProfileInformation>
              </S.InformationContainer>
            </S.InformationWrapper>
          </S.ProfileBox>
          <S.EditWrapper>
            <S.EditBox>
              <S.EditName onClick={modalOpen}>프로필 수정하기</S.EditName>
            </S.EditBox>
          </S.EditWrapper>
        </S.ProfileWrapper>
        <S.MyProjectWrapper>
          <S.ShowMyProject>참여중인 프로젝트</S.ShowMyProject>
          <S.ProjectNavLine />
        </S.MyProjectWrapper>
        <S.ProjectWrapper>
          <S.ShowProjects>
            {dummy
              .filter((data) => data.id <= 3)
              .map((data) => (
                <ProjectBox
                  key={data.id}
                  title={data.title}
                  description={data.description}
                  currentPeople={data.currentPeople}
                  requiredPeople={data.requiredPeople}
                />
              ))}
          </S.ShowProjects>
        </S.ProjectWrapper>
        <S.MyProjectWrapper>
          <S.ShowMyProject>참여했던 프로젝트</S.ShowMyProject>
          <S.ProjectNavLine />
        </S.MyProjectWrapper>
        <S.ProjectWrapper>
          <S.ShowProjects>
            {dummy
              .filter((data) => data.id <= 3)
              .map((data) => (
                <ProjectBox
                  key={data.id}
                  title={data.title}
                  description={data.description}
                  currentPeople={data.currentPeople}
                  requiredPeople={data.requiredPeople}
                />
              ))}
          </S.ShowProjects>
        </S.ProjectWrapper>
      </S.Wrapper>
      <Footer />
    </>
  );
};

export default MyPage;
