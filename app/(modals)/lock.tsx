import { View, Text, StyleSheet } from 'react-native'
import { useState, useEffect } from 'react'
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

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
      <Text>Welcome back Festus</Text>

      <View style={styles.codeView}>
        {codeLength.map((_, i) => (
          <View key={i} style={[styles.codeEmpty, {backgroundColor: code[i] ? 'black' : 'white'}]} />
        ))}
      </View>

      <View style={styles.numbersView}>
        <View style={{flexDirection: 'row'}}>
        {[1,2,3].map((number) => (
          <Text key={number} style={styles.number} onPress={() => setcode([...code, number])}>{number}</Text>
        ))}
      </View>
    </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop:80,
    alignSelf: 'center'
  }, 

  codeView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap:20,
    marginVertical: 100
  },

  codeEmpty: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },

  numbersView: {
    marginHorizontal: 80,
    gap: 60,
  },
  
  number: {
    fontSize: 32,
  }

});

export default lock;