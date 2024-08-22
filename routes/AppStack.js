import React from 'react';
import { View, Text } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

// import { CustomDrawer } from '../components/custom/drawer/CustomDrawer';
import { HomeScreen } from '../components/HomeScreen';

//Icons
import { FontAwesome } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator()

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="home" 
        component={AI}
        options={({navigation}) => ({
          headerRight: () => (
            <View style={{padding: 15, marginTop: 10}}>
                <FontAwesome 
                  name="bars" 
                  size={24} 
                  color="#48A2E9" 
                  onPress={() => {
                    navigation.toggleDrawer();
                  }}
                />
            </View>
          ),
          headerLeft: () => (
            <View style={{padding: 15}}>
              <Text style={{
                fontSize: 30,
                fontWeight: 450,
                color: "#48A2E9"
              }}>
                Ifiok AI
              </Text>
            </View>
          ),
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
            height: 100
          },
          title: ""
        })}
        // navigationO
      />
    </Stack.Navigator>
  );
};

// Drawer Navigator combining the main stack and additional screens
export const AppStack = () => {
    return (
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawer {...props} />}
        screenOptions={{
          headerShown: false
        }}
      >
        <Drawer.Screen name="Main" component={HomeScreen} />
        {/* <Drawer.Screen name="ai" component={AI} /> */}
      </Drawer.Navigator>
    );
  };
