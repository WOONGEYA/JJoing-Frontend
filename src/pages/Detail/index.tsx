import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MemberIcon from 'assets/MemberIcon';
import theme from 'styles/theme';
import instance from 'apis/httpClient';
import Layout from 'components/Layout';
import CalendarIcon from 'assets/CalendarIcon';
import Button from 'components/Button';
import Tag from 'components/Tag';
import * as S from './style';

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
}

const Detail = () => {
  const { id } = useParams();
  const [userInfo, setUserInfo] = useState<UserInfo | null>();

  const getProjectData = async () => {
    try {
      const { data } = await instance.get(`/project/${id}`);
      setUserInfo(data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log();

  useEffect(() => {
    getProjectData();
  }, []);

  console.log(userInfo?.moods);

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
                  <S.MemberProfile />
                  <S.MemberProfile />
                  <S.MemberProfile />
                  <S.MemberProfile />
                </S.Members>
              </S.ProjectMember>
              <S.Buttons>
                <Button
                  value='마이쫑에 추가하기'
                  background={theme.secondary}
                />
                <Button value='지금 쪼잉하기!' background={theme.primary} />
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
