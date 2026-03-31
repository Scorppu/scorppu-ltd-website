import { getCloudflareContext } from '@opennextjs/cloudflare';
import { getAllMembers } from '@/lib/db';

export const runtime = 'edge';

export async function GET() {
  const { env } = await getCloudflareContext({ async: true });
  const members = await getAllMembers(env.DB);
  return Response.json(members);
}
