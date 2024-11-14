import React from 'react';
import ReactMarkdown from 'react-markdown';

export default function MarkdownRenderer({ children }: { children: string }) {
  return <ReactMarkdown>{children}</ReactMarkdown>;
};