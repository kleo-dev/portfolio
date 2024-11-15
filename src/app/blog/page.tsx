"use client";

import React, { useEffect, useState } from 'react';
import './Blog.css';
import { LoadingBlog } from './Loading';
import InfiniteScroll from "react-infinite-scroll-component";

export type BlogT = { 
  title: string, 
  description: string, 
  id: string, 
  date: string, 
  tags: { name: string, color: string }[]
};

export type BlogT2 = { 
  title: string, 
  description: string, 
  id: string, 
  date: string, 
  tags: { name: string, color: string }[],
  markdown: string,
};

const notionColors: { [index: string]: {
  background: string,
  color: string,
} } = {
  default: { background: "#191919", color: "#D4D4D4" },
  gray: { background: "#252525", color: "#9B9B9B" },
  brown: { background: "#2E2724", color: "#A27763" },
  orange: { background: "#36291F", color: "#CB7B37" },
  yellow: { background: "#372E20", color: "#C19138" },
  green: { background: "#242B26", color: "#4F9768" },
  blue: { background: "#1F282D", color: "#447ACB" },
  purple: { background: "#2A2430", color: "#865DBB" },
  pink: { background: "#2E2328", color: "#BA4A78" },
  red: { background: "#332523", color: "#BE524B" }
};

export default function Blog() {
  const [items, setItems] = useState<BlogT[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [cursor, setCursor] = useState('');

  const fetchData = () => {
    if (hasMore) {
      fetch(`/api/?cursor=${cursor}&size=10`).then((res) => {
        res.json().then((data: { items: BlogT[], hasMore: boolean, cursor: string }) => {
          setItems((prev) => [...prev, ...data.items]);
          setHasMore(data.hasMore);
          setCursor(data.cursor);
        }).catch((err) => {
          console.error(err);
        });
      }).catch((err) => {
        console.error(err);
      });
    }
  };

  const refreshData = () => {
    setItems([]);
    setHasMore(true);
    setCursor('');
  }

  useEffect(() => {
    document.title = "Leo's blog";
    fetchData();
  }, []);

  return (
    <main>
      <a href="/blog"><h1 className='name'>Leo's blog</h1></a>
      <div className='container'>
        <InfiniteScroll
          pullDownToRefresh
          pullDownToRefreshThreshold={50}
          dataLength={items.length}
          next={fetchData}
          hasMore={hasMore}
          loader={<LoadingBlog/>}
          refreshFunction={refreshData}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <a>Yay! You have seen it all</a>
            </p>
          }
        >
        {items.map((blog, i) => (
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
                    marginTop: '8px',
                    marginLeft: i === 0 ? '0px' : '8px',
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
                    marginTop: '8px',
                    marginLeft: i === 0 ? '0px' : '8px',
                  }}>{tag.name}</span>
              ))}
            </div>
          </a>
        ))}
        </InfiniteScroll>
      </div>
    </main>
  );
}
