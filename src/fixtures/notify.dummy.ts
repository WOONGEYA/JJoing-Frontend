interface Notification {
  user: string;
  project: string;
  timestamp: string;
}

const notifications: Notification[] = [
  {
    user: '권세원',
    project: '인서트',
    timestamp: '2023.08.03',
  },
  {
    user: '한예준',
    project: '피지컬:100kg',
    timestamp: '2023.08.04',
  },
  {
    user: '차정원',
    project: '콘서트',
    timestamp: '2023.08.05',
  },
];

export default notifications;
