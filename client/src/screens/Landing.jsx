import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useCallback, useState } from "react";
import { StatusBar } from "expo-status-bar";
import Login from "./Login";
import Register from "./Register";
import LoginAPI from "../api/Login";

export default function Landing() {
  const [loginModalVisible, setLoginModalVisible] = useState(false);
  const [registerModalVisible, setRegisterModalVisible] = useState(false);

  const handleLoginSubmit = useCallback(LoginAPI, []);

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={loginModalVisible}
        onRequestClose={() => {
          setLoginModalVisible(false);
        }}>
        <Login setVisible={setLoginModalVisible} onSubmit={handleLoginSubmit} />
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={registerModalVisible}
        onRequestClose={() => {
          setRegisterModalVisible(false);
        }}>
        <Register setVisible={setRegisterModalVisible} />
      </Modal>
      <View style={styles.btn_container}>
        <Pressable
          style={styles.btn}
          onPress={() => setLoginModalVisible(true)}
          android_ripple={{ color: "#DFF" }}>
          <Text>Login</Text>
        </Pressable>
        <Pressable
          style={styles.btn}
          onPress={() => setRegisterModalVisible(true)}
          android_ripple={{ color: "#DFF" }}>
          <Text>Register</Text>
        </Pressable>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  btn_container: {
    flexDirection: "row",
    justifyContent: "center",
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
