import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TouchableOpacity
        style={{
          backgroundColor: "#fff",
          paddingVertical: 12,
          paddingHorizontal: 20,
          borderRadius: 17.5,
          alignItems: "center",
        }}
        onPress={() => navigation.navigate("Search")}
        activeOpacity={0.7}
      >
        <Text style={{ fontSize: 18, fontWeight: "600" }}>
          Go to Search Demo
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
