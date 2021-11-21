import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StoriesStackParamsList } from "../../types/storiesStack";
import { StoriesRoot } from "../../screens/Stories/StoriesRoot";
import { StoriesDetail } from "../../screens/Stories/StoriesDetail";

const StoriesStack = createNativeStackNavigator<StoriesStackParamsList>();

export const StoriesStackScreens = () => {
  return (
    <StoriesStack.Navigator>
      <StoriesStack.Screen name="Root" component={StoriesRoot} />
      <StoriesStack.Screen name="Detail" component={StoriesDetail} />
    </StoriesStack.Navigator>
  );
};
