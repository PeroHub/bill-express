import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Switch,
  SafeAreaView,
} from "react-native";
import { useTheme } from "../contexts/ThemeContext";

export default function ProfileComp() {
  const { theme, toggleTheme } = useTheme();
  const isDarkMode = theme === "dark";

  const styles = createStyles(isDarkMode);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Profile</Text>
        <Text style={styles.subtitle}>
          Your BillXpress profile is your personal gateway to managing your
          account information.
        </Text>
        <View style={styles.profileContainer}>
          <Image
            source={{
              uri: "https://th.bing.com/th/id/OIP.SbV0Uuvj7z0Izlwvm8m9VQHaHU?rs=1&pid=ImgDetMain",
            }}
            style={styles.profileImage}
          />
          <TouchableOpacity style={styles.uploadButton}>
            <Text style={styles.uploadButtonText}>Upload Photo</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.name}>Peter</Text>
        <Text style={styles.email}>peterime600@gmail.com</Text>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>General settings</Text>
          <TouchableOpacity style={styles.sectionItem}>
            <Text style={styles.sectionItemText}>Personal Information</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sectionItem}>
            <Text style={styles.sectionItemText}>Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sectionItem}>
            <Text style={styles.sectionItemText}>My Referral</Text>
          </TouchableOpacity>
          <View style={styles.sectionItem}>
            <Text style={styles.sectionItemText}>Dark Mode</Text>
            <Switch value={isDarkMode} onValueChange={toggleTheme} />
          </View>
          <TouchableOpacity style={styles.sectionItem}>
            <Text style={styles.sectionItemText}>Help & Support</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sectionItem}>
            <Text style={styles.sectionItemText}>Legal</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sectionItem}>
            <Text style={styles.sectionItemText}>Sign Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const createStyles = (isDarkMode: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: isDarkMode ? "#121212" : "white",
    },
    title: {
      fontSize: 17,
      fontWeight: "bold",
      marginBottom: 8,
      color: isDarkMode ? "white" : "black",
      marginTop: 20,
    },
    subtitle: {
      fontSize: 14,
      color: isDarkMode ? "gray" : "gray",
      marginBottom: 16,
    },
    profileContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 20,
    },
    profileImage: {
      width: 100,
      height: 100,
      borderRadius: 50,
      marginRight: 20,
    },
    uploadButton: {
      backgroundColor: "#fe5d16",
      borderRadius: 8,
      paddingVertical: 12,
      paddingHorizontal: 20,
    },
    uploadButtonText: {
      color: "white",
      fontSize: 14,
      fontWeight: "bold",
    },
    name: {
      fontSize: 16,
      fontWeight: "bold",
      marginBottom: 4,
      color: isDarkMode ? "white" : "black",
    },
    email: {
      fontSize: 14,
      color: "gray",
      marginBottom: 20,
    },
    sectionContainer: {
      marginTop: 20,
    },
    sectionTitle: {
      fontSize: 16,
      fontWeight: "bold",
      marginBottom: 16,
      color: isDarkMode ? "white" : "black",
    },
    sectionItem: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingVertical: 12,
      borderBottomWidth: 1,
      borderBottomColor: isDarkMode ? "gray" : "#e0e0e0",
    },
    sectionItemText: {
      fontSize: 14,
      color: isDarkMode ? "white" : "black",
    },
  });
