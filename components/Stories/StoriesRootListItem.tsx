import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { StoriesListData } from "../../types/Stories/StoriesListData";
import { TagChip } from "../shared/TagChip";
import { LobsterWhite, LobsterLightGray, LobsterBlack } from "../../constants/colors";
import Ionicons from "@expo/vector-icons/Ionicons";

type StoriesRootListItemProps = {
  story: StoriesListData;
};

export const StoriesRootListItem = ({ story }: StoriesRootListItemProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{story.title || "Title not available"}</Text>
      <Text style={styles.author}>{`via ${story.submitter_user.username}`}</Text>
      <View style={styles.tagsContainer}>
        {story.tags.map((tag) => (
          <View style={styles.tagWrapper} key={tag}>
            <TagChip tag={tag} />
          </View>
        ))}
      </View>
      <View style={styles.metadataContainer}>
        <View style={styles.scoreContainer}>
          <Ionicons name={"arrow-up"} size={16} color={LobsterBlack} />
          <Text style={styles.scoreText}>{story.score}</Text>
        </View>
        <View style={styles.dividerContainer}>
          <Text style={styles.dividerText}>&middot;</Text>
        </View>
        <View>
          <Text style={styles.commentsText}>{story.comment_count} comments</Text>
        </View>
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
    borderBottomColor: LobsterLightGray,
    backgroundColor: LobsterWhite,
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
  metadataContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
  },
  scoreText: {
    fontSize: 12,
    fontWeight: "600",
  },
  dividerContainer: {
    marginHorizontal: 6,
  },
  scoreContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  dividerText: {
    fontSize: 16,
    fontWeight: "600",
  },
  commentsText: {
    fontSize: 12,
    fontWeight: "600",
  },
});
