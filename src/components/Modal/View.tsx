import IModalState from 'types/IModalState.type';
import * as S from './style';

interface ModalViewProps extends IModalState {
  onClose?: () => void;
}

const ModalView = ({ component, visible, onClose }: ModalViewProps) => {
  return (
    <S.ModalContainer>
      <S.ModalBackground hidden={!visible} onClick={onClose} />
      <S.ModalBox>{component}</S.ModalBox>
    </S.ModalContainer>
  );
};

export default ModalView;
