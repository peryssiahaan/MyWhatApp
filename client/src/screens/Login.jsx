import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useContext, useState } from "react";
import { LoginStatus } from "../contexts/AuthContext";

export default function Login({ setVisible, onSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setIsLogin } = useContext(LoginStatus);
  function submitHandler() {
    onSubmit({ email, password })
      .then(() => {
        setIsLogin(true);
        setVisible(false);
      })
      .catch((err) => {
        console.error(err);
        setVisible(false);
      });
  }

  return (
    <View style={styles.container}>
      <View style={styles.content_container}>
        <Text>Login</Text>
        <View style={styles.form_container}>
          <TextInput
            style={styles.input_field}
            onChangeText={setEmail}
            value={email}
            placeholder="Email"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input_field}
            onChangeText={setPassword}
            value={password}
            placeholder="Password"
            secureTextEntry={true}
            autoCapitalize="none"
          />
          <Pressable
            style={styles.btn}
            onPress={submitHandler}
            android_ripple={{ color: "#DFF" }}>
            <Text>Submit</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  content_container: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  form_container: {
    width: 200,
  },
  input_field: {
    borderWidth: 1,
    borderColor: "#CCC",
    padding: 10,
    marginVertical: 10,
  },
  btn: {
    width: 80,
    height: 40,
    backgroundColor: "#CCC",
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
  },
});
