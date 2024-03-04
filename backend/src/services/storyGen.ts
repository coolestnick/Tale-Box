import { uuid } from "uuidv4";
import { Story } from "../types";
import { continueStory, newStory } from "../lib/prompts";
import { promptChatGPT } from "../utils";

export const composeStory = async (
  prompt: string,
  existingStory?: Story,
  title?: string
) => {
  try {
    const messages = !existingStory
      ? newStory(prompt)
      : continueStory(
          prompt,
          existingStory.characterDescription,
          existingStory.summary,
          existingStory.pages[existingStory.pages.length - 1].content
        );

    const story = await promptChatGPT(messages);
    if (typeof story === "string") {
      return story;
    }
    if (!existingStory && title) {
      story.summary = story.story;
      story.title = title;
    }

    const storyPage = story.characterDescription
      ? story.characterDescription +
        "\n " +
        story.characterBackground +
        "\n " +
        story.story
      : story.story;

    return {
      id: existingStory?.id || uuid(),
      story,
      storyPage,
      page: existingStory?.pages.length || 1,
    };
  } catch (err: any) {
    return `An error occurred: ${err.message}`;
  }
};
