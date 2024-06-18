import { NextRequest, NextResponse } from 'next/server';
import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export async function GET(req: NextRequest, { params: { slug } }: { params: { slug: string } }) {
  try {
    const command = new GetObjectCommand({
      Bucket: process.env.AWS_S3_BUCKET_NAME!,
      Key: `${slug}.mp3`,
    });

    const url = await getSignedUrl(s3Client, command, { expiresIn: 3600 });

    const response = NextResponse.json({ url });
    response.headers.set('Cache-Control', 's-maxage=3600, stale-while-revalidate');

    return response;
  } catch (error) {
    console.error('Error fetching context:', error);
    return new NextResponse('Error fetching data', { status: 500 });
  }
}
