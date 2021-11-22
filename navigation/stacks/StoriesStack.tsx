import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StoriesStackParamsList } from "../../types/Stories/StoriesStack";
import { StoriesRoot } from "../../screens/Stories/StoriesRoot";
import { StoriesDetail } from "../../screens/Stories/StoriesDetail";
import { StoriesWebView } from "../../screens/Stories/StoriesWebView";

const StoriesStack = createNativeStackNavigator<StoriesStackParamsList>();

export const StoriesStackScreens = () => {
  return (
    <StoriesStack.Navigator screenOptions={{ headerTintColor: "#A11615" }}>
      <StoriesStack.Screen
        name="Root"
        component={StoriesRoot}
        options={{ headerLargeTitle: true, headerTitle: "Lobsters", headerTintColor: "#000" }}
      />
      <StoriesStack.Screen name="Detail" component={StoriesDetail} />
      <StoriesStack.Screen
        name="WebView"
        component={StoriesWebView}
        options={{ headerTitle: "", headerBackTitle: "Back", headerTitleStyle: { color: "#000" } }}
      />
    </StoriesStack.Navigator>
  );
};
