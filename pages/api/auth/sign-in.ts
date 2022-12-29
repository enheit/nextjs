// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  console.log("Body is", req.body)

  res.setHeader("set-cookie", `accessToken=server_token; path=/; samesite=lax; httponly;`)

  res.status(200).json({ success: true })
}
