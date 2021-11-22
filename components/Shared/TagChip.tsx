import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { LobsterBaseRed, LobsterBaseRed_15pct } from "../../constants/colors";

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
    backgroundColor: LobsterBaseRed_15pct,
    paddingVertical: 3,
    paddingHorizontal: 6,
    borderRadius: 4,
  },
  text: {
    color: LobsterBaseRed,
    fontWeight: "600",
    fontSize: 12,
  },
});
