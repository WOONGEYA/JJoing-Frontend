import { ProfileUpdateModalProps } from 'type/IModalOpen';
import * as S from './style';
import CloseIcon from 'assets/CloseIcon';

const FollowerList = ({ closeModal }: ProfileUpdateModalProps) => {
  return (
    <S.Container>
      <S.TitleContainer>
        <S.Title>팔로우</S.Title>
        <CloseIcon cursor='pointer' onClick={() => closeModal()} />
      </S.TitleContainer>
      <S.ScrollContainer>sdf</S.ScrollContainer>
    </S.Container>
  );
};

export default FollowerList;
