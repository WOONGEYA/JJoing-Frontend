import { NavigateFunction } from 'react-router-dom';

export interface ProfileUpdateModalProps {
  closeModal: () => void;
  id?: number;
  navigate?: NavigateFunction;
}
