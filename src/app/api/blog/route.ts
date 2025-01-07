import { getBlog, getBlogs } from "@/blogApi";
import { notion, databaseId, n2m } from "@/notion";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const id = url.searchParams.get("id");
  if (id) {
    let [status, data] = await getBlog(notion, n2m, id);
    return Response.json(data, { status });
  } else {
    var cursor = url.searchParams.get("cursor") || undefined;
    if (cursor === "") cursor = undefined;
    const size = parseInt(url.searchParams.get("size") || "5");
    let [status, response] = await getBlogs(notion, databaseId, cursor, size);
    return Response.json(response, { status });
  }
}
