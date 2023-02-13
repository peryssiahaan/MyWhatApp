import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Conversation({ value }) {
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.text_area,
          value.sender === 1 ? styles.me : styles.notMe,
        ]}>
        <Text>{value.message}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    marginHorizontal: 15,
  },
  me: {
    alignSelf: "flex-end",
    backgroundColor: "#EEE",
  },
  notMe: {
    backgroundColor: "#AAA",
    alignSelf: "flex-start",
  },
  text_area: {
    padding: 5,
    borderRadius: 10,
  },
});
