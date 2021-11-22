import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StoriesStackParamsList } from "../../types/Stories/StoriesStack";
import { StyleSheet, View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { LobsterWhite } from "../../constants/colors";

type StoriesDetailProps = NativeStackScreenProps<StoriesStackParamsList, "Detail">;

export const StoriesDetail = (props: StoriesDetailProps) => {
  return (
    <View style={styles.container}>
      <Text>Stories Detail</Text>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: LobsterWhite,
    alignItems: "center",
    justifyContent: "center",
  },
});
