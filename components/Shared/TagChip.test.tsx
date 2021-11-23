import React from "react";
import { render } from "@testing-library/react-native";
import { TagChip } from "./TagChip";

describe("TagChip", () => {
  const tag = "lobsters";
  const subject = () => <TagChip tag={tag} />;

  it("renders the tag text", () => {
    const { getByText } = render(subject());
    expect(getByText(tag)).toBeTruthy();
  });
});
