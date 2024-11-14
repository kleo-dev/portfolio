import { Client } from '@notionhq/client';
import { NotionToMarkdown } from "notion-to-md";

interface Blog {
    id: string,
    title: string,
    tags: { name: string, color: string }[],
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

export default async function getBlogs(notion: Client, databaseId: string): Promise<[number, Blog[] | {msg: string}]> {
    const [pages, err] = await queryDatabase(notion, databaseId);
    if (err === null) {
        return [200, pages.map(convertBlog)];
    }
    return [500, {msg: String(err)}];
}

function convertBlog(page: any): Blog {
    return {
      id: page.id,
      title: page.properties.Title.title[0].plain_text,
      description: [page.properties.Description.rich_text.map((d: { plain_text: string; }) => (d.plain_text))].join(" "),
      date: page.properties.Date.created_time,
      tags: page.properties.Tags.multi_select.map((tag: any) => ({name: tag.name, color: tag.color})),
    };
  }

interface FullBlog extends Blog {
    markdown: string,
};

export async function getBlog(notion: Client, n2m: NotionToMarkdown, pageId: string): Promise<[number, FullBlog | {msg: string}]> {
    try {
        const page: any = await notion.pages.retrieve({ page_id: pageId })
        if (page.properties.Status.status.name !== 'Posted')
            return [400, {msg: 'Blog not found'}]
        try {
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
        } catch (err: any) {
            return [500, {msg: String(err)}];
        }
    } catch {
        return [400, {msg: 'Blog not found'}]
    }
}