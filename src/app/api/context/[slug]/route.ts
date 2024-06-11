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



import { eq } from 'drizzle-orm';
import { NextApiResponse } from 'next';
import { NextRequest } from 'next/server';
import { contextDefinition } from '@/db/schema/elements';
import { z } from 'zod';
import { db } from '@/db/index';




// Your contextSchema is correct for a single string definition
const contextSchema = z.object({
  slug: z.string(),
  concept: z.string(),
  definition: z.string(), // Now expecting a single string
  // ... other fields
});

export async function GET(req: NextRequest, { params: { slug } }: { params: { slug: string } }) {
  try {
    // Use `findFirst` for a single record
    const context = await db.select({
      slug: contextDefinition.slug,
      concept: contextDefinition.concept,
      definition: contextDefinition.definition,
      // Include other fields here as needed
    }).from(contextDefinition).where(eq(contextDefinition.slug, slug)).get();

    // Ensure you only return a single result, not an array
    if (!context) {
      return new Response('Context not found', { status: 404 });
    }

    // console.log('executing api call');
    // console.log(context);

    return Response.json(context); // Return the single result
  } catch (error) {
    console.error('Error fetching context:', error);
    return new Response('Error fetching data', { status: 500 });
  } finally {
    // await db.$disconnect(); // Consider using a connection pool for better performance
  }
}