import { StyleSheet } from "react-native";
import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Landing from "../screens/Landing";
import TabScreenManager from "./TabScreenManager";
import { LoginStatus } from "../contexts/AuthContext";
import Logout from "./Logout";
import Chat from "../screens/Chat";

const Stack = createNativeStackNavigator();

export default function StackScreenManager() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <LoginStatus.Provider value={{ setIsLogin }}>
      <Stack.Navigator>
        {isLogin ? (
          <>
            <Stack.Screen
              name="ChatTab"
              component={TabScreenManager}
              options={{
                headerTitle: "MiniChat",
                headerRight: Logout,
              }}
            />
            <Stack.Screen name="ChatScreen" component={Chat} />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Landing"
              component={Landing}
              options={{ headerShown: false }}
            />
          </>
        )}
      </Stack.Navigator>
    </LoginStatus.Provider>
  );
}

const styles = StyleSheet.create({});
