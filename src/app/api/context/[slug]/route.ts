// pages/api/context/[slug].ts
import db from '@/db/db'
// import { PrismaClient } from '@prisma/client';
import { NextApiResponse } from 'next';
import {NextRequest} from 'next/server'

export async function GET(req: NextRequest, {params: {slug}}: {params: {slug:string}}) { 
 console.log("ececuting api call")
  try {
    const context = await db.contextDefinition.findUnique({
      where: {slug: slug },
    });
    // return new Response(context)

    if (context == null) return new Response("not found")
    else {
      return Response.json(context)
    }
      } catch (error) {
    console.error('Error fetching context:', error);
    // new Response("not gettin it")
  } finally {
    await db.$disconnect(); 
  }

}