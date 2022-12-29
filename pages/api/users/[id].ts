// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export interface User {
  id: string
  name: string
}

export interface Error {
  code: number
  message: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<User | Error>
) {
  console.log("Cokies", req.cookies);
  
  const user: User = {
    id: "1",
    name: 'Jhon Doe'
  }

  console.log(req, res)
  
  res.status(200).json(user)
}
