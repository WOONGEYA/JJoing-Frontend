import { atom } from 'recoil';

export const accessGoogle = atom({
  key: 'accessGoogle',
  default: '',
});

export const projectImg = atom({
  key: 'googleImg',
  default: '',
});

export const userKey = atom({
  key: 'userId',
  default: 0,
});

export const selectingId = atom({
  key: 'selectedId',
  default: 0,
});

export const sortProject = atom({
  key: 'sortProject',
  default: '',
});

export const sortProject2 = atom({
  key: 'sortProject2',
  default: '',
});

export const gotoUserProfile = atom({
  key: 'userProfile',
  default: false,
});

export const gotoUserProfileId = atom({
  key: 'userProfileId',
  default: 0,
});
