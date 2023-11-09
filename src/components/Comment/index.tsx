import MessageIcon from 'assets/MessageIcon';
import * as S from './style';
import theme from 'styles/theme';

interface CommentProps {
  data: string;
}

const Comment = ({ data }: CommentProps) => {
  console.log(data);

  return (
    <S.CommentContainer>
      <S.ProfileContainer>
        <S.Circle />
      </S.ProfileContainer>
      <S.ProfileChatContainer>
        <S.ProfileChatTitle>
          <S.UserProfile>
            <S.UserView>박우빈</S.UserView>
            <S.DateView>2023.11.17 11:17</S.DateView>
          </S.UserProfile>
          <S.CountView>
            <MessageIcon color={theme.grey[500]} />
            20
          </S.CountView>
        </S.ProfileChatTitle>
        <S.CommentWrapper>{data}</S.CommentWrapper>
      </S.ProfileChatContainer>
    </S.CommentContainer>
  );
};

export default Comment;
