import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const screenWidth = Dimensions.get("screen").width;

export default function ChatList() {
  const navigation = useNavigation();

  function pressHandler() {
    navigation.navigate("ChatScreen");
  }

  return (
    <Pressable
      style={styles.chat_container}
      android_ripple={{ color: "#DFF" }}
      onPress={pressHandler}>
      <Image
        style={styles.logos}
        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
      />
      <View style={styles.content_container}>
        <Text style={styles.text_header}>Hello</Text>
        <Text>Content</Text>
      </View>
      <View style={styles.time_container}>
        <Text style={styles.text_content}>
          {new Date().toLocaleDateString()}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  chat_container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#DDD",
    height: 100,
    width: screenWidth,
    padding: 10,
  },
  logos: {
    width: 50,
    height: 50,
    marginHorizontal: 10,
  },
  text_header: {
    fontSize: 25,
  },
  content_container: {
    flexGrow: 1,
  },
  time_container: {
    alignSelf: "flex-start",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    flexGrow: 1,
  },
  text_content: {
    padding: 10,
  },
});
