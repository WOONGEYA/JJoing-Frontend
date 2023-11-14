export interface IFollower {
  id: number;
  imgUrl: string;
  major: string;
  name: string;
  school: string;
  closeModal: () => void;
  navigate: () => void;
}
