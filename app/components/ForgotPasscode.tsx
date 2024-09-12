import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

const ForgotPasscode = () => {
  const [newPasscode, setNewPasscode] = useState('');
  const [confirmPasscode, setConfirmPasscode] = useState('');
  const router = useRouter();

  const handlePasscodeReset = () => {
    if (newPasscode.length < 6 || confirmPasscode.length < 6) {
      Alert.alert('Error', 'Passcode must be 6 digits.');
      return;
    }

    if (newPasscode !== confirmPasscode) {
      Alert.alert('Error', 'Passcodes do not match. Please try again.');
      return;
    }

    // Logic to store the new passcode (could be an API call)
    Alert.alert('Success', 'Your passcode has been updated.');
    router.push('/'); // Redirect to the home screen
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Reset Your Passcode</Text>
      
      <TextInput
        style={styles.input}
        value={newPasscode}
        onChangeText={setNewPasscode}
        keyboardType="numeric"
        secureTextEntry
        maxLength={6}
        placeholder="Enter New Passcode"
      />
      
      <TextInput
        style={styles.input}
        value={confirmPasscode}
        onChangeText={setConfirmPasscode}
        keyboardType="numeric"
        secureTextEntry
        maxLength={6}
        placeholder="Confirm New Passcode"
      />

      <TouchableOpacity onPress={handlePasscodeReset} style={styles.button}>
        <Text style={styles.buttonText}>Reset Passcode</Text>
      </TouchableOpacity>

      {/* Go Back Link */}
      <TouchableOpacity onPress={() => router.back()} style={styles.goBack}>
        <Text style={styles.goBackText}>Remember your passcode? Go Back</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#303BED',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  goBack: {
    marginTop: 20,
    alignItems: 'center',
  },
  goBackText: {
    color: '#303BED',
    fontWeight: '500',
    fontSize: 16,
  },
});

export default ForgotPasscode;
