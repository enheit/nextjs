// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma';
import { RegistrationFormData } from '../../sign-up';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = JSON.parse(req.body) as RegistrationFormData;

  console.log("\n\n\nBefore user\n\n\n")
  const user = await prisma.user.create({
    data: {
      id: '63ad8edd3f4a590facac6669',
      name: data.name,
      phoneNumber: data.phoneNumber
    }
  })
  console.log("\n\n\nAfter user\n\n\n")

  res.status(200).json({ success: true, user: null })
}
