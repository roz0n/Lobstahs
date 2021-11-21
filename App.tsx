import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StoriesStackScreens } from "./navigation/stacks/StoriesStack";
import { Tab } from "./navigation/Tab";

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Stories" component={StoriesStackScreens} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
