import React from "react";
import { Tab } from "./navigation/Tab";
import Ionicons from "@expo/vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import { StoriesStackScreens } from "./navigation/Stacks/StoriesStack";
import { SettingsStackScreens } from "./navigation/Stacks/SettingsStack";

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: "#A11615",
          tabBarIcon: ({ focused, color, size }) => {
            // Ionicons has garbage type-defs, let's ignore them
            let iconName: any;

            if (route.name === "Stories") {
              iconName = focused ? "newspaper" : "newspaper-outline";
            } else if (route.name === "Settings") {
              iconName = focused ? "hammer" : "hammer-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Stories" component={StoriesStackScreens} />
        <Tab.Screen name="Settings" component={SettingsStackScreens} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
