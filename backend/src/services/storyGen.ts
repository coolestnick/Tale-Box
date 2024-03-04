import { uuid } from "uuidv4";
import { Story, StoryPage } from "../types";
import { continueStory, newStory } from "../lib/prompts";
import { promptChatGPT } from "../utils";

/**
 * Composes a story based on the provided prompt.
 * If an existing story is provided, it continues the story from where it left off.
 * @param prompt The prompt for the story.
 * @param existingStory An optional existing story to continue.
 * @param title An optional title for the story if it's a new story.
 * @returns The composed story or an error message if an error occurs.
 */
export const composeStory = async (
  prompt: string,
  existingStory?: Story,
  title?: string
): Promise<Story | string> => {
  try {
    // Generate messages based on the prompt and existing story
    const messages = !existingStory
      ? newStory(prompt)
      : continueStory(
          prompt,
          existingStory.characterDescription,
          existingStory.summary,
          existingStory.pages[existingStory.pages.length - 1].content
        );

    // Get the story from the AI model
    const story = await promptChatGPT(messages);

    // Handle the response from the AI model
    if (typeof story === "string") {
      return story; // Return error message
    }

    // Update the story title and summary if it's a new story
    if (!existingStory && title) {
      story.summary = story.story;
      story.title = title;
    }

    // Construct the story page
    const storyPage: StoryPage = constructStoryPage(story);

    // Return the composed story
    return {
      id: existingStory?.id || uuid(),
      story,
      storyPage,
      page: existingStory?.pages.length || 1,
    };
  } catch (error) {
    // Handle errors
    return `An error occurred: ${error.message}`;
  }
};

/**
 * Constructs the story page by combining character description, background, and story.
 * @param story The story object.
 * @returns The constructed story page.
 */
const constructStoryPage = (story: Story): StoryPage => {
  const { characterDescription, characterBackground, story: storyContent } = story;
  const storyPageContent = characterDescription
    ? `${characterDescription}\n ${characterBackground}\n ${storyContent}`
    : storyContent;
  return { content: storyPageContent };
};
