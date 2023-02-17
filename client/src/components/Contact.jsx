import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Contact({ contact }) {
  return (
    <Pressable style={styles.container} android_ripple={{ color: "#DFF" }}>
      <Image
        style={styles.profile_pic}
        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
      />
      <Text style={styles.contact_alias}>{contact.alias}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    height: 70,
    alignSelf: "stretch",
    backgroundColor: "#DDD",
    padding: 10,
    borderWidth: 1,
    borderColor: "#CCC",
  },
  profile_pic: {
    width: 50,
    height: 50,
    marginHorizontal: 10,
  },
  contact_alias: {
    fontSize: 20,
    marginHorizontal: 10,
  },
});
