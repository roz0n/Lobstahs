import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ListRenderItemInfo } from "react-native";
import { StoriesStackParamsList } from "../../types/Stories/StoriesStack";
import { StoriesListData } from "../../types/Stories/StoriesListData";
import { StyleSheet, View, FlatList, SafeAreaView } from "react-native";
import { StoriesRootListItem } from "../../components/Stories/StoriesRootListItem";
import HOTTEST_MOCK_DATA from "../../mocks/HOTTEST_MOCK_DATA.json";

type StoriesRootProps = NativeStackScreenProps<StoriesStackParamsList, "Root">;

export const StoriesRoot = ({ navigation }: StoriesRootProps) => {
  const renderItem = ({ item }: ListRenderItemInfo<StoriesListData>) => (
    <View>
      <StoriesRootListItem story={item} />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={HOTTEST_MOCK_DATA} renderItem={renderItem} keyExtractor={(item) => item.short_id} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
