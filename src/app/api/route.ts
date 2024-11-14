import getBlogs from './blog';
import { notion, databaseId } from './notion';

export async function GET() {
    let [status, data] = await getBlogs(notion, databaseId);
    return Response.json(data, { status });
}