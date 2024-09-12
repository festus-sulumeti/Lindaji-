import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useRouter } from 'expo-router';

const Dashboard = () => {
  const router = useRouter();

  const onLogoutPress = () => {
    Alert.alert("Logged Out", "You have been logged out successfully.");
    router.push('/');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to Your Dashboard</Text>
      
      {/* User Info Section */}
      <View style={styles.userInfo}>
        <Text style={styles.userName}>Karibu, Festus!</Text>
        <Text style={styles.userEmail}>festus@example.com</Text>
      </View>

      {/* Navigation Buttons */}
      <View style={styles.navSection}>
        <TouchableOpacity style={styles.navButton} onPress={() => router.push('/profile')}>
          <MaterialCommunityIcons name="account-circle" size={40} color="#000" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navButton} onPress={() => router.push('/settings')}>
          <MaterialCommunityIcons name="cog" size={40} color="#000" />
          <Text style={styles.navText}>Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navButton} onPress={() => router.push('/notifications')}>
          <MaterialCommunityIcons name="bell" size={40} color="#000" />
          <Text style={styles.navText}>Notifications</Text>
        </TouchableOpacity>
      </View>

      {/* Quick Actions Section */}
      <View style={styles.quickActions}>
        <TouchableOpacity style={styles.quickButton} onPress={onLogoutPress}>
          <MaterialCommunityIcons name="logout" size={30} color="#D9534F" />
          <Text style={styles.quickText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  userInfo: {
    alignItems: 'center',
    marginVertical: 20,
  },
  userName: {
    fontSize: 22,
    fontWeight: '600',
  },
  userEmail: {
    fontSize: 16,
    color: '#555',
  },
  navSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 30,
  },
  navButton: {
    alignItems: 'center',
  },
  navText: {
    marginTop: 8,
    fontSize: 16,
  },
  quickActions: {
    alignItems: 'center',
    marginVertical: 20,
  },
  quickButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quickText: {
    marginLeft: 10,
    fontSize: 18,
    color: '#D9534F',
  },
});

export default Dashboard;
