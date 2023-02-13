import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useCallback, useContext } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LoginStatus } from "../contexts/AuthContext";

export default function Logout() {
  const { setIsLogin } = useContext(LoginStatus);
  const removeFromStorage = useCallback(async () => {
    await AsyncStorage.multiRemove(["access_token", "username"]);
    setIsLogin(false);
  }, []);

  return (
    <View>
      <Pressable onPress={removeFromStorage} android_ripple={{ color: "#DFF" }}>
        <Ionicons name="log-out-outline" size={32} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({});
