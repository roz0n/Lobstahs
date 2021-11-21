import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { StoriesListData } from "../../types/Stories/StoriesListData";
import { TagChip } from "../Shared/TagChip";

type StoriesRootListItemProps = {
  story: StoriesListData;
};

export const StoriesRootListItem = ({ story }: StoriesRootListItemProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{story.title || "Title not available"}</Text>
      <Text style={styles.author}>via $author</Text>
      <View style={styles.tagsContainer}>
        {story.tags.map((tag) => (
          <View style={styles.tagWrapper}>
            <TagChip tag={tag} />
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginHorizontal: 0,
    marginVertical: 0,
    borderBottomWidth: 0.25,
    borderBottomColor: "gray",
    backgroundColor: "white",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  author: {
    fontSize: 12,
    fontWeight: "400",
    marginVertical: 4,
  },
  tagsContainer: {
    flexDirection: "row",
    marginVertical: 4,
  },
  tagWrapper: {
    marginRight: 4,
  },
});
