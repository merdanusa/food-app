import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, Text, View } from "react-native";

const SearchScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>SearchScreen</Text>
      <Button onPress={() => navigation.navigate("Home")} title="Go to Home" />
    </View>
  );
};

export default SearchScreen;
