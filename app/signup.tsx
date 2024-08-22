import RegisterScreen from "@/components/RegisterScreen";
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function signup() {
  return (
    // <View style={styles.container}>
    //   <Link href={"/home"}>
    //     <Text>Test</Text>
    //   </Link>
    // </View>
    <RegisterScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
