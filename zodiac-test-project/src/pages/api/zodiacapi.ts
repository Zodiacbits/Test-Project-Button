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
    res.status(400).json({name:'Get Whitelisted, Noob!'})
    res.status(405).json({ name: 'Method not allowed' })

  try {
  } catch (error) {
    console.error(error);
    res.status(500).json({ name: 'Internal server error' });
  }
  } 


}
