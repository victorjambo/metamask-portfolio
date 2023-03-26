// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { ITransaction } from "@/types";
import { TransactionResponse } from "@/utils/responses/transactions";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ITransaction[]>
) {
  res.status(200).json(TransactionResponse);
}
