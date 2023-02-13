import {
  StyleSheet,
  TextInput,
  View,
  Dimensions,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import Conversation from "../components/Conversation";

const screenWidth = Dimensions.get("screen").width;

const chats = [
  {
    sender: 1,
    message: "This is the first message from me",
  },
  {
    sender: 2,
    message: "This is the first message from them",
  },
];

export default function Chat() {
  const [message, setMessage] = useState("");

  function submitHandler() {
    chats.push({ sender: 2, message: message });
    setMessage("");
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={chats}
        renderItem={({ item }) => <Conversation value={item} />}
        keyExtractor={(item, index) => index}
      />
      <View style={styles.input_field_container}>
        <View style={styles.main_control}>
          <Ionicons name="happy-outline" size={20} />
          <TextInput
            style={styles.input_field}
            placeholder="Message"
            value={message}
            onChangeText={setMessage}
            onSubmitEditing={submitHandler}
          />
          <View style={{ flexDirection: "row" }}>
            <Ionicons style={styles.icons} name="attach-outline" size={25} />
            <Ionicons style={styles.icons} name="camera-outline" size={25} />
          </View>
        </View>
        {/* <View style={styles.additional_control}>
          <Ionicons name="mic-circle-outline" size={25} color="white" />
        </View> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CCC",
    justifyContent: "flex-end",
  },
  input_field_container: {
    flexDirection: "row",
    backgroundColor: "#DDD",
    paddingHorizontal: 10,
    alignItems: "center",
  },
  main_control: {
    flexDirection: "row",
    borderColor: "#BBB",
    borderWidth: 1,
    alignItems: "center",
    borderRadius: 50,
    marginVertical: 10,
    padding: 5,
    justifyContent: "space-between",
    flexGrow: 1,
  },
  additional_control: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
    padding: 5,
    borderRadius: 50,
    marginLeft: 5,
  },
  input_field: {
    marginHorizontal: 5,
    width: 0.6 * screenWidth,
  },
  icons: {
    marginHorizontal: 3,
    alignSelf: "flex-end",
  },
});
