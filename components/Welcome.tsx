import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert, Pressable } from 'react-native';
import { Link } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {
    const navigation = useNavigation();

    const handleCreateAccount = () => {
      Alert.alert("Create account button pressed");
    };
  
    const handleSignIn = () => {
    //   navigation.navigate(''); // Assuming 'Home' is the name of your target screen
    };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={{ uri: 'https://your-logo-url.com/logo.png' }} style={styles.logo} />
        <Text style={styles.title}>Xpress</Text>
      </View>
      <Text style={styles.welcomeText}>Welcome to Xpress!</Text>
      <Text style={styles.descriptionText}>
        Join the Xpress community today and simplify your bills, subscriptions, and betting payments.
        To get started, please sign in to your account or create a new one.
      </Text>
      <TouchableOpacity style={styles.createAccountButton} onPress={handleCreateAccount}>
        <Text style={styles.createAccountButtonText}>Create account</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
        <Text style={styles.signInButtonText}>Sign In</Text>
      </TouchableOpacity>
      <Text style={styles.footerText}>
        By tapping <Text style={styles.footerLink}>Create account</Text> or <Text style={styles.footerLink}>Sign in</Text>, you agree to our Terms.
        Learn more about how we process your data in our Privacy Policy and cookies Policy.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 14,
    color: '#7A7A7A',
    textAlign: 'center',
    marginBottom: 20,
  },
  createAccountButton: {
    backgroundColor: '#FF5733',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
  },
  createAccountButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signInButton: {
    borderColor: '#FF5733',
    borderWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  signInButtonText: {
    color: '#FF5733',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footerText: {
    fontSize: 12,
    color: '#7A7A7A',
    textAlign: 'center',
  },
  footerLink: {
    color: '#FF5733',
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;
