import axios from "axios";
import { ChatGPTBody, ChatGPTResponse } from "../types";

export const promptChatGPT = async (
  messages: ChatGPTBody
): Promise<ChatGPTResponse | string> => {
  try {
    const res = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages,
        temperature: 0.2,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.CHATGPT_API_KEY}`,
        },
      }
    );

    const data = res.data.choices[0].message.content;
    return JSON.parse(data);
  } catch (err: any) {
    return `An error occurred: ${err.message}`;
  }
};
