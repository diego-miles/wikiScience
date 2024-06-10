import { getCookie, setCookie } from 'hono/cookie';
import { db } from '@/db/index';
import { Hono } from 'hono';
import { z } from 'zod';
import { eq } from 'drizzle-orm';

const app = new Hono().basePath('/api');
import { contextDefinition } from '@/db/schema/elements';

// app.use(async (c, next) => {
//     c.set('db', db);

//     const sessionId = getCookie(c, lucia.sessionCookieName);

//     if (!sessionId) {
//         c.set('user', null);
//         c.set('session', null);
//         return next();
//     }

//     const { session, user } = await lucia.validateSession(sessionId);

//     if (session && session.fresh) {
//         const sessionCookie = lucia.createSessionCookie(session.id);
//         setCookie(c, lucia.sessionCookieName, sessionCookie.serialize(), {
//             ...sessionCookie.attributes,
//             sameSite: 'Strict',
//         });
//     }

//     if (!session) {
//         const sessionCookie = lucia.createBlankSessionCookie();
//         setCookie(c, lucia.sessionCookieName, sessionCookie.serialize(), {
//             ...sessionCookie.attributes,
//             sameSite: 'Strict',
//         });
//     }

//     c.set('user', user);
//     c.set('session', session);
//     return next();
// });
const contextSchema = z.object({
    slug: z.string(),
    concept: z.string(),
    definition: z.union([z.string(), z.array(z.string())]), 
    // ... other fields
});



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


// const routes = app.route('/', authApp).route('/', secretApp);

// export type AppType = typeof routes;

export { app };
