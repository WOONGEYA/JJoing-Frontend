import { Dispatch, SetStateAction } from 'react';
import * as S from './style';
import { IRecomment } from 'types/IRecomment';

interface IRecommentProps {
  data: IRecomment;
  setDetailRecomments: Dispatch<SetStateAction<boolean>>;
  detailRecomments: boolean;
  isLastRecomment: boolean;
}

const Recomment = ({
  data,
  setDetailRecomments,
  detailRecomments,
  isLastRecomment,
}: IRecommentProps) => {
  const closeRecomment = () => {
    setDetailRecomments(!detailRecomments);
  };

  return (
    <>
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
      {isLastRecomment && (
        <S.CloseRecomment onClick={closeRecomment}>댓글 닫기</S.CloseRecomment>
      )}
    </>
  );
};

export default Recomment;
