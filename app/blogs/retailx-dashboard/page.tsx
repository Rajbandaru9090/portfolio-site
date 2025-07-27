"use client"

import { getBlog } from "@/data/blogs"
import BlogLayout from "@/components/BlogLayout"

export default function RetailXBlog() {
  const blog = getBlog("retailx-dashboard")
  
  if (!blog) {
    return <div>Blog not found</div>
  }

  return <BlogLayout blog={blog} />
} 