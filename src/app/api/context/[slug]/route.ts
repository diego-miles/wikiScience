// pages/api/context/[slug].ts
import { NextRequest } from 'next/server';
import { contextDefinition } from '@/db/schema/elements';
import { db } from '@/db/index';
import { eq } from 'drizzle-orm';

export async function GET(req: NextRequest, { params: { slug } }: { params: { slug: string } }) {
    console.log("executing api call");
    try {
        const context = await db.select().from(contextDefinition).where(eq(contextDefinition.slug, slug));
        
        if (context === null) {
            return new Response("not found");
        } else {
            return new Response(JSON.stringify(context), { headers: { "Content-Type": "application/json" } });
        }
    } catch (error) {
        console.error('Error fetching context:', error);
        return new Response("Error fetching context", { status: 500 });
    }
}
