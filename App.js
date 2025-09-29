import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";

import HomeScreen from "./src/screens/HomeScreen";
import SearchScreen from "./src/screens/SearchScreen";

const TopTab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <TopTab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color }) => {
              let iconName;

              if (route.name === "Home") {
                iconName = focused
                  ? "ios-information-circle"
                  : "ios-information-circle-outline";
              } else if (route.name === "Search") {
                iconName = focused ? "ios-list" : "ios-list-outline";
              }

              return <Ionicons name={iconName} size={20} color={color} />;
            },
            headerShown: false,
            tabBarShowIcon: true,
            tabBarShowLabel: false,
            tabBarActiveTintColor: "#FF6B00",
            tabBarInactiveTintColor: "#A1A1AA",
            tabBarIndicatorStyle: { backgroundColor: "#FF6B00" },
            tabBarStyle: { backgroundColor: "#353535" },
          })}
        >
          <TopTab.Screen name="Home" component={HomeScreen} />
          <TopTab.Screen name="Search" component={SearchScreen} />
        </TopTab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
