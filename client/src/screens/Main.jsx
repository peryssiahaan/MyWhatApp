import { Pressable, StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import ChatList from "../components/ChatList";
import Ionicons from "@expo/vector-icons/Ionicons";

const screenWidth = Dimensions.get("screen").width;

export default function Main() {
  return (
    <View style={styles.container}>
      <ChatList />
      <Pressable style={styles.btn} android_ripple={{ color: "#DFF" }}>
        <Ionicons name="chatbox-outline" size={20} />
        <Text style={{ letterSpacing: 2, fontSize: 15, fontWeight: "bold" }}>
          New Conversation
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  btn: {
    flexDirection: "row",
    width: screenWidth,
    minWidth: 100,
    height: 50,
    backgroundColor: "#FFF",
    borderWidth: 2,
    borderColor: "#DDD",
    justifyContent: "center",
    alignItems: "center",
  },
});
