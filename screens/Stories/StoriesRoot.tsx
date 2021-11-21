import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StoriesStackParamsList } from "../../types/storiesStack";
import { StyleSheet, View, Text, Button } from "react-native";

type StoriesRootProps = NativeStackScreenProps<StoriesStackParamsList, "Root">;

export const StoriesRoot = ({ navigation }: StoriesRootProps) => {
  return (
    <View style={styles.container}>
      <Text>Stories Root</Text>
      <Button title="See details" onPress={() => navigation.navigate("Detail")} />
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
