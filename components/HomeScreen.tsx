// screens/HomeScreen.tsx

import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import { useTheme } from "@/contexts/ThemeContext";

const HomeComp = () => {
  const { theme, toggleTheme } = useTheme();
  const isDarkMode = theme === "dark";

  const styles = createStyles(isDarkMode);

  const router = useRouter();
  const handleVirtualAcct = () => {
    router.replace("/modal");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{
            uri: "https://th.bing.com/th/id/OIP.SbV0Uuvj7z0Izlwvm8m9VQHaHU?rs=1&pid=ImgDetMain",
          }}
          style={styles.avatar}
        />
        <View style={styles.headerTextContainer}>
          <Text style={styles.greetingText}>Hello, Peter 👋</Text>
          <Text style={styles.subGreetingText}>
            What bill would you like to pay for on billXpress?
          </Text>
        </View>
        <Ionicons
          name="notifications-outline"
          size={20}
          color="#000"
          style={styles.notificationIcon}
        />
      </View>

      <View style={styles.balanceCard}>
        <Text style={styles.balanceTitle}>Total Balance</Text>
        <Text style={styles.balanceAmount}>NGN 0.00</Text>

        <TouchableOpacity style={styles.fundButton} onPress={handleVirtualAcct}>
          <Text style={styles.fundButtonText}>Fund Wallet</Text>
          <MaterialIcons name="add-circle-outline" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.quickActionsContainer}>
        <TouchableOpacity style={styles.quickAction}>
          <Ionicons name="call-outline" size={30} color="#fe5d16" />
          <Text style={styles.quickActionText}>Airtime</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.quickAction}>
          <Ionicons name="wifi-outline" size={30} color="#fe5d16" />
          <Text style={styles.quickActionText}>Data</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.quickAction}>
          <Ionicons name="tv-outline" size={30} color="#fe5d16" />
          <Text style={styles.quickActionText}>CableTv</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.quickAction}>
          <Ionicons
            name="ellipsis-horizontal-outline"
            size={30}
            color="#fe5d16"
          />
          <Text style={styles.quickActionText}>More</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.recentActivityContainer}>
        <Text style={styles.recentActivityTitle}>Recent Activity</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>See all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.noActivityContainer}>
        <Image
          source={{ uri: "https://path/to/no_activity_image.png" }}
          style={styles.noActivityImage}
        />
        <Text style={styles.noActivityText}>
          Looks like there's no recent activity to show here. Get started by
          making a transaction
        </Text>
      </View>
    </SafeAreaView>
  );
};

const createStyles = (isDarkMode: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDarkMode ? "#121212" : "white",
      padding: 20,
    },
    header: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: 20,
      marginBottom: 20,
    },
    avatar: {
      width: 30,
      height: 30,
      borderRadius: 15,
      marginRight: 10,
    },
    headerTextContainer: {
      flex: 1,
      marginTop: 10,
    },
    greetingText: {
      fontSize: 17,
      fontWeight: "bold",
      color: isDarkMode ? "#fff" : "#666",
    },
    subGreetingText: {
      fontSize: 14,
      color: isDarkMode ? "#fff" : "#666",
    },
    notificationIcon: {
      marginLeft: 10,
    },
    balanceCard: {
      backgroundColor: "#fe5d16",
      padding: 20,
      borderRadius: 10,
      marginBottom: 20,
      marginTop: 20,
    },
    balanceTitle: {
      fontSize: 14,
      color: "#fff",
      marginBottom: 5,
    },
    balanceAmount: {
      fontSize: 16,
      color: "#fff",
      fontWeight: "bold",
      marginBottom: 10,
    },
    fundButton: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#ff7032",
      justifyContent: "center",
      padding: 10,
      borderRadius: 5,
    },
    fundButtonText: {
      color: "#fff",
      marginRight: 5,
    },
    quickActionsContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 20,
      marginTop: 20,
    },
    quickAction: {
      alignItems: "center",
      width: "22%",
    },
    quickActionText: {
      marginTop: 5,
      color: isDarkMode ? "#fff" : "#665",
    },
    recentActivityContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 20,
    },
    recentActivityTitle: {
      fontSize: 16,
      fontWeight: "bold",
      color: isDarkMode ? "#fff" : "#665",
    },
    seeAllText: {
      color: "#fe5d16",
    },
    noActivityContainer: {
      alignItems: "center",
    },
    noActivityImage: {
      width: 100,
      height: 100,
      marginBottom: 10,
    },
    noActivityText: {
      textAlign: "center",
      color: isDarkMode ? "#fff" : "#666",
    },
  });

export default HomeComp;
