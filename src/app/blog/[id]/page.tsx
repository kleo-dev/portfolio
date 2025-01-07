"use client";

import MarkdownRenderer from "@/components/MarkdownRenderer";
import { useEffect, useState } from "react";
import "./style.css";

type Blog = {
  title: string;
  description: string;
  id: string;
  tags: { name: string; color: string }[];
  markdown: string;
  date: string;
};

export default function Blog({ params }: { params: Promise<{ id: string }> }) {
  const [blog, setBlog] = useState<null | Blog>(null);

  useEffect(() => {
    params.then(({ id }) =>
      fetch(`/api/blog/?id=${id}`)
        .then((res) => {
          res
            .json()
            .then((response) => {
              if (res.status === 200) {
                setBlog(response);
              } else {
                console.error(`'/api/blog/${id}' Error:`, response.msg);
              }
            })
            .catch((e) => {
              console.error(`'/api/blog/${id}' Unable to obtain json:`, e);
            });
        })
        .catch((e) => {
          console.error(`'/api/blog/${id}' Error:`, e);
        })
    );
  }, [params]);

  return (
    <div>
      <div className="content-center w-full lg:mx-auto pt-16 lg:pt-0 relative z-20 pb-16 md:pb-0 animate-fadeIn">
        <div className="w-full max-w-screen-lg mx-auto">
          <div className="px-6 md:px-10 lg:px-15 xl:px-2">
            <div className="pt-8 pb-6 px-8 bg-transparent-ish rounded-xl h-screen">
              {blog ? (
                <div>
                  <h1 className="text-red-400">{blog.title}</h1>
                  <p className="text-gray-400">
                    {new Date(blog.date).toDateString()}
                  </p>
                  <div className="mt-4 blog-md">
                    <MarkdownRenderer>
                      {blog.markdown
                        .replaceAll(/\n!\n/g, "\n<br/>\n")
                        .replaceAll(/\n-/g, "\n\n-")}
                    </MarkdownRenderer>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
