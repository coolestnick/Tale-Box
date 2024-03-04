import axios from "axios";
import { sleep } from "../utils";

export const generateImage = async (prompt: string) => {
  try {
    const negative_prompt =
      "2 heads, 2 faces, 3 feet, 4 feet, cropped image, out of frame, deformed hands, twisted fingers, cross eyes, weird eyes, dead eyes, double image, malformed hands, multiple heads, extra limb, ugly, poorly drawn hands, missing limb, disfigured, cut off, ugly, grain, low res, deformed, blurry, bad anatomy, disfigured, poorly drawn face, mutation, mutated, floating limbs, disconnected limbs, disgusting, poorly drawn, mutilated, mangled, extra fingers, duplicate artifacts, missing arms, mutated hands, mutilated hands, cloned face, malformed, text, fonts, letters, symbols, logo, wordmark, writing, heading, signature, watermark, stamp";

    const res = await axios.post(
      "https://cloud.leonardo.ai/api/rest/v1/generations",
      {
        prompt,
        negative_prompt,
        modelId: "ac614f96-1082-45bf-be9d-757f2d31c174",
        width: 640,
        height: 832,
        public: false,
        promptMagic: true,
        unzoomAmount: 1,
        num_images: 1,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.LEONARDO_API_KEY}`,
        },
      }
    );

    const { generationId } = res.data.sdGenerationJob;
    let imageAIUri;

    while (!imageAIUri) {
      const result = await axios.get(
        `https://cloud.leonardo.ai/api/rest/v1/generations/${generationId}`
      );

      if (
        result.data.generations_by_pk?.generated_images?.length > 0 &&
        result.data.generations_by_pk?.generated_images[0]
      ) {
        imageAIUri = result.data.generations_by_pk.generated_images[0].url;
      } else {
        console.log("leonardo image processing...");
        await sleep(3000);
      }
    }

    const image = await axios.get(imageAIUri, {
      responseType: "arraybuffer",
    });
    const imageData = await axios.post(
      "https://api.web3.storage/upload",
      image.data,
      {
        headers: {
          Authorization: `Bearer ${process.env.WEB3_STORAGE_API_KEY}`,
        },
      }
    );

    return `https://${imageData.data.cid}.ipfs.w3s.link/`;
  } catch (err: any) {
    return `An error occurred: ${err.message}`;
  }
};
