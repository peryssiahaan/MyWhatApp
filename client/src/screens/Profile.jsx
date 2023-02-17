import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Profile() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.image}
          source={{
            uri: "https://genshin.honeyhunterworld.com/img/nilou_070.webp",
          }}
        />
        <Text style={styles.text_name}>Nilou</Text>
      </View>
      <Text>Profile</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  header: {
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 10,
    paddingVertical: 10,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#DDD",
    marginHorizontal: 5,
  },
  text_name: {
    marginHorizontal: 5,
    fontSize: 20,
  },
});
