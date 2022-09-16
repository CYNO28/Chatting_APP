
import type { NextApiRequest, NextApiResponse } from 'next'
import { MongoClient } from 'mongodb'
const url=process.env.MONGODB_URL
type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
        
  res.status(200).json({ name: 'John Doe' })
}
