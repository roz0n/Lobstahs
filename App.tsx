import React from "react";
import { Tab } from "./navigation/Tab";
import { NavigationContainer } from "@react-navigation/native";
import { StoriesStackScreens } from "./navigation/Stacks/StoriesStack";
import { SettingsStackScreens } from "./navigation/Stacks/SettingsStack";

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor: "#A11615" }}>
        <Tab.Screen name="Stories" component={StoriesStackScreens} />
        <Tab.Screen name="Settings" component={SettingsStackScreens} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
