import * as S from './style';
import CloseIcon from 'assets/CloseIcon';
import Button from 'components/Button';

interface User {
  id: number;
  introduce: string;
  userName: string;
  position: string;
}

interface GenerateModalProps {
  closeModal: () => void;
  userData: User[];
}

const ShowJJoingPerson = ({ closeModal, userData }: GenerateModalProps) => {
  const onSubmit = async () => {
    console.log('1');
  };

  return (
    <S.ModalContainer>
      <S.TitleContainer>
        <S.Title>쪼잉 요청</S.Title>
        <CloseIcon cursor='pointer' onClick={() => closeModal()} />
      </S.TitleContainer>
      <S.Content>
        <S.ContentTitle>한줄 소개</S.ContentTitle>
        {userData[0].introduce}
      </S.Content>
      <S.Content>
        <S.ContentTitle>분야</S.ContentTitle>
        {userData[0].position}
      </S.Content>
      <Button value='신청' onClick={onSubmit} />
    </S.ModalContainer>
  );
};

export default ShowJJoingPerson;
