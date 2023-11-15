import { NavigateFunction } from 'react-router-dom';

export interface IFollower {
  id: number;
  followState: boolean;
  imgUrl: string;
  major: string;
  name: string;
  school: string;
  closeModal: () => void;
  navigate: () => void;
  navigates?: NavigateFunction;
}
