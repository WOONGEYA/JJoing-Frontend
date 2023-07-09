import styled from 'styled-components';

export const HeaderContainer = styled.div<{ show:boolean }>`
  width: 100vw;
  height: 8vh;
  border-bottom: 0.5px solid #C9CDD2;
  background-color: white;
  box-shadow: ${({show}) => show ? '0.5px 1.5px 1.5px 0.5px silver' : 'white'};
  position: fixed;
  transition: 0.5s ease-in-out;
`;

export const HeaderWrapper = styled.div`
  width: 80vw;
  height: 8vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

export const LogoContainer = styled.div`
  width: 50px;
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MenuList = styled.div`
  width: 100vw;
  height: 8vh;
  display: flex;
  align-items: center;
`;

export const MenuItem1 = styled.span`
  margin: 0 15px 0 60px;
  cursor: pointer;
`;
export const MenuItem = styled.span`
  margin: 0 15px;
  cursor: pointer;
`;

export const ProfileContainer = styled.div`
  width: 80px;
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AlarmContainer = styled.div`
  width: 90px;
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Image = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`
export const ImageLogo = styled.img`
  width: 80px;
  height: 60px;
  cursor: pointer;
`
export const Href = styled.a`
  text-decoration: none;
  color: black;
  cursor: pointer;
  &:active{
    color: gray;
  }
`