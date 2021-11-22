import React from "react";
import { StyleSheet, View, ActivityIndicator, ActivityIndicatorProps } from "react-native";

type LoadingIndicatorProps = {
  size: ActivityIndicatorProps["size"];
  color: ActivityIndicatorProps["color"];
};

export const LoadingIndicator = ({ size, color }: LoadingIndicatorProps) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
  },
});
