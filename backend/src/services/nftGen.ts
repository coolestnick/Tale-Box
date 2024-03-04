import axios from "axios";
import { NFT_metadata_body } from "../types";

export const generateNFTMetadata = async (body: NFT_metadata_body) => {
  try {
    const imageData = await axios.post(
      "https://api.web3.storage/upload",
      {
        ...body,
        name: `${body.storyTitle} Page ${body.pageId}`,
      },
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
