import React from "react";
import { View } from "react-native";
import { StackNavigator } from "./NavigationStack";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
