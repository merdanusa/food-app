import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>HomeScreen</Text>
      <TouchableOpacity
        style={{
          backgroundColor: "#404040",
          paddingVertical: 12,
          paddingHorizontal: 20,
          borderRadius: 17.5,
          alignItems: "center",
        }}
        onPress={() => navigation.navigate("Search")}
        activeOpacity={0.7}
      >
        <Text style={{ color: "#fff", fontSize: 18, fontWeight: "600" }}>
          Go to Search Demo
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
