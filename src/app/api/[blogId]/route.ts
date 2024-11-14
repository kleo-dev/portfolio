import { getBlog } from '../blog';
import { notion, n2m } from '../notion';

export async function GET(req: Request, { params }: { params: Promise<{ blogId: string }> }) {
  let [status, data] = await getBlog(notion, n2m, (await params).blogId);
  return Response.json(data, { status });
}