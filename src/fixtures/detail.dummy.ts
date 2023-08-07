import member01 from 'assets/Detail/member01.png';
import member02 from 'assets/Detail/member02.jpeg';
import member03 from 'assets/Detail/member03.jpeg';

interface Project {
  id: number;
  title: string;
  deadline: string;
  description: string;
  memberImage: string[];
  atmosphere: string[];
  stack: string[];
  cooperation: string[];
  currentPeople: number;
  requiredPeople: number;
}

const dummy: Project[] = [
  {
    id: 1,
    title: '앱잼 웅서트 프로젝트 팀원 모집',
    deadline: '2023.06.22 ~ 2023.08.11',
    description: `
2023년도 앱잼에 웅서트라는 팀 이름으로 같이 대회를 나가실 분들을 모집하고 있습니다!
남녀 무관하고, 웬만하면 웹 서비스 쪽으로 개발 경험이 있으신 분들을 대환영합니다!
대회를 나가실 분들을 모집하고 있습니다! 대회를 나가실 분들을 모집하고 있습니다!
대회를 나가실 분들을 모집하고 있습니다!`,
    memberImage: [member01, member02, member03],
    atmosphere: ['친근한', '다정하게', '유쾌한', '뭐든 괜찮아요'],
    stack: ['React', 'TypeScript', 'C++', 'Spring Boot', 'Spring Security', 'Jenkins'],
    cooperation: ['Slack', 'Github', 'Figma', 'ZIRA'],
    currentPeople: 3,
    requiredPeople: 5,
  },
  {
    id: 2,
    title: '앱잼 웅서트 프로젝트 팀원 모집',
    deadline: '2023.06.22 ~ 2023.08.11',
    description: `
2023년도 앱잼에 웅서트라는 팀 이름으로 같이 대회를 나가실 분들을 모집하고 있습니다!
남녀 무관하고, 웬만하면 웹 서비스 쪽으로 개발 경험이 있으신 분들을 대환영합니다!
대회를 나가실 분들을 모집하고 있습니다! 대회를 나가실 분들을 모집하고 있습니다!
대회를 나가실 분들을 모집하고 있습니다!`,
    memberImage: [member01, member02, member03],
    atmosphere: ['친근한', '다정하게', '유쾌한', '뭐든 괜찮아요'],
    stack: ['React', 'TypeScript', 'C++', 'Spring Boot', 'Spring Security', 'Jenkins'],
    cooperation: ['Slack', 'Github', 'Figma', 'ZIRA'],
    currentPeople: 3,
    requiredPeople: 5,
  },
  {
    id: 3,
    title: '앱잼 웅서트 프로젝트 팀원 모집',
    deadline: '2023.06.22 ~ 2023.08.11',
    description: `
2023년도 앱잼에 웅서트라는 팀 이름으로 같이 대회를 나가실 분들을 모집하고 있습니다!
남녀 무관하고, 웬만하면 웹 서비스 쪽으로 개발 경험이 있으신 분들을 대환영합니다!
대회를 나가실 분들을 모집하고 있습니다! 대회를 나가실 분들을 모집하고 있습니다!
대회를 나가실 분들을 모집하고 있습니다!`,
    memberImage: [member01, member02, member03],
    atmosphere: ['친근한', '다정하게', '유쾌한', '뭐든 괜찮아요'],
    stack: ['React', 'TypeScript', 'C++', 'Spring Boot', 'Spring Security', 'Jenkins'],
    cooperation: ['Slack', 'Github', 'Figma', 'ZIRA'],
    currentPeople: 3,
    requiredPeople: 5,
  },
  {
    id: 4,
    title: '앱잼 웅서트 프로젝트 팀원 모집',
    deadline: '2023.06.22 ~ 2023.08.11',
    description: `
2023년도 앱잼에 웅서트라는 팀 이름으로 같이 대회를 나가실 분들을 모집하고 있습니다!
남녀 무관하고, 웬만하면 웹 서비스 쪽으로 개발 경험이 있으신 분들을 대환영합니다!
대회를 나가실 분들을 모집하고 있습니다! 대회를 나가실 분들을 모집하고 있습니다!
대회를 나가실 분들을 모집하고 있습니다!`,
    memberImage: [member01, member02, member03],
    atmosphere: ['친근한', '다정하게', '유쾌한', '뭐든 괜찮아요'],
    stack: ['React', 'TypeScript', 'C++', 'Spring Boot', 'Spring Security', 'Jenkins'],
    cooperation: ['Slack', 'Github', 'Figma', 'ZIRA'],
    currentPeople: 3,
    requiredPeople: 5,
  },
  {
    id: 5,
    title: '앱잼 웅서트 프로젝트 팀원 모집',
    deadline: '2023.06.22 ~ 2023.08.11',
    description: `
2023년도 앱잼에 웅서트라는 팀 이름으로 같이 대회를 나가실 분들을 모집하고 있습니다!
남녀 무관하고, 웬만하면 웹 서비스 쪽으로 개발 경험이 있으신 분들을 대환영합니다!
대회를 나가실 분들을 모집하고 있습니다! 대회를 나가실 분들을 모집하고 있습니다!
대회를 나가실 분들을 모집하고 있습니다!`,
    memberImage: [member01, member02, member03],
    atmosphere: ['친근한', '다정하게', '유쾌한', '뭐든 괜찮아요'],
    stack: ['React', 'TypeScript', 'C++', 'Spring Boot', 'Spring Security', 'Jenkins'],
    cooperation: ['Slack', 'Github', 'Figma', 'ZIRA'],
    currentPeople: 3,
    requiredPeople: 5,
  },
  {
    id: 6,
    title: '앱잼 웅서트 프로젝트 팀원 모집',
    deadline: '2023.06.22 ~ 2023.08.11',
    description: `
2023년도 앱잼에 웅서트라는 팀 이름으로 같이 대회를 나가실 분들을 모집하고 있습니다!
남녀 무관하고, 웬만하면 웹 서비스 쪽으로 개발 경험이 있으신 분들을 대환영합니다!
대회를 나가실 분들을 모집하고 있습니다! 대회를 나가실 분들을 모집하고 있습니다!
대회를 나가실 분들을 모집하고 있습니다!`,
    memberImage: [member01, member02, member03],
    atmosphere: ['친근한', '다정하게', '유쾌한', '뭐든 괜찮아요'],
    stack: ['React', 'TypeScript', 'C++', 'Spring Boot', 'Spring Security', 'Jenkins'],
    cooperation: ['Slack', 'Github', 'Figma', 'ZIRA'],
    currentPeople: 3,
    requiredPeople: 5,
  },
  {
    id: 7,
    title: '앱잼 웅서트 프로젝트 팀원 모집',
    deadline: '2023.06.22 ~ 2023.08.11',
    description: `
2023년도 앱잼에 웅서트라는 팀 이름으로 같이 대회를 나가실 분들을 모집하고 있습니다!
남녀 무관하고, 웬만하면 웹 서비스 쪽으로 개발 경험이 있으신 분들을 대환영합니다!
대회를 나가실 분들을 모집하고 있습니다! 대회를 나가실 분들을 모집하고 있습니다!
대회를 나가실 분들을 모집하고 있습니다!`,
    memberImage: [member01, member02, member03],
    atmosphere: ['친근한', '다정하게', '유쾌한', '뭐든 괜찮아요'],
    stack: ['React', 'TypeScript', 'C++', 'Spring Boot', 'Spring Security', 'Jenkins'],
    cooperation: ['Slack', 'Github', 'Figma', 'ZIRA'],
    currentPeople: 3,
    requiredPeople: 5,
  },
  {
    id: 8,
    title: '앱잼 웅서트 프로젝트 팀원 모집',
    deadline: '2023.06.22 ~ 2023.08.11',
    description: `
2023년도 앱잼에 웅서트라는 팀 이름으로 같이 대회를 나가실 분들을 모집하고 있습니다!
남녀 무관하고, 웬만하면 웹 서비스 쪽으로 개발 경험이 있으신 분들을 대환영합니다!
대회를 나가실 분들을 모집하고 있습니다! 대회를 나가실 분들을 모집하고 있습니다!
대회를 나가실 분들을 모집하고 있습니다!`,
    memberImage: [member01, member02, member03],
    atmosphere: ['친근한', '다정하게', '유쾌한', '뭐든 괜찮아요'],
    stack: ['React', 'TypeScript', 'C++', 'Spring Boot', 'Spring Security', 'Jenkins'],
    cooperation: ['Slack', 'Github', 'Figma', 'ZIRA'],
    currentPeople: 3,
    requiredPeople: 5,
  },
  {
    id: 9,
    title: '앱잼 웅서트 프로젝트 팀원 모집',
    deadline: '2023.06.22 ~ 2023.08.11',
    description: `
2023년도 앱잼에 웅서트라는 팀 이름으로 같이 대회를 나가실 분들을 모집하고 있습니다!
남녀 무관하고, 웬만하면 웹 서비스 쪽으로 개발 경험이 있으신 분들을 대환영합니다!
대회를 나가실 분들을 모집하고 있습니다! 대회를 나가실 분들을 모집하고 있습니다!
대회를 나가실 분들을 모집하고 있습니다!`,
    memberImage: [member01, member02, member03],
    atmosphere: ['친근한', '다정하게', '유쾌한', '뭐든 괜찮아요'],
    stack: ['React', 'TypeScript', 'C++', 'Spring Boot', 'Spring Security', 'Jenkins'],
    cooperation: ['Slack', 'Github', 'Figma', 'ZIRA'],
    currentPeople: 3,
    requiredPeople: 5,
  },
  {
    id: 10,
    title: '앱잼 웅서트 프로젝트 팀원 모집',
    deadline: '2023.06.22 ~ 2023.08.11',
    description: `
2023년도 앱잼에 웅서트라는 팀 이름으로 같이 대회를 나가실 분들을 모집하고 있습니다!
남녀 무관하고, 웬만하면 웹 서비스 쪽으로 개발 경험이 있으신 분들을 대환영합니다!
대회를 나가실 분들을 모집하고 있습니다! 대회를 나가실 분들을 모집하고 있습니다!
대회를 나가실 분들을 모집하고 있습니다!`,
    memberImage: [member01, member02, member03],
    atmosphere: ['친근한', '다정하게', '유쾌한', '뭐든 괜찮아요'],
    stack: ['React', 'TypeScript', 'C++', 'Spring Boot', 'Spring Security', 'Jenkins'],
    cooperation: ['Slack', 'Github', 'Figma', 'ZIRA'],
    currentPeople: 3,
    requiredPeople: 5,
  },
];

export default dummy;
