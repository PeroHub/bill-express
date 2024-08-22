// src/screens/ServicesScreen.tsx
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@/contexts/ThemeContext";

interface Service {
  id: string;
  name: string;
  icon: React.ComponentProps<typeof Ionicons>["name"];
}

const services: Service[] = [
  { id: "1", name: "Airtime", icon: "call" },
  { id: "2", name: "Data", icon: "wifi" },
  { id: "3", name: "Electricity", icon: "flash" },
  { id: "4", name: "Utility Bill", icon: "globe" },

  //   { id: "6", name: "Virtual Card", icon: "card" },
  //   { id: "7", name: "Betting", icon: "football" },
  //   { id: "8", name: "Giftcard", icon: "gift" },
  //   { id: "9", name: "Gift User", icon: "people" },
  //   { id: "10", name: "Tickets", icon: "ticket" },
  //   { id: "11", name: "Book Flight", icon: "airplane" },
];

export default function ServicesComp() {
  const { theme, toggleTheme } = useTheme();
  const isDarkMode = theme === "dark";

  const styles = createStyles(isDarkMode);
  const renderItem = ({ item }: { item: Service }) => (
    <TouchableOpacity style={styles.serviceItem}>
      <Ionicons name={item.icon} size={20} color="black" />
      <Text style={styles.serviceText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Services</Text>
      <Text style={styles.subtitle}>
        Explore our range of services designed to simplify your life.
      </Text>
      <FlatList
        data={services}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={3}
        contentContainerStyle={styles.grid}
      />
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
      color: isDarkMode ? "white" : "#121212",

      marginBottom: 6,
      marginTop: 20,
    },
    subtitle: {
      fontSize: 14,
      color: isDarkMode ? "white" : "gray",
      marginBottom: 16,
    },
    grid: {
      justifyContent: "space-between",
    },
    serviceItem: {
      flex: 1,
      alignItems: "center",
      margin: 8,
      padding: 10,
      borderRadius: 8,
      backgroundColor: "#f2f2f2",
    },
    serviceText: {
      marginTop: 4,
      fontSize: 14,
      fontWeight: "600",
    },
  });
