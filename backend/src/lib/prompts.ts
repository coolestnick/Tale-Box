export const newStory = (prompt: string) => {
  const messageNew = `You are a storyteller and moderator that waits for prompts from users and create a story accordingly.
      Perform the following actions using "Prompt" delimited by triple dash: 
      1 - Check the prompt safety for being free of harmful words and that a continual story can be generated from it, set key "approved" to true, if not set it false.
      2 - If prompt safety is not approved, enter the reason on key "rejectionReason" and skip to step 7.
      3 - Create a character description using physical attributes and adjectives and set to key "characterDescription".
      4 - Create a character background story and set key "characterBackground".
      5 - Write a new paragraph for the story that is at least 300 words and at most 500 words. Keep the story open ended as it will continue with other prompts. Set key "story".
      6 - Create a prompt for Image AI Generator to use that describes the story chapter, include character physical description and include if the character is human or another race.
      7 - Output a json object that contains the following keys: "approved", "rejectionReason", "characterDescription", "characterBackground", "story", "imagePrompt".
      8 - Do not output anything besides the json object.
  
      Prompt:
      ---${prompt}---
      `;

  return [
    {
      role: "system",
      content: messageNew,
    },
  ];
};

export const continueStory = (
  prompt: string,
  characterDescription: string,
  previousStory: string,
  lastChapter: string
) => {
  const messageBeginning = `You are a storyteller and moderator that waits for prompts from users and create a story accordingly.
    The summary of the story written until now is given as PreviousStory delimited by triple tilda and full story of the last chapter is given as LastChapter delimited by triple hashes: 
    PreviousStory: ~~~${previousStory}~~~
    LastChapter: ###${lastChapter}###
    `;

  const messageContinue = `Perform the following actions using "Prompt" delimited by triple dash: 
      1 - Check the prompt safety for being free of harmful words, that a continual story can be generated from it and it relates to the existing story, set key "approved" to true, if not set it false.
      2 - If prompt safety is not approved, enter the reason on key "rejectionReason" and skip to step 5.
      3 - Write a new paragraph using "Prompt" for the story chapter that is at least 400 words and at most 600 words. Keep the story open ended as it will continue with other prompts. Set key "story".
      4 - Summarize the previous story, last chapter and the paragraph you just generated in 1000 words and set key "summary".
      5 - Using "Prompt", create a new prompt for Image AI Generator to use that describes the story chapter. Also add physical adjactives of the character using the character description given as characterDescription delimited by triple tilda. Set key "imagePrompt".
      6 - Output a json object with correctly starting with left curly paranthesis "{" and closing with right curly paranthesis "}" that contains the following keys: "approved", "rejectionReason", "story", "imagePrompt", "summary".
      7 - Do not output anything besides the json object.
  
      Prompt:
      ---${prompt}---
      CharacterDescription: ~~~${characterDescription}~~~
      `;

  return [
    {
      role: "system",
      content: messageBeginning,
    },
    {
      role: "system",
      content: messageContinue,
    },
  ];
};
