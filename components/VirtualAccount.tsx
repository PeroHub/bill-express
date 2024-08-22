import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import * as Clipboard from "expo-clipboard";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useNavigation, useRouter } from "expo-router";

const VirtualAccount = () => {
  const navigation = useNavigation();
  const router = useRouter();
  const handleGoBack = () => {
    router.replace("/home");
  };
  const accountNumber = "8066003258";
  const handleCopyToClipboard = () => {
    Clipboard.setStringAsync(accountNumber);
    Alert.alert(
      "Copied to Clipboard",
      `Account number ${accountNumber} copied to clipboard`
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
        <Ionicons
          style={styles.backButtonText}
          name="chevron-back-circle-outline"
          size={24}
          color="black"
        />
      </TouchableOpacity>
      <Text style={styles.headerText}>Virtual Account</Text>
      <View style={styles.fundTipsContainer}>
        <Text style={styles.fundTipsText}>Fund Tips</Text>
        <Text style={styles.fundTipsDescription}>
          Transfer to any of the account number below to fund your wallet
        </Text>
      </View>
      <View style={styles.accountContainer}>
        <View style={styles.accountHeader}>
          <Text style={styles.accountHeaderText}>Virtual Account</Text>
          <Text style={styles.accountHeaderText}>Safe Haven MFB</Text>
        </View>
        <TouchableOpacity
          style={styles.accountNumberContainer}
          onPress={handleCopyToClipboard}
        >
          <Text style={styles.accountNumber}>{accountNumber}</Text>
          <Feather name="copy" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.accountHolderName}>Peter</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  backButton: {
    alignSelf: "flex-start",
    marginVertical: 30,
  },
  backButtonText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
  fundTipsContainer: {
    backgroundColor: "#007bff",
    borderRadius: 8,
    padding: 16,
    marginVertical: 10,
  },
  fundTipsText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  fundTipsDescription: {
    color: "#fff",
    fontSize: 14,
    marginTop: 4,
  },
  accountContainer: {
    backgroundColor: "#ff6600",
    borderRadius: 8,
    padding: 16,
    marginVertical: 10,
  },
  accountHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  accountHeaderText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  accountNumberContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 20,
  },
  accountNumber: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  copyText: {
    color: "#fff",
    fontSize: 24,
  },
  accountHolderName: {
    color: "#fff",
    fontSize: 16,
  },
});

export default VirtualAccount;
