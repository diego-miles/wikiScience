import { Hono } from 'hono';
import { handle } from 'hono/vercel';
import { contextDefinition } from '../../../db/schema/elements';
import { eq } from 'drizzle-orm';
import { z } from 'zod';
import { db } from '../../../db/index';

export const runtime = 'edge';

// Define the zod schema for validation
const contextSchema = z.object({
    slug: z.string(),
    concept: z.string(),
    definition: z.union([z.string(), z.array(z.string())]), 
    // ... other fields
});

// Create a Hono instance for the context API
const app = new Hono().basePath('/api');

// Define the GET method handler
app.get('/:slug', async (c) => {
    const { slug } = c.req.param();
    try {
        const context = await db.select().from(contextDefinition).where(eq(contextDefinition.slug, slug)).get();

        if (!context) {
            return c.text('Context not found', 404);
        } else {
            // Validate against the schema
            try {
                const validatedContext = contextSchema.parse(context);
                // Return a valid JSON response
                return c.json(validatedContext);
            } catch (validationError) {
                console.error("Validation error:", validationError);
                return c.text('Invalid data format', 500);
            }
        }
    } catch (error) {
        console.error("Error fetching context:", error);
        return c.text('Error fetching context', 500);
    }
});

// export default app as never;

export const GET = handle(app);
