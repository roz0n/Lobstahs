import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StoriesStackParamsList } from "../../types/Stories/StoriesStack";
import { StoriesRoot } from "../../screens/Stories/StoriesRoot";
import { StoriesDetail } from "../../screens/Stories/StoriesDetail";
import { StoriesWebView } from "../../screens/Stories/StoriesWebView";
import { LobsterBaseRed, LobsterBlack } from "../../constants/colors";

const StoriesStack = createNativeStackNavigator<StoriesStackParamsList>();

export const StoriesStackScreens = () => {
  return (
    <StoriesStack.Navigator screenOptions={{ headerTintColor: LobsterBaseRed }}>
      <StoriesStack.Screen
        name="Root"
        component={StoriesRoot}
        options={{ headerLargeTitle: true, headerTitle: "Lobsters", headerTintColor: LobsterBlack }}
      />
      <StoriesStack.Screen name="Detail" component={StoriesDetail} />
      <StoriesStack.Screen
        name="WebView"
        component={StoriesWebView}
        options={{ headerTitle: "", headerBackTitle: "Back", headerTitleStyle: { color: LobsterBlack } }}
      />
    </StoriesStack.Navigator>
  );
};
