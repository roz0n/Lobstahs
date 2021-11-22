import React from "react";
import { StyleSheet, View, Text } from "react-native";

type TagChipProps = {
  tag: string;
};

export const TagChip = ({ tag }: TagChipProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{tag}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#A1161526",
    paddingVertical: 3,
    paddingHorizontal: 6,
    borderRadius: 4,
  },
  text: {
    color: "#A11615",
    fontWeight: "600",
    fontSize: 12,
  },
});
