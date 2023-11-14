import * as S from './style';
import { IRecomment } from 'types/IRecomment';

const Recomment = ({ data }: { data: IRecomment }) => {
  return (
    <S.CommentContainer>
      <S.ProfileContainer>
        <S.Circle src={data.userImg} alt='img' />
      </S.ProfileContainer>
      <S.ProfileChatContainer>
        <S.ProfileChatTitle>
          <S.UserProfile>
            <S.UserView>{data.userName}</S.UserView>
            <S.DateView>{data.createTime?.replace('T', ' ')}</S.DateView>
          </S.UserProfile>
        </S.ProfileChatTitle>
        <p>{data.content}</p>
        <S.CommentWrapper />
      </S.ProfileChatContainer>
    </S.CommentContainer>
  );
};

export default Recomment;
