import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SettingsStackParamsList } from "../../types/Settings/SettingsStack";
import { SettingsRoot } from "../../screens/Settings/SettingsRoot";
import { SettingsDetail } from "../../screens/Settings/SettingsDetail";

const SettingsStack = createNativeStackNavigator<SettingsStackParamsList>();

export const SettingsStackScreens = () => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Root" component={SettingsRoot} />
      <SettingsStack.Screen name="Detail" component={SettingsDetail} />
    </SettingsStack.Navigator>
  );
};
