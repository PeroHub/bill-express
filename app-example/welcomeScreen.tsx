import Home from "@/components/HomeScreen"
import RegisterScreen from "@/components/RegisterScreen"
import WelcomeScreen from "@/components/Welcome"
import { View } from "react-native"

export default function WelcomeStack() {
    return(
        <View>
            <RegisterScreen />
        </View>
    )
}