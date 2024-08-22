// src/screens/WalletScreen.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useTheme } from "@/contexts/ThemeContext";

export default function WalletComp() {
  const router = useRouter();
  const handleFundWalletModal = () => {
    router.replace("/modal");
  };
  const [isBalanceVisible, setIsBalanceVisible] = useState(true);

  const toggleBalanceVisibility = () => {
    setIsBalanceVisible(!isBalanceVisible);
  };

  const { theme, toggleTheme } = useTheme();
  const isDarkMode = theme === "dark";

  const styles = createStyles(isDarkMode);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Wallet</Text>
      <Text style={styles.subtitle}>
        Your central hub for managing your funds, and track your wallet history.
      </Text>
      <ImageBackground
        style={styles.imgBackground}
        source={require("../assets/images/yellow-bg.jpeg")}
      >
        <View style={styles.balanceContainer}>
          <Text style={styles.balanceTitle}>Wallet Balance</Text>
          <Text style={styles.balance}>
            {isBalanceVisible ? "NGN 0.00" : "****"}
          </Text>
          <View>
            {isBalanceVisible ? (
              <TouchableOpacity onPress={toggleBalanceVisibility}>
                <Feather name="eye" size={24} color="black" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={toggleBalanceVisibility}>
                <Feather name="eye-off" size={24} color="black" />
              </TouchableOpacity>
            )}
          </View>
        </View>
        {/* <TouchableOpacity onPress={toggleBalanceVisibility}>
          <Image
            source={{
              uri: isBalanceVisible
                ? "https://img.icons8.com/ios/50/000000/visible--v1.png"
                : "https://img.icons8.com/ios/50/000000/invisible.png",
            }}
            style={styles.icon}
          />
        </TouchableOpacity> */}
      </ImageBackground>
      <TouchableOpacity
        style={styles.fundButton}
        onPress={handleFundWalletModal}
      >
        <Text style={styles.fundButtonText}>Fund Wallet</Text>
      </TouchableOpacity>
      <View style={styles.transactionsHeader}>
        <Text style={styles.transactionsTitle}>Wallet Transactions</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>See all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.noTransactionsContainer}>
        <Image
          source={{ uri: "https://img.icons8.com/ios/50/000000/no-camera.png" }}
          style={styles.noTransactionsImage}
        />
        <Text style={styles.noTransactionsText}>
          Looks like there's no recent activity to show here.
        </Text>
        <Text style={styles.noTransactionsText}>
          Get started by making a transaction
        </Text>
      </View>
    </View>
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
      marginBottom: 6,
      marginTop: 20,
      color: isDarkMode ? "white" : "#121212",
    },
    subtitle: {
      fontSize: 14,
      marginBottom: 16,
      color: isDarkMode ? "white" : "gray",
    },
    balanceContainer: {
      // backgroundColor: "#fe5d16",
      borderRadius: 16,
      padding: 20,
      alignItems: "center",
      // marginBottom: 20,
    },
    balanceTitle: {
      fontSize: 16,
      color: "white",
      marginBottom: 8,
    },
    balance: {
      fontSize: 24,
      fontWeight: "bold",
      color: "white",
      marginBottom: 8,
    },
    icon: {
      width: 24,
      height: 24,
    },
    fundButton: {
      backgroundColor: "#fe5d16",
      borderRadius: 8,
      paddingVertical: 12,
      alignItems: "center",
      marginBottom: 20,
      marginTop: 20,
    },
    fundButtonText: {
      color: "white",
      fontSize: 14,
      fontWeight: "bold",
    },
    transactionsHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 16,
      marginTop: 20,
    },
    transactionsTitle: {
      fontSize: 16,
      fontWeight: "bold",
      color: isDarkMode ? "white" : "#121212",
    },
    seeAllText: {
      color: "#fe5d16",
    },
    noTransactionsContainer: {
      alignItems: "center",
      marginTop: 20,
    },
    noTransactionsImage: {
      width: 30,
      height: 30,
      marginBottom: 16,
    },
    noTransactionsText: {
      fontSize: 14,
      color: isDarkMode ? "white" : "gray",

      textAlign: "center",
    },
    imgBackground: {
      borderRadius: 16,
    },
  });
