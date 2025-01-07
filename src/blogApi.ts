import { Client } from "@notionhq/client";
import { SearchResponse } from "@notionhq/client/build/src/api-endpoints";
import { NotionToMarkdown } from "notion-to-md";

interface Blog {
  id: string;
  title: string;
  tags: { name: string; color: string }[];
  date: string;
  description: string;
}

type QueryResponse = { cursor: string | null; hasMore: boolean; items: Blog[] };
type Error = { msg: string };

export async function getBlogs(
  notion: Client,
  databaseId: string,
  cursor: string | undefined,
  pageSize: number
): Promise<[number, QueryResponse | Error]> {
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        property: "Status",
        status: {
          equals: "Posted",
        },
      },
      start_cursor: cursor,
      page_size: pageSize,
    });
    return [
      200,
      {
        cursor: response.next_cursor,
        hasMore: response.has_more,
        items: response.results.map(convertBlog),
      },
    ];
  } catch (err: any) {
    return [400, { msg: String(err) }];
  }
}

function convertBlog(page: any): Blog {
  return {
    id: page.id,
    title: page.properties.Title.title[0].plain_text,
    description: [
      page.properties.Description.rich_text.map(
        (d: { plain_text: string }) => d.plain_text
      ),
    ].join(" "),
    date: page.properties.Date.created_time,
    tags: page.properties.Tags.multi_select.map((tag: any) => ({
      name: tag.name,
      color: tag.color,
    })),
  };
}

interface FullBlog extends Blog {
  markdown: string;
}

export async function getBlog(
  notion: Client,
  n2m: NotionToMarkdown,
  pageId: string
): Promise<[number, FullBlog | Error]> {
  try {
    const page: any = await notion.pages.retrieve({ page_id: pageId });
    if (page.properties.Status.status.name !== "Posted")
      return [400, { msg: "Blog not found" }];
    try {
      const blog = convertBlog(page);
      const mdBlocks = await n2m.pageToMarkdown(page.id);
      return [
        200,
        {
          id: blog.id,
          title: blog.title,
          description: blog.description,
          tags: blog.tags,
          date: blog.date,
          markdown: n2m.toMarkdownString(mdBlocks).parent || "",
        },
      ];
    } catch (err: any) {
      return [500, { msg: String(err) }];
    }
  } catch {
    return [400, { msg: "Blog not found" }];
  }
}

export async function searchBlog(
  notion: Client,
  query: string
): Promise<[200 | 400, QueryResponse | Error]> {
  try {
    var response = await notion.search({
      query,
      filter: {
        value: "page",
        property: "object",
      },
      sort: {
        direction: "ascending",
        timestamp: "last_edited_time",
      },
    });
    response.results = response.results.filter(
      (item: any) => item.properties.Status.status.name === "Posted"
    );
    return [
      200,
      {
        cursor: response.next_cursor,
        hasMore: response.has_more,
        items: response.results.map(convertBlog),
      },
    ];
  } catch (err: any) {
    return [400, { msg: String(err) }];
  }
}
