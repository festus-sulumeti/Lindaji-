import { AppState } from 'react-native';
import { MMKV } from 'react-native-mmkv';
import { useRouter } from'expo-router'
import { useRef } from 'react';

const storage = new MMKV({
    id: 'userInactivity',
  
});


const LOCK_TIME = 3000;


export const UserInactivityProvider = ( { children }: any ) => {
    const appState = useRef(AppState.currentState);
    const router = useRouter();
    return children;
};