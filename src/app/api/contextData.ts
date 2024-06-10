// import { NextApiRequest, NextApiResponse } from 'next';
// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'GET') {
//     const { buttonText } = req.query;
//     try {
//       const contextData = await context(buttonText as string);
//       res.status(200).json(contextData);
//     } catch (error) {
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   } else {
//     res.status(405).json({ error: 'Method Not Allowed' });
//   }
// }

// const context = async (buttonText: string) => {
//   const result = await prisma.contextDefinition.findUnique({
//     where: { slug: buttonText },
//   });
//   if (!result) throw new Error('Context data not found');
//   return result;
// };



