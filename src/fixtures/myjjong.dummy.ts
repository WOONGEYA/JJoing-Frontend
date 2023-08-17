interface Project {
  id: number;
  title: string;
  deadline: string;
  description: string;
  atmosphere: string[];
  stack: string[];
  cooperation: string[];
  currentPeople: number;
  requiredPeople: number;
}

const dummy: Project[] = [
  {
    id: 1,
    title: '웹 개발 프로젝트 팀원 모집',
    deadline: '2023.09.01 ~ 2023.10.15',
    description: `
웹 개발 프로젝트에 함께할 팀원을 찾습니다!
프론트엔드 및 백엔드 개발 경험이 있는 분들을 환영합니다.
다양한 기술 스택을 활용하여 멋진 서비스를 만들어보아요!
    `,
    atmosphere: ['열정적인', '자유로운', '창의적인', '긍정적인'],
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
    cooperation: ['Slack', 'GitHub', 'Trello'],
    currentPeople: 3,
    requiredPeople: 5,
  },
  {
    id: 2,
    title: 'UX/UI 디자인 프로젝트 참여자 모집',
    deadline: '2023.09.15 ~ 2023.10.31',
    description: `
새로운 UX/UI 디자인 프로젝트에 함께할 디자이너를 찾습니다.
디자인에 열정적이고 경험이 있는 분들을 기다립니다!
사용자 경험을 향상시킬 멋진 디자인을 만들어보세요!
    `,
    atmosphere: ['열정적인', '다양한 아이디어', '창의적인', '긍정적인'],
    stack: ['Figma', 'Adobe XD', 'Sketch'],
    cooperation: ['Slack', 'Notion'],
    currentPeople: 2,
    requiredPeople: 2,
  },
  {
    id: 3,
    title: '모바일 앱 프로젝트 참여자 모집',
    deadline: '2023.08.20 ~ 2023.10.10',
    description: `
모바일 앱 개발 프로젝트에 참여할 팀원을 찾습니다.
React Native나 Flutter 경험이 있는 개발자를 환영합니다.
함께 멋진 앱을 만들어보는 경험을 해보세요!
    `,
    atmosphere: ['열정적인', '배려심 있는', '프로페셔널한', '긍정적인'],
    stack: ['React Native', 'Flutter', 'Firebase'],
    cooperation: ['Slack', 'GitHub', 'Trello'],
    currentPeople: 3,
    requiredPeople: 4,
  },
  {
    id: 4,
    title: '데이터 분석 프로젝트 팀원 모집',
    deadline: '2023.09.10 ~ 2023.11.30',
    description: `
데이터 분석 프로젝트에 함께 참여할 팀원을 찾습니다.
데이터 분석 및 머신러닝 경험이 있는 분들을 기다립니다!
다양한 데이터를 활용하여 인사이트를 도출해보세요!
    `,
    atmosphere: ['전문적인', '실용적인', '논리적인', '긍정적인'],
    stack: ['Python', 'Pandas', 'Scikit-learn', 'TensorFlow'],
    cooperation: ['Slack', 'Jupyter Notebook'],
    currentPeople: 2,
    requiredPeople: 3,
  },
  {
    id: 5,
    title: '게임 개발 프로젝트 참여자 모집',
    deadline: '2023.08.25 ~ 2023.12.15',
    description: `
게임 개발 프로젝트에 참여할 개발자와 디자이너를 모집합니다.
Unity나 Unreal Engine 경험이 있는 분들을 환영합니다.
함께 멋진 게임을 만들어보는 즐거움을 느껴보세요!
    `,
    atmosphere: ['창의적인', '팀워크 중심', '열정적인', '긍정적인'],
    stack: ['Unity', 'Unreal Engine', 'C#', '3D Modeling'],
    cooperation: ['Slack', 'GitHub', 'Trello'],
    currentPeople: 4,
    requiredPeople: 6,
  },
  {
    id: 6,
    title: '블록체인 프로젝트 참여자 모집',
    deadline: '2023.09.05 ~ 2023.11.20',
    description: `
블록체인 프로젝트에 참여할 개발자와 프론트엔드 개발자를 모집합니다.
블록체인 기술에 관심이 있는 분들을 기다립니다!
분산 원장 기술을 활용한 멋진 서비스를 개발해보세요!
    `,
    atmosphere: ['기술 중심', '협력적인', '끈기 있는', '긍정적인'],
    stack: ['Ethereum', 'Web3.js', 'Solidity', 'React'],
    cooperation: ['Slack', 'GitHub'],
    currentPeople: 2,
    requiredPeople: 3,
  },
  {
    id: 7,
    title: 'IoT 프로젝트 참여자 모집',
    deadline: '2023.09.15 ~ 2023.11.30',
    description: `
IoT 프로젝트에 참여할 개발자와 하드웨어 엔지니어를 모집합니다.
IoT 기기와 플랫폼 개발에 관심 있는 분들을 환영합니다!
스마트 기기를 만들어보는 재미를 느껴보세요!
    `,
    atmosphere: ['기술 중심', '협력적인', '실용적인', '긍정적인'],
    stack: ['Raspberry Pi', 'Arduino', 'Python', 'IoT Platform'],
    cooperation: ['Slack', 'GitHub'],
    currentPeople: 2,
    requiredPeople: 4,
  },
  {
    id: 8,
    title: '머신러닝 서비스 프로젝트 참여자 모집',
    deadline: '2023.08.30 ~ 2023.12.31',
    description: `
머신러닝 모델을 활용한 서비스 개발 프로젝트에 참여할 팀원을 찾습니다.
데이터 과학 및 머신러닝 경험이 있는 분들을 환영합니다!
데이터 기반 서비스를 함께 만들어보세요!
    `,
    atmosphere: ['전문적인', '분석 중심', '논리적인', '긍정적인'],
    stack: ['Python', 'Pandas', 'Scikit-learn', 'Flask'],
    cooperation: ['Slack', 'Jupyter Notebook'],
    currentPeople: 3,
    requiredPeople: 5,
  },
];

export default dummy;
