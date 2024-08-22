// screens/OTPVerificationScreen.tsx

import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const OTPVerificationScreen = () => {
  const [otp, setOtp] = useState(['', '', '', '', '']);
  const inputs = useRef<Array<TextInput | null>>([]);

  useEffect(() => {
    // Focus the first input on mount
    if (inputs.current[0]) {
      inputs.current[0]?.focus();
    }
  }, []);

  const handleChangeText = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < 4) {
      inputs.current[index + 1]?.focus();
    }

    // Check if OTP is complete
    if (index === 4 && text) {
      handleSubmit(newOtp.join(''));
    }
  };

  const handleSubmit = (otpValue: string) => {
    Alert.alert('OTP Entered', `Entered OTP is: ${otpValue}`);
    // Here you can handle the OTP submission logic
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => { /* handle back navigation */ }}>
        <Text style={styles.backButtonText}>←</Text>
      </TouchableOpacity>
      <Text style={styles.title}>OTP verification</Text>
      <Text style={styles.subtitle}>5 digit code has been sent to your email address</Text>
      <Text style={styles.email}>peterime600@gmail.com</Text>
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.otpInput}
            keyboardType="numeric"
            maxLength={1}
            onChangeText={(text) => handleChangeText(text, index)}
            value={digit}
            ref={(ref) => (inputs.current[index] = ref)}
          />
        ))}
      </View>
      <TouchableOpacity onPress={() => { /* handle resend code */ }}>
        <Text style={styles.resendCode}>Resend code</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.continueButton} onPress={() => handleSubmit(otp.join(''))}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
  backButtonText: {
    fontSize: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  email: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#666',
    marginBottom: 20,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  otpInput: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 18,
    backgroundColor: '#fff',
  },
  resendCode: {
    color: '#666',
    marginBottom: 20,
  },
  continueButton: {
    backgroundColor: '#f9a825',
    padding: 15,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default OTPVerificationScreen;
