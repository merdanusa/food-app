import * as React from "react";
import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import SearchScreen from "./src/screens/SearchScreen";

const RootStack = createNativeStackNavigator({
  screenOptions: {
    headerStyle: { backgroundColor: "#353535" },
    headerTintColor: "#fff",
    headerTitleStyle: { color: "#fff" },
  },
  screens: {
    Home: {
      screen: HomeScreen,
      options: {
        title: "Main",
      },
    },
    Search: SearchScreen,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}
