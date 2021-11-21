import { createNativeStackNavigator } from "@react-navigation/native-stack";

type RootStackParamsList = {
  Home: undefined;
};

export const RootStack = createNativeStackNavigator<RootStackParamsList>();
