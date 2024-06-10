// import { Hono } from 'hono';
// import { handle } from 'hono/vercel';
// import { contextDefinition } from '@/db/schema/elements';
// import { eq } from 'drizzle-orm';
// import { z } from 'zod';
// import { db } from '@/db/index';

// export const runtime = 'edge';

// // Define the zod schema for validation
// const contextSchema = z.object({
//   slug: z.string(),
//   concept: z.string(),
//   definition: z.string(), // Now expecting a single string
//   // ... other fields
// });

// // Create a Hono instance for the context API
// const app = new Hono().basePath('/api');

// // Define the GET method handler
// // Define the GET method handler
// // Define the GET method handler
// app.get('/:slug', async (c) => {
//   const { slug } = c.req.param();
//   try {
//     const context = await db.select().from(contextDefinition).where(eq(contextDefinition.slug, slug));
//     console.log("llamado con exito")
//     if (!context) {
//       return c.text('Context not found', 404);
//     } else {
//       return c.json(context); // Return the context without validation
//     }
//   } catch (error) {
//     console.error("Error fetching context:", error);
//     return c.text('Error fetching context', 500);
//   }
// });



// export default app as never;
// export const GET = handle(app); 

// export async function GET(
//   request: Request,
//   { params }: { params: { slug: string } }
// ) {
//   const slug = params.slug // 'a', 'b', or 'c'
//   console.log(slug)
// }





import { NextApiResponse } from 'next';
import {NextRequest} from 'next/server'
import { contextDefinition } from '@/db/schema/elements';
import { eq } from 'drizzle-orm';
import { z } from 'zod';
import { db } from '@/db/index';

const contextSchema = z.object({
  slug: z.string(),
  concept: z.string(),
  definition: z.string(), // Now expecting a single string
  // ... other fields
});



export async function GET(req: NextRequest, {params: {slug}}: {params: {slug:string}}) { 
  try {
//   const element = await db.select().from(contextDefinition).where(eq(contextDefinition.slug, slug)).get();
    const context = await db.select().from(contextDefinition).where(eq(contextDefinition.slug, slug)).get();

    // return new Response(context)
    console.log("executing api call")
    console.log(context)

    if (context == null) return new Response("not found")
    else {
      return Response.json(context)
    }
      } catch (error) {
    console.error('Error fetching context:', error);
    // new Response("not gettin it")
  } finally {
    // await db.$disconnect(); 

  }

}


