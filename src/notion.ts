import dotenv from 'dotenv';
import { Client } from '@notionhq/client';
import { NotionToMarkdown } from 'notion-to-md';
dotenv.config();

export const notion = new Client( { auth: process.env.NOTION_API_KEY } )
export const n2m = new NotionToMarkdown({ 
  notionClient: notion,
});

if (process.env.NOTION_DATABASE_ID === undefined) {
  console.error('[server] Error: environment variable \'NOTION_DATABASE_ID\' not found')
  process.exit();
}
export const databaseId: string = process.env.NOTION_DATABASE_ID;