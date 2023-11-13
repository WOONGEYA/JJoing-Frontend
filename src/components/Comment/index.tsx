import MessageIcon from 'assets/MessageIcon';
import * as S from './style';
import theme from 'styles/theme';
import { useState } from 'react';
import SubmitArrow from 'assets/SubmitArrow';
import MessageInput from 'components/MessageInput';
import { ICommentProps } from 'types/IComponentsProps';

const Comment = ({ data }: { data: ICommentProps }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.CommentContainer>
      <S.ProfileContainer>
        <S.Circle src={data.userImg} alt='img' />
      </S.ProfileContainer>
      <S.ProfileChatContainer>
        <S.ProfileChatTitle>
          <S.UserProfile>
            <S.UserView>{data.userName}</S.UserView>
            <S.DateView>{data.createTime}</S.DateView>
          </S.UserProfile>
          <S.CountView>
            <MessageIcon color={theme.grey[500]} />
            {data.reCommentCount}
          </S.CountView>
        </S.ProfileChatTitle>
        <S.CommentWrapper
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <p>{data.content}</p>
        </S.CommentWrapper>
        {isOpen && (
          <S.MessageContainer>
            <MessageInput
              width={'95%'}
              placeholder='타인의 권리를 침해하거나 명예를 훼손하는 댓글은 제재를 받을 수 있습니다.'
              type='search'
            />
            <S.ButtonContainer>
              <div style={{ marginLeft: '7px' }}>
                <SubmitArrow />
              </div>
            </S.ButtonContainer>
          </S.MessageContainer>
        )}
      </S.ProfileChatContainer>
    </S.CommentContainer>
  );
};

export default Comment;
