import CloseIcon from 'assets/CloseIcon';
import styled from 'styled-components';

interface GenerateModalProps {
  closeModal: () => void;
  pageId: number;
  imgUrl?: string;
}

const DetailModal = ({ closeModal, imgUrl }: GenerateModalProps) => {
  return (
    <Container>
      <Top>
        <div />
        <CloseIcon onClick={closeModal} />
      </Top>
      <Image src={imgUrl} />
      <div />
    </Container>
  );
};

const Container = styled.div`
  width: 800px;
  height: 600px;
  border-radius: 15px;
  background-color: white;
  padding: 28px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Image = styled.img`
  width: 100%;
  border: 15px;
`;

export default DetailModal;
