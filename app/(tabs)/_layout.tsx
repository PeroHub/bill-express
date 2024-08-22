import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function _layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#fe5d16", // Change default color to your preferred one
        tabBarStyle: {
          paddingBottom: 10, // Add more padding to the bottom
        },
        tabBarLabelStyle: {
          flexDirection: "row", // Ensure icon and label are side-by-side
          alignItems: "center",
          marginBottom: 5, // Add some margin to the label
        },
      }}
    >
      <Tabs.Screen
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color, fontSize: 12, marginLeft: 5 }}>Home</Text>
          ),
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" size={24} color={color} />
          ),
        }}
        name="home"
      />
      <Tabs.Screen
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color, fontSize: 12, marginLeft: 5 }}>Services</Text>
          ),
          tabBarIcon: ({ color }) => (
            <Ionicons name="server-outline" size={24} color={color} />
          ),
        }}
        name="services"
      />
      <Tabs.Screen
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color, fontSize: 12, marginLeft: 5 }}>Wallet</Text>
          ),
          tabBarIcon: ({ color }) => (
            <Ionicons name="wallet-outline" size={24} color={color} />
          ),
        }}
        name="wallet"
      />
      <Tabs.Screen
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color, fontSize: 12, marginLeft: 5 }}>Profile</Text>
          ),
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-outline" size={24} color={color} />
          ),
        }}
        name="profile"
      />
    </Tabs>
  );
}
