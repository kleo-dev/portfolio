"use client";

import React, { useEffect, useState } from 'react';
import '../Blog.css';
import LoadingBlog from './Loading';

type Blog = { title: string, description: string, id: string, date: string, tags: { name: string, color: string }[] };

const notionColors: { [index: string]: {
  background: string,
  color: string,
} } = {
  default: {
    background: "#191919",
    color: "#D4D4D4"
  },
  gray: {
    background: "#252525",
    color: "#9B9B9B"
  },
  brown: {
    background: "#2E2724",
    color: "#A27763"
  },
  orange: {
    background: "#36291F",
    color: "#CB7B37"
  },
  yellow: {
    background: "#372E20",
    color: "#C19138"
  },
  green: {
    background: "#242B26",
    color: "#4F9768"
  },
  blue: {
    background: "#1F282D",
    color: "#447ACB"
  },
  purple: {
    background: "#2A2430",
    color: "#865DBB"
  },
  pink: {
    background: "#2E2328",
    color: "#BA4A78"
  },
  red: {
    background: "#332523",
    color: "#BE524B"
  }
};

export default function Blog() {
  const [data, setData] = useState<Blog[]>([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setTimeout(async () => {
        try {
          const response = await fetch('/api/');
          if (response.ok) {
            const result = await response.json();
            setData(result);
            setLoading(false);
          } else {
            const errorData = await response.text();
            setError(errorData);
          }
        } catch (err: any) {
          setError(err.toString());
        }
      }, 500);
    };
    fetchData();
  }, []);
  

  if (error) {
    if (error) {
      return (
        <main>
          <a href="/blog"><h1 className='name'>Leo's blog</h1></a>
          <div>Error: {error}</div>;
        </main>
      )
    }
  } if (loading) {
    return (
      <main>
        <a href="/blog"><h1 className='name'>Leo's blog</h1></a>
        <LoadingBlog/>
      </main>
    );
  }

  document.title = "Leo's blog";

  return (
    <main>
      <a href="/blog"><h1 className='name'>Leo's blog</h1></a>
      <div className='container'>
        {data.map((blog, i) => {
          return (
            <a key={i} href={`/blog/${blog.id}`} style={{ textDecoration: 'none' }}>
              <div className='blog'>
                <h2 className='title'>{blog.title}</h2>
                <p className='date'>{new Date(blog.date).toLocaleString('default', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                <p className='description'>{blog.description}</p>
                {blog.tags.map((tag, i) => (
                  notionColors[tag.color] !== undefined ?
                    <span key={i} style={{
                      background: notionColors[tag.color].background,
                      color: notionColors[tag.color].color,
                      fontSize: '12px',
                      border: '5px solid ' + notionColors[tag.color].background,
                      fontFamily: 'sans-serif',
                      borderRadius: '5px',
                      display: 'inline-block',
                      marginTop: '8px'
                    }}>{tag.name}</span>
                  :
                    <span key={i} style={{
                      background: tag.color,
                      color: tag.color,
                      fontSize: '12px',
                      border: '5px solid ' + tag.color,
                      fontFamily: 'sans-serif',
                      borderRadius: '5px',
                      display: 'inline-block',
                      marginTop: '8px'
                    }}>{tag.name}</span>
                ))}
              </div>
            </a>
          );
        })}
      </div>
    </main>
  );
}
