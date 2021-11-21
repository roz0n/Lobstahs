import React from "react";
import { StyleSheet, View, Text } from "react-native";

type StoriesRootListItemProps = {
  title: string;
};

export const StoriesRootListItem = ({ title }: StoriesRootListItemProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title || "Title not available"}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginHorizontal: 0,
    marginVertical: 0,
    borderBottomWidth: 0.5,
    borderBottomColor: "gray",
    backgroundColor: "white",
  },
  title: {
    fontSize: 16,
  },
});
