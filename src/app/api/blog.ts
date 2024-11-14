import { Client } from '@notionhq/client';
import { NotionToMarkdown } from "notion-to-md";

interface Blog {
    id: string,
    title: string,
    tags: string[],
    date: string,
    description: string,
};

export async function queryDatabase(notion: Client, databaseId: string): Promise<[Array<any>, any]> {
    try {
        const response = await notion.databases.query({
            database_id: databaseId,
            filter: {
                property: "Status",
                status: {
                    equals: "Posted"
                }
            }
        });
        return [response.results, null];
    } catch (error: any) {
        return [[], error];
    }
}

export default async function getBlogs(notion: Client, databaseId: string): Promise<[number, Blog[]]> {
    const [pages, err] = await queryDatabase(notion, databaseId);
    if (err === null) {
        return [200, pages.map(convertBlog)];
    }
    return [500, err];
}

function convertBlog(page: any): Blog {
    return {
      id: page.id,
      title: page.properties.Title.title[0].plain_text,
      description: [page.properties.Description.rich_text.map((d: { plain_text: string; }) => (d.plain_text))].join(" "),
      date: page.properties.Date.created_time,
      tags: page.properties.Tags.multi_select.map((tag: any) => (tag.name)),
    };
  }

interface FullBlog extends Blog {
    markdown: string,
};

export async function getBlog(notion: Client, n2m: NotionToMarkdown, pageId: string): Promise<[number, FullBlog]> {
    try {
        const page = await notion.pages.retrieve({ page_id: pageId })
        const blog = convertBlog(page);
        const mdBlocks = await n2m.pageToMarkdown(page.id);
        return [200, {
            id: blog.id,
            title: blog.title,
            description: blog.description,
            tags: blog.tags,
            date: blog.date,
            markdown: n2m.toMarkdownString(mdBlocks).parent,
        }];
    } catch (error: any) {
        return [400, error];
    }
}