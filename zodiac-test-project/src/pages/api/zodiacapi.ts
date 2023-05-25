// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { ethers } from "ethers";

const fetch = require('node-fetch');
const apiKey = 'X5ljC1hZskOfbf4XmosctiGu5lirqr53Z1ohVmxEN1yhoPY8zFX80If3pvbvwjPmhYyB1h5cSwyMbPc1spR5vO658xVdAe1S7TBD7ffqEIiFOmaU4ZWaCwlaFQMEDjYD';
const eventID = poapEventId;

fetch('https://api.poap.tech/events/id/${eventId}', {
  headers: {
    'X-API-KEY': X5ljC1hZskOfbf4XmosctiGu5lirqr53Z1ohVmxEN1yhoPY8zFX80If3pvbvwjPmhYyB1h5cSwyMbPc1spR5vO658xVdAe1S7TBD7ffqEIiFOmaU4ZWaCwlaFQMEDjYD
  }
})
,then(response => response.json())
,then(data => {
  console.log(Data);
})
,catch(Error => {
  console.error(error);
});

export async function signMessage(privateKey, message) {
    try {
        const wallet = new ethers.Wallet(privateKey);
        const signedMessage = await wallet.signMessage(message);
        return { success: true, signature: signedMessage };
    
    } catch (error) {
        return { success:false, message: error.message };
    }
}

export async function verifyMessage(signedMessage, originalMessage) {
    try {
        const address = ethers.utils.verifyMessage(originalMessage, signedMessage);
        return { success: true, address: address };
    } catch (error) {
        return { success: false, message: error.message };
    }
}

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
