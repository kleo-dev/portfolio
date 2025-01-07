import { getBlogs, searchBlog } from "@/blogApi";
import { notion, databaseId } from "@/notion";

export async function GET(request: Request) {
  const url = new URL(request.url);
  let [status, response] = await searchBlog(
    notion,
    url.searchParams.get("query") || ""
  );
  return Response.json(response, { status });
}
