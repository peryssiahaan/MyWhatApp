import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useCallback, useState } from "react";
import { addContact } from "../api/Contacts";

export default function NewContact({ onNewContact }) {
  const [email, setEmail] = useState("");
  const [alias, setAlias] = useState("");

  function submitHandler() {
    onNewContact({ email, alias });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add a new contact</Text>
      <TextInput
        style={styles.input_field}
        placeholder="email"
        autoCapitalize="none"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.input_field}
        placeholder="alias"
        autoCapitalize="none"
        onChangeText={setAlias}
        value={alias}
      />
      <Pressable
        style={styles.btn}
        android_ripple={{ color: "#DFF" }}
        onPress={submitHandler}>
        <Text>Submit</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
  },
  input_field: {
    borderWidth: 1,
    borderColor: "#DDD",
    width: "80%",
    marginVertical: 10,
    paddingVertical: 3,
    paddingHorizontal: 5,
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
