import { StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ChatList from "../components/ChatList";

export default function Main() {
  return (
    <SafeAreaView style={styles.container}>
      <ChatList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  btn: {
    width: 100,
    height: 50,
    backgroundColor: "#CCC",
    borderWidth: 4,
    borderColor: "#DDD",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
});
