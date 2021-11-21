import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet, View, Text, Button } from "react-native";
import { SettingsStackParamsList } from "../../types/Settings/SettingsStack";

type SettingsRootProps = NativeStackScreenProps<SettingsStackParamsList, "Root">;

export const SettingsRoot = ({ navigation }: SettingsRootProps) => {
  return (
    <View style={styles.container}>
      <Text>Settings Root</Text>
      <Button title="See settings details" onPress={() => navigation.navigate("Detail")} />
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
