import React from "react";
import { Tab } from "./navigation/Tab";
import { NavigationContainer } from "@react-navigation/native";
import { StoriesStackScreens } from "./navigation/stacks/StoriesStack";
import { SettingsStackScreens } from "./navigation/stacks/SettingsStack";

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Stories" component={StoriesStackScreens} />
        <Tab.Screen name="Settings" component={SettingsStackScreens} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
