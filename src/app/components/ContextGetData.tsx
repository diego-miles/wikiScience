import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


export async function getContext(slug: string) {
    // 'use server'
    const result = await prisma.contextDefinition.findUnique({
          where: { slug },
  });
  if (!result ) "not found";
  return result;
};


