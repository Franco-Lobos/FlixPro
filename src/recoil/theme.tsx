import { atom } from 'recoil';


export const isDarkModeAtom = atom<boolean>({
    key: 'isDarkModeAtom',
    default: false,
});
