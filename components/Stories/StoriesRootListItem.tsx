import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { StoriesListData } from "../../types/Stories/StoriesListData";
import { TagChip } from "../shared/TagChip";
import Ionicons from "@expo/vector-icons/Ionicons";
import { extractDomain } from "../../utils/extractDomain";
import { LobsterWhite, LobsterLightGray, LobsterBlack, LobsterBaseRed } from "../../constants/colors";

type StoriesRootListItemProps = {
  index: number;
  story: StoriesListData;
};

export const StoriesRootListItem = ({ index, story }: StoriesRootListItemProps) => {
  // A source url might be a "self" post on lobste.rs itself in which case story.url will be empty
  const sourceUrlDomain = story.url === "" ? "lobste.rs" : extractDomain(story.url);
  const storyIndexLabel = `${index + 1}. `;

  return (
    <View style={styles.container}>
      <View style={styles.sourceContainer}>
        <Text style={styles.storyIndex}>{storyIndexLabel}</Text>
        <Text style={styles.sourceText}>{sourceUrlDomain}</Text>
      </View>
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
  sourceContainer: {
    marginBottom: 6,
    flexDirection: "row",
  },
  storyIndex: {
    color: LobsterBaseRed,
    fontSize: 12,
    fontWeight: "600",
  },
  sourceText: {
    color: LobsterBaseRed,
    fontSize: 12,
    fontWeight: "600",
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
