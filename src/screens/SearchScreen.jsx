import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, Text, View } from "react-native";

const SearchScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>SearchScreen</Text>
      <Button
        onPress={() => navigation.push("Search")}
        title="Go to Details... again"
      />
    </View>
  );
};

export default SearchScreen;
