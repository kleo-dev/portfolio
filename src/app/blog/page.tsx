"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Blog = {
  title: string;
  description: string;
  id: string;
  tags: { name: string; color: string }[];
};

export default function Blog() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchBlogs = (query: string) => {
    (query === ""
      ? fetch("/api/blog/")
      : fetch(`/api/search/?query=${encodeURIComponent(query)}`)
    )
      .then((res) => {
        res
          .json()
          .then((response) => {
            if (response && response.items) {
              setBlogs(response.items);
            } else {
              console.error("`/api/blog/` Response is invalid:", response);
            }
          })
          .catch((e) => {
            console.error("`/api/blog/` Unable to obtain json:", e);
          });
      })
      .catch((e) => {
        console.error("`/api/blog/` Error:", e);
      });
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      fetchBlogs(searchQuery);
    }, 500);

    return () => clearTimeout(handler);
  }, [searchQuery]);

  return (
    <div>
      <div className="content-center w-full lg:mx-auto pt-16 lg:pt-0 relative z-20 pb-16 md:pb-0 animate-fadeIn">
        <div className="w-full max-w-screen-lg mx-auto">
          <div className="px-6 md:px-10 lg:px-15 xl:px-2">
            <div className="pt-8 pb-6 px-8 bg-transparent-ish rounded-xl h-screen">
              <h1 className="text-red-400 w-max mx-auto">Leo's blog</h1>
              <input
                type="search"
                name="Blog"
                id="blog-search"
                className="p-3 bg-transparent border border-red rounded-xl w-72 mx-auto mt-5"
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search"
              />
              <div className="mt-10 grid gap-6 w-full lg:grid-cols-2">
                {blogs.map((blog, i) => (
                  <div
                    className="p-3 px-5 h-52 border border-red rounded-xl backdrop-blur-xl"
                    key={i}
                  >
                    <h1 className="hover:text-red text-ellipsis overflow-hidden">
                      <Link href={"/blog/" + blog.id}>{blog.title}</Link>
                    </h1>
                    <p className="pt-1 max-h-[72px] overflow-hidden">
                      {blog.description}
                    </p>
                    <div className="flex gap-5 pt-3 flex-wrap overflow-hidden h-10">
                      {blog.tags.map((tag, i) => (
                        <span
                          className="inline-flex items-center rounded-md border px-2.5 py-0.5 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground text-xs bg-red-600/10 border-red-600"
                          key={i}
                        >
                          {tag.name}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
