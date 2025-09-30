import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const SearchBar = () => {
  return (
    <View style={styles.background}>
      <FontAwesome
        name="search"
        color="#FF6B00"
        size={20}
        style={styles.icon}
      />
      <TextInput
        style={styles.input}
        placeholder="Search"
        placeholderTextColor="#A1A1AA"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0EEEE",
    height: 50,
    marginHorizontal: 15,
    paddingHorizontal: 12,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#fff",
    borderRadius: 24,
  },
});

export default SearchBar;
