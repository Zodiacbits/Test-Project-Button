// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'GET') {
  res.status(200).json({ name: 'Zodiac API Endpoint' })
  } else {
    res.status(400).json({message: 'Get Whitelisted, Noob!'})
  }
}
