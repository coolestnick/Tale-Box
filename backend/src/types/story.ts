export type CreateStoryPayload = {
  title: string;
  prompt: string;
  content: string;
  imageUrl: string;
};

export type Story = {
  id: string;
  title: string;
  summary: string;
  characterDescription: string;
  characterBackground: string;
  pages: [
    {
      id: number;
      title: string;
      author: string;
      prompt: string;
      content: string;
      imageUrl: string;
    }
  ];
};
