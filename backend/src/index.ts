import express from "express";
import cors from "cors";
import { composeStory, generateImage, generateNFTMetadata } from "./services";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  return res.send("hello");
});

app.post("/story", async (req, res) => {
  const { title, prompt, existingStory, author } = req.body;

  const storyResponse = await composeStory(prompt, existingStory, title);
  if (typeof storyResponse === "string") {
    return res.status(500).json({ success: false, message: storyResponse });
  }
  if (!storyResponse.story.approved) {
    return res
      .status(500)
      .json({ success: false, message: storyResponse.story.rejectionReason });
  }

  const imageUrl = await generateImage(storyResponse.story.imagePrompt);
  if (imageUrl.startsWith("An")) {
    return res.status(500).json({ success: false, message: imageUrl });
  }

  const nftMetadataUrl = await generateNFTMetadata({
    author,
    id: storyResponse.id,
    imageUrl,
    pageId: storyResponse.page,
    story: storyResponse.story.story,
    storyTitle: storyResponse.story.title,
  });
  if (imageUrl.startsWith("An")) {
    return res.status(500).json({ success: false, message: nftMetadataUrl });
  }

  return res.status(200).json({
    success: true,
    story: storyResponse.storyPage,
    imageUrl,
    nftMetadataUrl,
  });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
