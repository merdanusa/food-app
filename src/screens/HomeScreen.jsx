import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>HomeScreen</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Search")}>
        <Text>Go to Search Demo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
