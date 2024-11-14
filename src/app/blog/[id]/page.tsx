"use client";

import React, { useEffect, useState } from 'react';
import '../../Blog.css';
import MarkdownRenderer from './MarkdownRenderer';
import { LoadingBlogRead } from '../Loading';

export default function Blog({ params }: { params: Promise<{ id: string }> }) {
  const [blog, setBlog] = useState({ title: '', date: '', markdown: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const date = new Date(blog.date).toLocaleString('default', { month: 'long', day: 'numeric', year: 'numeric' });

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        console.log('obtaining blog')
        const response = await fetch(`/api/${(await params).id}`);
        if (response.ok) {
          const blog = await response.json();
          document.title = blog.title + " - Leo's blog";
          setBlog(blog);
        } else {
          const errorData = await response.text();
          setError(errorData);
        }
      } catch (err: any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [params]);

  if (loading) {
    return <main>
      <a href="/blog"><h1 className='name'>Leo's blog</h1></a>
      <div className='blog_container'>
        <LoadingBlogRead/>
      </div>
    </main>;
  }

  if (error) {
    return (
      <main>
        <a href="/blog"><h1 className='name'>Leo's blog</h1></a>
        <div>Error: {error}</div>;
      </main>
    )
  }

  return (
    <main>
      <a href="/blog"><h1 className='name'>Leo's blog</h1></a>
      <div className='blog_container'>
        <h2 className='blog_title'>{blog.title}</h2>
        <p className='date'>{date}</p>
        <div className='markdown'><MarkdownRenderer>{blog.markdown.replaceAll('\n-\n', '\n<br/>\n')}</MarkdownRenderer></div>
      </div>
    </main>
  );
}
