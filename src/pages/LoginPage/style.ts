import styled from 'styled-components'

export const Button = styled.div`
  background-color: white;
  border: none;
  color: black;
  cursor: pointer;
  width: 100px;
`
export const LoginModal= styled.div`
  height: 400px;
`
export const Logo = styled.img`
  width: 120px;
  height: 120px;
`
export const LogoPages = styled.div`
  width: 470px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`
export const GooglePage = styled.div`
  width: 470px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Page = styled.div`
  width: 85%;
  height: 50px;
  border: 2px solid silver;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`
export const LoginBtn = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 8px;
  cursor: pointer;
`
export const LoginPage = styled.img`
  padding: 50px;
`

export const Loggedin = styled.div`
  width: 400px;
  height: 50px;
  background-color: black;
`
export const LogOutButtons = styled.button`
  width: 70px;
  height: 33px;
  border-radius: 8px;
  border: 1px solid #dee2e6;
  background-color: white;
  position: absolute;
  bottom: 0;
  margin: 0 0 19px 130px;
  &:hover{
    color: #007fff;
    border: 1px solid #007fff;
    transition: all 0.2s ease-in-out;
  }
`