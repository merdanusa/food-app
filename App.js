import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import HomeScreen from "./src/screens/HomeScreen";
import SearchScreen from "./src/screens/SearchScreen";
// import { SafeAreaView } from "react-native-safe-area-context";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    // <SafeAreaView style={{ flex: 1 }}>
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused
                ? "ios-information-circle"
                : "ios-information-circle-outline";
            } else if (route.name === "Search") {
              iconName = focused ? "ios-list" : "ios-list-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          headerShown: false,
          tabBarActiveTintColor: "#FF6B00",
          tabBarInactiveTintColor: "#A1A1AA",
          headerStyle: { backgroundColor: "#353535" },
          headerTintColor: "#fff",
          headerTitleStyle: { color: "#fff" },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
      </Tab.Navigator>
    </NavigationContainer>
    // </SafeAreaView>
  );
}
