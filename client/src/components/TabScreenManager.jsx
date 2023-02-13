import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Main from "../screens/Main";
import Contacts from "../screens/Contacts";
import Profile from "../screens/Profile";

const Tab = createMaterialTopTabNavigator();

export default function TabScreenManager() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Main" component={Main} options={{ title: "Chats" }} />
      <Tab.Screen
        name="Contact"
        component={Contacts}
        options={{ title: "Contacts" }}
      />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
