import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useState, useEffect } from 'react'
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Haptics from 'expo-haptics';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// Import from reanimated
import { useSharedValue, useAnimatedStyle } from 'react-native-reanimated';

const Home = () => {
  const [code, setcode] = useState<number[]>([]);
  const codeLength = Array(6).fill(0);
  const router = useRouter();

  const offset = useSharedValue(0);

  
  const style = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: offset.value }],
    };
  });

  useEffect(() => {
    if (code.length === 6) {
      if (code.join('') === '123456') {
        router.push('/dashboard');
        setcode([]);
      } else {
        setcode([]);
      }
    }
  }, [code]);

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
      <Text style={styles.greeting}>Karibu Tena Festus</Text>
      
      <View style={styles.codeView}>
        {codeLength.map((_, i) => (
          <View key={i} style={[styles.codeEmpty, { backgroundColor: code[i] ? 'black' : 'white' }]} />
        ))}
      </View>

      <View style={styles.numbersView}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          {[1, 2, 3].map((number) => (
            <TouchableOpacity key={number} onPress={() => onNumberPress(number)}>
              <Text style={styles.number}>{number}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.numbersView}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          {[4, 5, 6].map((number) => (
            <TouchableOpacity key={number} onPress={() => onNumberPress(number)}>
              <Text style={styles.number}>{number}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.numbersView}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          {[7, 8, 9].map((number) => (
            <TouchableOpacity key={number} onPress={() => onNumberPress(number)}>
              <Text style={styles.number}>{number}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.bottomRow}>
          <TouchableOpacity onPress={onBiometricPress} style={styles.biometricIcon}>
            <MaterialCommunityIcons name="face-recognition" size={26} color="black" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => onNumberPress(0)}>
            <Text style={styles.number}>0</Text>
          </TouchableOpacity>

          {code.length > 0 && (
            <TouchableOpacity onPress={numberBasckspace} style={styles.backspaceIcon}>
              <MaterialCommunityIcons name="backspace" size={26} color="black" />
            </TouchableOpacity>
          )}
        </View>
      </View>

      <Text style={styles.forgotPasscodeText}>Forgot your passcode?</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 80,
    alignSelf: 'center',
  },

  codeView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 50,
  },

  codeEmpty: {
    width: 25, 
    height: 25, 
    borderRadius: 12.5,
    borderWidth: 2,
    borderColor: '#ccc', 
    marginHorizontal: 5, 
  },

  numbersView: {
    marginHorizontal: 40, 
    marginVertical: 20, 
  },

  number: {
    fontSize: 32, 
    fontWeight: '600',
    textAlign: 'center',
    width: 60, 
    height: 60, 
    backgroundColor: '#f0f0f0', 
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    lineHeight: 60, 
  },

  biometricIcon: {
    padding: 10, 
  },

  backspaceIcon: {
    padding: 10,
  },

  forgotPasscodeText: {
    alignSelf: 'center',
    color: '#303BED',
    fontWeight: '500',
    fontSize: 18,
    marginTop: 30, 
  },

  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
  },
});

export default Home;
