import { atom } from 'recoil';
import IModalState from 'types/IModalState.type';

const modalStore = atom<IModalState>({
  key: 'modalStore',
  default: {
    component: null,
    visible: false,
  },
});

export default modalStore;
