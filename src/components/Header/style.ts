import styled from 'styled-components';
import { font } from 'styles/font';
import theme from 'styles/theme';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 60px;
  background-color: ${theme.white};
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.2);
  position: fixed;
  z-index: 99;
`;

export const HeaderWrapper = styled.div`
  height: calc(100% - 20px);
  max-width: 1032px;
  width: calc(100% - 2rem);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  margin: auto;
`;

export const MenuList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 48px;
`;

export const MenuItem = styled.div`
  color: ${theme.black};
  ${font.$body};
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 48px;
`;

export const Login = styled.a`
  padding: 12px 16px;
  text-decoration: none;
  color: black;
  cursor: pointer;
`;

export const Profile = styled.img`
  border-radius: 50%;
  display: block;
  height: 40px;
  width: 40px;
  object-fit: cover;
  cursor: pointer;
  background-color: ${theme.grey[300]};
`;

export const Options = styled.div`
  width: 120px;
  z-index: 3;
  background-color: ${theme.white};
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  text-decoration: none;
`;

export const Option = styled.div`
  color: ${theme.black};
  padding: 8px 16px;
  cursor: pointer;
  ${font.$callout};
  transition: 0.2s ease-in-out;

  &:hover {
    background-color: ${theme.grey[200]};
  }
`;

export const DropdownContainer = styled.div`
  top: 100%;
  position: absolute;
  cursor: pointer;
`;
