import styled from 'styled-components';
import ProfileImage from 'assets/profile.webp';

export const ModalWrapper = styled.div`
  width: 500px;
  height: 90vh;
  background-color: white;
  padding: 20px;
  border-radius: 15px;
`;

export const ModalHeader = styled.div`
  width: 100%;
  height: 5vh;
  display: flex;
  justify-content: space-between;
`;

export const ModalTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
`;

export const CloseButton = styled.div`
  cursor: pointer;
`;

export const ImgX = styled.img``;

export const ModalEditImgTitle = styled.div`
  width: 100%;
  height: 5vh;
  display: flex;
  align-items: center;
`;

export const ModalImgWrapper = styled.div`
  width: 100%;
  height: 14vh;
`;

export const ProfileImg = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-image: url(${ProfileImage});
  background-size: 100px;
  background-color: skyblue;
`;

export const EditProfile = styled.div`
  width: 100%;
  height: 100px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const EditImg = styled.img`
  cursor: pointer;
`;

export const EditIdTitle = styled.div`
  width: 100%;
  height: 5vh;
  display: flex;
  align-items: center;
`;

export const EditIdInputBox = styled.input`
  width: 100%;
  height: 30px;
`;

// export const EditInput = styled.div`
//   width: 96%;
//   border-radius: 5px;
//   height: 5vh;
//   display: flex;
//   align-items: center;
//   box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
//   color: gray;
//   padding-left: 1rem;
//   margin-bottom: 0.4rem;
// `;

export const EditInput = styled.input`
  width: 96%;
  border-radius: 5px;
  height: 5vh;
  display: flex;
  align-items: center;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  color: gray;
  padding-left: 1rem;
  margin-bottom: 0.4rem;
`;

export const EditInputMessage = styled.textarea`
  width: 96%;
  height: 8vh;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 5px;
  display: flex;
  color: gray;
  padding: 0.6rem 0 0 0.7rem;
  margin-bottom: 0.4rem;
  border: none;
  resize: none;
`;

export const ModalButtonWrapper = styled.div`
  width: 100%;
  height: 6.5vh;
  display: flex;
  align-items: end;
  justify-content: end;
`;

export const SubmitButton = styled.div`
  width: 64px;
  height: 4.5vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #38b57d;
  color: white;
  border-radius: 5px;
  cursor: pointer;
`;
