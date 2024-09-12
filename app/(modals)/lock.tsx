import { View, Text, StyleSheet,  TouchableOpacity } from 'react-native'
import { useState, useEffect } from 'react'
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Haptics from 'expo-haptics';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const lock = () => {

  const [code, setcode] = useState<number[]>([]);
  const codeLength = Array(6).fill(0);
  const router = useRouter();

  useEffect(() => {
    if (code.length === 6){
      // router.back();
    }
  }, [code])

  const onNumberPress = (number: number) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setcode([...code, number]);
  };

  const numberBasckspace = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setcode(code.slice(0, -1));
  };

  const onBiometricPress = () => {};

  return (
    <SafeAreaView>
      <Text>Welcome back Festus</Text>

      <View style={styles.codeView}>
        {codeLength.map((_, i) => (
          <View key={i} style={[styles.codeEmpty, {backgroundColor: code[i] ? 'black' : 'white'}]} />
        ))}
      </View>

      <View style={styles.numbersView}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        {[1, 2,  3].map((number) => (
          <TouchableOpacity key={number} onPress={() => onNumberPress(number)}>
              <Text  style={styles.number}>{number}</Text>
          </TouchableOpacity>
        ))}
      </View>
      </View>

      <View style={styles.numbersView}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        {[4, 5, 6].map((number) => (
          <TouchableOpacity key={number} onPress={() => onNumberPress(number)}>
              <Text  style={styles.number}>{number}</Text>
          </TouchableOpacity>
        
        ))}
      </View>
      </View>

      <View style={styles.numbersView}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        {[7, 8, 9].map((number) => (
          <TouchableOpacity key={number} onPress= {() => onNumberPress(number)}>
              <Text  style={styles.number}>{number}</Text>
          </TouchableOpacity>
        
        ))}
      </View>

      
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
         <TouchableOpacity onPress={onBiometricPress}>
           <MaterialCommunityIcons name="face-recognition" size={26} color="black" />
         </TouchableOpacity>

          <TouchableOpacity onPress={() => onNumberPress(0)}>
            <Text style={styles.number}>0</Text>
          </TouchableOpacity>

       <View style={{ minWidth: 30}}>
           {code.length > 0 && (
                  <TouchableOpacity onPress={numberBasckspace}>
                  <MaterialCommunityIcons name="backspace" size={26} color="black" /> 
                </TouchableOpacity>
           )}
      
       </View>
      </View>

      <Text  style={{alignSelf: 'center', color: '#303BED', fontWeight: '500', fontSize:18}}>Forgot your passcode?</Text>
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