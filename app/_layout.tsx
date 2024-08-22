import React from "react";
import { Stack } from "expo-router";
import { ClerkProvider } from "@clerk/clerk-expo";
import { ThemeProvider } from "../contexts/ThemeContext";
import { SessionProvider, useSession } from "./ctx/session";
import SignInScreen from "@/components/SignInScreen";
import { Text } from "react-native";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <SessionProvider>
        <AppLayout />
      </SessionProvider>
    </ThemeProvider>
  );
}

function AppLayout() {
  const { session, isLoading } = useSession();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      {session ? (
        <>
          <Stack.Screen name="(tabs)" />
          <Stack.Screen options={{ presentation: "modal" }} name="modal" />
        </>
      ) : (
        <Stack.Screen name="index" />
      )}
    </Stack>
  );
}
