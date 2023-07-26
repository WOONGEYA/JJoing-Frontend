import styled from 'styled-components';
import ProfileImage from 'assets/profile.webp';

export const HeaderPadding = styled.div`
  width: 100%;
  height: 8vh;
`;

export const Container = styled.div`
  width: 1200px;
  height: 1400px;
  margin: 0 auto;
`;

export const ProfileContainer = styled.div`
  width: 100%;
  height: 240px;
  display: flex;
`;

export const ProfileBox = styled.div`
  display: flex;
  width: 840px;
  height: 240px;
`;

export const EditBox = styled.div`
  width: 360px;
  height: 240px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
  background-color: yellowgreen;
`;

export const Profile = styled.div`
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Information = styled.div`
  width: 800px;
  display: flex;
  align-items: center;
  background-color: green;
`;

export const Circle = styled.div`
  width: 185px;
  height: 170px;
  border-radius: 50%;
  background-image: url(${ProfileImage});
  background-repeat: no-repeat;
  background-size: 180px;
  background-color: skyblue;
  border: 1px solid gray;
  margin-left: 30px;
`;

export const School = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  align-items: center;
  color: gray;
`;

export const Name = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
  font-size: 20px;
`;

export const Follow = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  align-items: center;
  color: gray;
`;

export const Inf = styled.div`
  width: 100%;
  height: 60%;
`;

export const FollowDiv = styled.div`
  margin-right: 40px;
  color: black;
`;

export const SchoolDiv = styled.div`
  margin-right: 10px;
  color: gray;
`;

export const Dev = styled.div`
  margin-top: 20px;
`;

export const EditDiv = styled.div`
  width: 175px;
  height: 60%;
  margin-right: 50px;
`;

export const Edit = styled.div`
  width: 100%;
  height: 40px;
  background-color: #38b57d;
  color: white;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProfileNav = styled.div`
  margin: 0 auto;
  width: 91%;
  height: 35px;
  display: flex;
`;

export const ShowProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #38b57d;
  width: 148px;
  border-bottom: 1.5px solid #38b57d;
`;

export const ShowLine = styled.div`
  width: calc(100% - 148px);
  border-bottom: 1.5px solid #72787f;
`;

export const ProjectDiv = styled.div`
  margin: 0 auto;
  width: 1100px;
  height: 500px;
  margin-bottom: 30px;
`;

export const Together = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
`;

export const Tfont = styled.div`
  margin: 15px 0 0 22px;
  font-size: 22px;
  font-weight: 500;
`;

export const Projects = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  padding: 20px 0 20px 20px;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Project = styled.div`
  width: 328px;
  height: 360px;
  margin: 10px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 4px 1px;
  flex: 0 0 auto;
`;

export const Picture = styled.img`
  border-radius: 5px 5px 0 0;
  width: 100%;
  height: 180px;
`;

export const ProjectName = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Contents = styled.div`
  width: 100%;
  height: 95px;
`;

export const Gimg = styled.img`
  width: 22px;
  height: 22px;
  margin: 0 0 3px 5px;
  cursor: pointer;
`;

export const People = styled.div`
  width: 100%;
  height: 35px;
  border-top: 1px solid #e3e3e3;
  border-radius: 0 0 5px 5px;
  display: flex;
  align-items: center;
`;

export const Names = styled.div`
  margin-left: 20px;
  font-size: 19px;
`;

export const ConT = styled.div`
  margin: 5px 20px 0 20px;
  color: silver;
`;

export const Peo = styled.div`
  margin: 0 5px 0 20px;
`;

export const Counts = styled.span`
  font-size: 15px;
  color: #264466;
`;
