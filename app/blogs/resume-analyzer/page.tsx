"use client"

import { getBlog } from "@/data/blogs"
import BlogLayout from "@/components/BlogLayout"

export default function ResumeAnalyzerBlog() {
  const blog = getBlog("resume-screener")
  
  if (!blog) {
    return <div>Blog not found</div>
  }

  return <BlogLayout blog={blog} />
} 