import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { View, Text } from "react-native";
import Signout from "./Signout";
import UserProfile from "./UserProfile";

const NavStack = createBottomTabNavigator();

export default function Tabhomestack({ navigation }) {
  return (
    <NavStack.Navigator screenOptions={{}}>
      <NavStack.Screen
        name="user-profile"
        component={UserProfile}
        options={{
          title: "User Profile",
          headerShown: false,
        }}
      />
      <NavStack.Screen
        name="Sign Out"
        component={Signout}
        options={{
          title: "Sign Out",
          headerShown: false,
        }}
      />
    </NavStack.Navigator>
  );
}
