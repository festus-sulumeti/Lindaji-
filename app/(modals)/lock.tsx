import { View, Text } from 'react-native'
import { useState, useEffect } from 'react'
import { useRouter } from 'expo-router';
import { SafeAreaView, View, Text, Stylesheet } from 'react-native-safe-area-context';

const lock = () => {

  const [code, setcode] = useState<number[]>([]);
  const codeLength = Array(6).fill(0);
  const router = useRouter();

  useEffect(() => {
    if (code.length === 6){
      // router.back();
    }
  }, [code])

  return (
    <SafeAreaView>
      <Text>lock</Text>
    </SafeAreaView>
  )
};

const styles = Stylesheet.create({

});

export default lock;