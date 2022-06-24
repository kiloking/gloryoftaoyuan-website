import { atom } from 'recoil';

export const modalState = atom({
  key: 'modalState',
  default: false,
});


export const imageState = atom({
  key: 'imageState',
  default: null,
});