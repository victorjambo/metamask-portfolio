// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{
    temp: number;
    wind: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
    name: string;
  }|{
    success: boolean;
  }>
) {
  const cityName = req.query.q;
  if (cityName) {
    const min = Math.random() * (23 - 1) + 1;
    const max = Math.random() * (40 - 24) + 24;
    const temp = Math.random() * (40 - 7) + 7;
    const humidity = Math.random() * (99 - 60) + 60;
    const wind = Math.floor(Math.random() * 6);
    return res.status(200).json({
      temp,
      wind,
      temp_min: min,
      temp_max: max,
      humidity,
      name: String(cityName),
    });
  }
  return res.status(400).json({
    success: false
  });
}
