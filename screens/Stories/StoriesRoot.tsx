import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ListRenderItemInfo } from "react-native";
import { StoriesStackParamsList } from "../../types/Stories/StoriesStack";
import { StoriesListData } from "../../types/Stories/StoriesListData";
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
      {stories && !error && <FlatList data={stories} renderItem={renderItem} keyExtractor={(item) => item.short_id} />}
      {error && (
        <View>
          <Text>Error loading stories</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
