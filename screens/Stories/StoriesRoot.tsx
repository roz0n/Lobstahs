import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ListRenderItemInfo } from "react-native";
import { StoriesStackParamsList } from "../../types/Stories/StoriesStack";
import { StoriesListData } from "../../types/Stories/StoriesListData";
import { LoadingIndicator } from "../../components/shared/LoadingIndicator";
import { StyleSheet, View, Text, FlatList, SafeAreaView, TouchableOpacity } from "react-native";
import { StoriesRootListItem } from "../../components/Stories/StoriesRootListItem";
import { useLobstersStories } from "../../hooks/useLobstersStories";
import { LobstersStoriesList } from "../../services/LobstersDataService";
import { LobsterBaseRed } from "../../constants/colors";

type StoriesRootProps = NativeStackScreenProps<StoriesStackParamsList, "Root">;

export const StoriesRoot = ({ navigation }: StoriesRootProps) => {
  const { stories, error, loading } = useLobstersStories(LobstersStoriesList.hottest);

  const renderItem = ({ item, index }: ListRenderItemInfo<StoriesListData>) => (
    <TouchableOpacity onPress={() => navigation.navigate("WebView", { url: item.url })}>
      <StoriesRootListItem story={item} index={index} />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {stories && !loading && !error && (
        <FlatList data={stories} renderItem={renderItem} keyExtractor={(item) => item.short_id} />
      )}
      {error && !loading && (
        <View>
          <Text>Error loading stories</Text>
        </View>
      )}
      {loading && <LoadingIndicator size={"small"} color={LobsterBaseRed} />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
