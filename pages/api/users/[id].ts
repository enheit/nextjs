// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'

export interface User {
  id: string
  name: string
}

export interface Error {
  code: number
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User | Error>
) {
  const userId = req.query.id as string

  const user = await prisma.user.findUnique({
    where: {
      id: userId
    }
  })

  if (!user) {
    return res.status(404).json({ code: 404, message: "Failed to find a user" })
  }

  res.status(200).json(user)
}
