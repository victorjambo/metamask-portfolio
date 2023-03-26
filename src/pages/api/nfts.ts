// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { INFTResponse } from "@/types";
import { NFTResponse } from "@/utils/responses/nfts";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<INFTResponse[]>
) {
  res.status(200).json(NFTResponse);
}
