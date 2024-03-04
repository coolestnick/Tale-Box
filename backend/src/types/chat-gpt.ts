import { Story } from "./story";

export type ChatGPTBody = {
  role: string;
  content: string;
}[];

export type ChatGPTResponse = Story & {
  pages: [];
  story: string;
  imagePrompt: string;
  approved: boolean;
  rejectionReason: string;
};
