import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ListRenderItemInfo } from "react-native";
import { StoriesStackParamsList } from "../../types/Stories/StoriesStack";
import { StoriesListData } from "../../types/Stories/StoriesListData";
import { LoadingIndicator } from "../../components/shared/LoadingIndicator";
import { StyleSheet, View, Text, FlatList, SafeAreaView, TouchableOpacity } from "react-native";
import { StoriesRootListItem } from "../../components/Stories/StoriesRootListItem";
import { useLobsters } from "../../hooks/useLobstersStories";
import { LobstersStoryList } from "../../services/LobstersDataService";

type StoriesRootProps = NativeStackScreenProps<StoriesStackParamsList, "Root">;

export const StoriesRoot = ({ navigation }: StoriesRootProps) => {
  const { stories, error, loading } = useLobsters(LobstersStoryList.newest);

  const renderItem = ({ item }: ListRenderItemInfo<StoriesListData>) => (
    <TouchableOpacity onPress={() => navigation.navigate("WebView", { url: item.url })}>
      <StoriesRootListItem story={item} />
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
      {loading && <LoadingIndicator size={"small"} color={"#A11615"} />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
