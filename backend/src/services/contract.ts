import ic from "ic0";
import { CANISTER_ID } from "../constants";
import { CreateStoryPayload } from "../types";

const canister = ic(CANISTER_ID);
export const createStory = async (story: CreateStoryPayload) => {
  try {
    const storyObject = [
      story.content,
      story.title,
      story.imageUrl,
      story.prompt,
    ];
    const res = await canister.call("createStory", storyObject);

    return res;
  } catch (err: any) {
    return `An error occurred: ${err.message}`;
  }
};
