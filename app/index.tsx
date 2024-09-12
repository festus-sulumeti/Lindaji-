import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useState, useEffect } from 'react';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Haptics from 'expo-haptics';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSharedValue, useAnimatedStyle } from 'react-native-reanimated';
import * as LocalAuthentication from 'expo-local-authentication';

const Home = () => {
  const [code, setCode] = useState<number[]>([]);
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
        setCode([]);
      } else {
        setCode([]);
        Alert.alert('Incorrect Passcode', 'Please try again.');
      }
    }
  }, [code]);

  const onNumberPress = (number: number) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setCode([...code, number]);
  };

  const numberBackspace = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setCode(code.slice(0, -1));
  };

  const onBiometricPress = async () => {
    const compatible = await LocalAuthentication.hasHardwareAsync();
    const biometricRecords = await LocalAuthentication.isEnrolledAsync();

    if (!compatible || !biometricRecords) {
      Alert.alert('Biometric Authentication not available', 'Please set up Face ID or fingerprint in your phone settings.');
      return;
    }

    const result = await LocalAuthentication.authenticateAsync({
      promptMessage: 'Authenticate with Face ID or fingerprint',
      fallbackLabel: 'Use your passcode',
    });

    if (result.success) {
      Alert.alert('Authentication successful', 'Welcome back!');
      router.push('/Dashboard');
    } else {
      Alert.alert('Authentication failed', 'Please try again.');
    }
  };

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
            <MaterialCommunityIcons name="fingerprint" size={26} color="black" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => onNumberPress(0)}>
            <Text style={styles.number}>0</Text>
          </TouchableOpacity>

          {code.length > 0 && (
            <TouchableOpacity onPress={numberBackspace} style={styles.backspaceIcon}>
              <MaterialCommunityIcons name="backspace" size={26} color="black" />
            </TouchableOpacity>
          )}
        </View>
      </View>

      <Text style={styles.forgotPasscodeText} onPress={() => router.push('/ForgotPasscode')}>
            Forgot your passcode?
      </Text>
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