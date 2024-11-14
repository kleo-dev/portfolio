"use client";

import React, { useEffect, useState } from 'react';
import '../Blog.css';
import LoadingBlog from './Loading';

export default function Blog() {
  const [data, setData] = useState([{ title: '', description: '', id: '', date: '' }]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setTimeout(async () => {
        try {
          const response = await fetch('/api/');
          if (response.ok) {
            const result = await response.json();
            setData(result);
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
    return <div>Error: {JSON.stringify(error)}</div>; // Display any errors
  } if (data.length === 1 && data[0].id === '') {
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
              </div>
            </a>
          );
        })}
      </div>
    </main>
  );
}
