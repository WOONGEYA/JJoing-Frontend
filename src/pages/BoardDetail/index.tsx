import Layout from 'components/Layout';
import * as S from './style';
import EyeIcon from 'assets/EyeIcon';
import MessageIcon from 'assets/MessageIcon';
import theme from 'styles/theme';
import MessageBox from 'components/MessageBox';

const BoardDetail = () => {
  return (
    <Layout>
      <S.FlexBox>
        <S.Container>
          <S.TextContainer>
            <S.TextBox>
              <S.Title>대충제목이라는 뜻을 지어보았습니다</S.Title>
              <S.UserInfoContainer>
                <S.ProfileInfoContainer>
                  <S.ProfileImg></S.ProfileImg>
                  <S.ProfileDetailBox>
                    <S.UserName>박우빈</S.UserName>
                    <S.BoardDate>2023.11.17 11:17</S.BoardDate>
                  </S.ProfileDetailBox>
                </S.ProfileInfoContainer>
                <S.Detail>
                  <S.ProjectDetail>
                    <S.ProfileInfo></S.ProfileInfo>
                  </S.ProjectDetail>
                  <S.DetialWrapper>
                    <S.DetailBox>
                      <EyeIcon color={theme.grey[500]} />
                      10234
                    </S.DetailBox>
                    <S.DetailBox>
                      <MessageIcon color={theme.grey[500]} />
                      fds
                    </S.DetailBox>
                  </S.DetialWrapper>
                </S.Detail>
              </S.UserInfoContainer>
            </S.TextBox>
            <S.ContentContainer>
              <S.Content>
                안녕하세요 저는 이상진입니다. 현재 부산 소프트웨어
                마이스터고등학교에 재학중이며 스탠바이랩이라는 회사에 너무 너무
                취직하고 싶습니다. 스탠바이랩 짱 항상 화이팅 안녕하세요 저는
                이상진입니다. 현재 부산 소프트웨어 마이스터고등학교에 재학중이며
                스탠바이랩이라는 회사에 너무 너무 취직하고 싶습니다. 스탠바이랩
                짱 항상 화이팅안녕하세요 저는 이상진입니다. 현재 부산 소프트웨어
                마이스터고등학교에 재학중이며 스탠바이랩이라는 회사에 너무 너무
                취직하고 싶습니다. 스탠바이랩 짱 항상 화이팅 안녕하세요 저는
                이상진입니다. 현재 부산 소프트웨어 마이스터고등학교에 재학중이며
                스탠바이랩이라는 회사에 너무 너무 취직하고 싶습니다. 스탠바이랩
                짱 항상 화이팅
              </S.Content>
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