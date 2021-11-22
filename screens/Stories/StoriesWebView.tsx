import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StoriesStackParamsList } from "../../types/Stories/StoriesStack";
import { StyleSheet } from "react-native";
import { WebView, WebViewMessageEvent } from "react-native-webview";
import { LoadingIndicator } from "../../components/shared/LoadingIndicator";
import { LobsterWhite } from "../../constants/colors";

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
      renderLoading={() => <LoadingIndicator size={"small"} color={"#A11615"} />}
      injectedJavaScript="window.ReactNativeWebView.postMessage(document.title)"
      onMessage={getTitle}
    />
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
