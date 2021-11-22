import React, { useEffect, useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ListRenderItemInfo } from "react-native";
import { StoriesStackParamsList } from "../../types/Stories/StoriesStack";
import { StoriesListData } from "../../types/Stories/StoriesListData";
import { StyleSheet, View, Text, FlatList, SafeAreaView } from "react-native";
import { StoriesRootListItem } from "../../components/Stories/StoriesRootListItem";
import HOTTEST_MOCK_DATA from "../../mocks/HOTTEST_MOCK_DATA.json";
import { LobstersDataService } from "../../services/LobstersDataService";

type StoriesRootProps = NativeStackScreenProps<StoriesStackParamsList, "Root">;

export const StoriesRoot = ({ navigation }: StoriesRootProps) => {
  const { getHottestStories } = new LobstersDataService();

  const [hottestStories, setHottestStories] = useState<StoriesListData[]>();
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const renderItem = ({ item }: ListRenderItemInfo<StoriesListData>) => (
    <View>
      <StoriesRootListItem story={item} />
    </View>
  );

  // TODO: This should be a hook
  useEffect(() => {
    async function loadStories() {
      try {
        setError(false);
        setLoading(true);

        const response = await getHottestStories();

        if (response.status !== 200 && response.status !== 429) {
          throw new Error();
        } else {
          const data = await response.json();

          if (data.length > 0) {
            setHottestStories(data);
          } else {
            throw new Error();
          }
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    if (!hottestStories) {
      loadStories();
    }
  }, [hottestStories]);

  return (
    <SafeAreaView style={styles.container}>
      {hottestStories && !error && (
        <FlatList data={hottestStories} renderItem={renderItem} keyExtractor={(item) => item.short_id} />
      )}
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
