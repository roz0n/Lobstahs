import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StoriesStackParamsList } from "../../types/Stories/StoriesStack";
import { StyleSheet } from "react-native";
import { WebView, WebViewMessageEvent } from "react-native-webview";

type StoriesWebViewProps = NativeStackScreenProps<StoriesStackParamsList, "WebView">;

export const StoriesWebView = ({ route, navigation }: StoriesWebViewProps) => {
  const url = route.params?.url;

  function getTitle(message: WebViewMessageEvent) {
    const title = message.nativeEvent.title;

    if (title && title !== "") {
      console.log("Setting title", title);
      navigation.setOptions({ headerTitle: title, title });
    }
  }

  return (
    <WebView
      style={styles.container}
      source={{ uri: url }}
      startInLoadingState={true}
      injectedJavaScript="window.ReactNativeWebView.postMessage(document.title)"
      onMessage={getTitle}
    />
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
