import { MMKV } from 'react-native-mmkv';

const storage = new MMKV({
    id: 'userInactivity',
  
});


const LOCK_TIME = 3000;


export const UserInactivityProvider = ( { children }: any ) => {
    return children;
};