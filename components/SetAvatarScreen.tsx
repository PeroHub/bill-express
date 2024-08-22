// screens/SetAvatarScreen.tsx

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';

const avatars = [
  { id: 1, uri: 'https://path/to/avatar1.png' },
  { id: 2, uri: 'https://path/to/avatar2.png' },
  { id: 3, uri: 'https://path/to/avatar3.png' },
  { id: 4, uri: 'https://path/to/avatar4.png' },
  { id: 5, uri: 'https://path/to/avatar5.png' },
  { id: 6, uri: 'https://path/to/avatar6.png' },
  { id: 7, uri: 'https://path/to/avatar7.png' },
  { id: 8, uri: 'https://path/to/avatar8.png' },
  { id: 9, uri: 'https://path/to/avatar9.png' },
  { id: 10, uri: 'https://path/to/avatar10.png' },
  { id: 11, uri: 'https://path/to/avatar11.png' },
  { id: 12, uri: 'https://path/to/avatar12.png' },
];

const SetAvatarScreen = () => {
  const [selectedAvatar, setSelectedAvatar] = useState<number | null>(null);

  const handleAvatarSelect = (id: number) => {
    setSelectedAvatar(id);
    // You can also save the selected avatar to async storage or your state management solution here
  };

  const handleContinue = () => {
    if (selectedAvatar === null) {
      Alert.alert('Please select an avatar');
      return;
    }
    Alert.alert('Avatar selected', `Avatar ID: ${selectedAvatar}`);
    // Handle the avatar save logic here
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => { /* handle back navigation */ }}>
        <Text style={styles.backButtonText}>←</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Set Avatar</Text>
      <Text style={styles.subtitle}>Select an avatar for your profile to personalize your account.</Text>
      <View style={styles.avatarContainer}>
        {avatars.map((avatar) => (
          <TouchableOpacity
            key={avatar.id}
            onPress={() => handleAvatarSelect(avatar.id)}
            style={[
              styles.avatar,
              selectedAvatar === avatar.id && styles.selectedAvatar,
            ]}
          >
            <Image source={{ uri: avatar.uri }} style={styles.avatarImage} />
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { /* handle skip for now */ }}>
        <Text style={styles.skipText}>Skip for now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    paddingTop: 40,
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
    marginBottom: 20,
  },
  avatarContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    margin: 10,
    borderWidth: 2,
    borderColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  selectedAvatar: {
    borderColor: 'orange',
  },
  avatarImage: {
    width: '100%',
    height: '100%',
  },
  continueButton: {
    backgroundColor: 'orange',
    padding: 15,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
    marginBottom: 20,
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  skipText: {
    color: '#666',
  },
});

export default SetAvatarScreen;
