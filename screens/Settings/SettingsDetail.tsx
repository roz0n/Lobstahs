import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SettingsStackParamsList } from "../../types/SettingsStack";
import { StyleSheet, View, Text } from "react-native";

type SettingsDetailProps = NativeStackScreenProps<SettingsStackParamsList, "Detail">;

export const SettingsDetail = (props: SettingsDetailProps) => {
  return (
    <View style={styles.container}>
      <Text>Settings Detail</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
