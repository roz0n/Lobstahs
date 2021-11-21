import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ListRenderItemInfo } from "react-native";
import { StoriesStackParamsList } from "../../types/storiesStack";
import { StyleSheet, View, FlatList, SafeAreaView } from "react-native";
import { StoriesRootListItem } from "./components/StoriesRootListItem";
import LIST_MOCK_DATA from "../../mocks/LIST_MOCK_DATA.json";

type StoriesData = {
  id: string;
  title: string;
};

type StoriesRootProps = NativeStackScreenProps<StoriesStackParamsList, "Root">;

export const StoriesRoot = ({ navigation }: StoriesRootProps) => {
  const renderItem = ({ item }: ListRenderItemInfo<StoriesData>) => (
    <View>
      <StoriesRootListItem title={item.title} />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={LIST_MOCK_DATA} renderItem={renderItem} keyExtractor={(item) => item.id} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
