import styled from 'styled-components';
import ProfileImage from 'assets/profile.webp';

export const HeaderPadding = styled.div`
  width: 100%;
  height: 8vh;
`;

export const Container = styled.div`
  width: 1200px;
  height: 1235px;
  overflow: hidden;
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
  cursor: pointer;
`;

export const Profile = styled.div`
  width: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Information = styled.div`
  width: 700px;
  display: flex;
  align-items: center;
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
`;

export const SchoolDiv = styled.div`
  margin-right: 10px;
`;

export const Dev = styled.div`
  margin-left: 10px;
`;

export const EditDiv = styled.div`
  width: 175px;
  height: 60%;
  margin-left: 50px;
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
  height: 960px;
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
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
`;

export const Project = styled.div`
  width: 255px;
  height: 270px;
  margin: 10px;
  border-radius: 10px;
`;

export const Picture = styled.img`
  border-radius: 10px;
  width: 100%;
  height: 160px;
`;

export const ProjectName = styled.div`
  width: 100%;
  height: 40px;
  font-size: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Contents = styled.div`
  width: 100%;
  height: 60px;
  color: gray;
`;
