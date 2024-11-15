"use client";

import React, { useEffect, useState } from 'react';
import '../Blog.css';
import MarkdownRenderer from './MarkdownRenderer';
import { LoadingBlogRead } from '../Loading';
import { BlogT2 } from '../page';

export default function Blog({ params }: { params: Promise<{ id: string }> }) {
  const [blog, setBlog] = useState<BlogT2 | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    params
      .then(({ id }) => {
        return fetch(`/api/${id}`);
      })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch blog');
        }
        return res.json();
      })
      .then((data) => {
        if (isMounted) setBlog(data);
      })
      .catch((err) => {
        if (isMounted) setError(err.message);
        console.error(err);
      });

    return () => {
      isMounted = false;
    };
  }, [params]);

  if (error) {
    return (
      <main>
        <a href="/blog"><h1 className="name">Leo's blog</h1></a>
        <div className="blog_container">
          <p className="error">Error loading blog: {error}</p>
        </div>
      </main>
    );
  }

  if (blog !== null) {
    return (
      <main>
        <a href="/blog"><h1 className="name">Leo's blog</h1></a>
        <div className="blog_container">
          <h2 className="blog_title">{blog.title}</h2>
          <p className="date">
            {new Date(blog.date).toLocaleString('default', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
          </p>
          <div className="markdown">
            <MarkdownRenderer>
              {blog.markdown.replaceAll('\n-\n', '\n<br/>\n')}
            </MarkdownRenderer>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main>
      <a href="/blog"><h1 className="name">Leo's blog</h1></a>
      <div className="blog_container">
        <LoadingBlogRead />
      </div>
    </main>
  );
}
