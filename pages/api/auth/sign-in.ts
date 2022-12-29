// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = JSON.parse(req.body);

  console.log("Data", data);

  const user = await prisma.user.findFirst({
    where: {
      name: data.username
    }
  })

  console.log("User", user);

  if (!user) {
    return res.status(401).json({ success: false, message: "User was not found" })
  }

  res.setHeader("set-cookie", `accessToken=server_token; path=/; samesite=lax; httponly;`)


  res.status(200).json({ success: true })
}
