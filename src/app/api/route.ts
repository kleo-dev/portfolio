import { getBlogs } from './blog';
import { notion, databaseId } from './notion';

export async function GET(request: Request) {
    const url = new URL(request.url);
    var cursor = url.searchParams.get('cursor') || undefined;
    if (cursor === '')
        cursor = undefined;
    const size = parseInt(url.searchParams.get('size') || '5');
    let [status, response] = await getBlogs(notion, databaseId, cursor, size);
    return Response.json(response, { status });
}
