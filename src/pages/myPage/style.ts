import styled from 'styled-components';
import ProfileImage from 'assets/profile.webp';

export const Container = styled.div`
  width: 80vw;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 8vh;
`;

export const ProfileContainer = styled.div`
  width: 91%;
  height: 240px;
  display: flex;
`;

export const ProfileBox = styled.div`
  display: flex;
  width: 70vw;
  height: 240px;
`;

export const EditBox = styled.div`
  width: 30vw;
  height: 240px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
`;

export const Profile = styled.div`
  width: 230px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Information = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
`;

export const Circle = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background-image: url(${ProfileImage});
  background-repeat: no-repeat;
  background-size: 180px;
  background-color: skyblue;
  border: 1px solid gray;
  margin-right: 1rem;
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
  font-size: 1.25rem;
`;

export const Follow = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  align-items: center;
  padding-bottom: 0.8rem;
  color: gray;
  gap: 3rem;
`;

export const InformationContainer = styled.div`
  width: 100%;
  height: 60%;
`;

export const FollowDiv = styled.div`
  color: black;
`;

export const SchoolDiv = styled.div`
  color: gray;
`;

export const EditDiv = styled.div`
  width: 180px;
  height: 60%;
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
  width: 96%;
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
  height: 480px;
`;

export const Projects = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  padding-top: 2rem;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Project = styled.div`
  width: 310px;
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
  width: 90%;
  height: 40px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Contents = styled.div`
  width: 90%;
  margin: 0 auto;
  height: 95px;
`;

export const GithubImg = styled.img`
  width: 20px;
  height: 20px;
  padding-left: 0.4rem;
  cursor: pointer;
`;

export const People = styled.div`
  width: 100%;
  height: 35px;
  display: flex;
  align-items: center;
  border-top: 1px solid #e3e3e3;
  border-radius: 0 0 5px 5px;
`;

export const Names = styled.div`
  font-size: 20px;
`;

export const ConTentsName = styled.div`
  color: silver;
`;

export const Counts = styled.span`
  font-size: 0.9375rem;
  color: #264466;
`;

export const PeopleDiv = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  margin: 0 auto;
  gap: 0.4rem;
`;
