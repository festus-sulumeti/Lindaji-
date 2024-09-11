import { AppState } from 'react-native';
import { MMKV } from 'react-native-mmkv';
import { useRouter } from'expo-router'
import { useEffect, useRef } from 'react';

const storage = new MMKV({
    id: 'userInactivity',
  
});


const LOCK_TIME = 3000;


export const UserInactivityProvider = ( { children }: any ) => {
    const appState = useRef(AppState.currentState);
    const router = useRouter();


    useEffect(() => {
        const subscription = AppState.addEventListener('change', handleAppStateChange)
    }, []);

    const handleAppStateChange = (nextAppState: any) =>{
        console.log('appSate', appState.current, nextAppState);
        if (nextAppState === 'inactive'){
            router.push('/(modals)/white');
        } else{
            if(router.canGoBack()){
                router.back();
            }
        }

        if (nextAppState === 'background'){
            recordStartTime()
        }else if (nextAppState === 'active' && appState.current.match(/background/)){
            const elapsed = Date.now() - (storage.getNumber('startTime') || 0 );

            if(elapsed >= LOCK_TIME){
                ROUTER.PUSH('/(modals)/lock')
            }
        }

        appState.current = nextAppState;
    };

    const recordStartTime = () => {
        storage.set('startTime', Date.now())
    }

    return children;
};  