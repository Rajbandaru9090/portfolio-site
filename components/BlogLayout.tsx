"use client"

import { useState, useEffect } from "react"
import { ArrowLeft, ExternalLink, Clock, Calendar, Target, Database, Server, BarChart3, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import BlogIllustration from "./BlogIllustration"

const iconMap = {
  Target,
  Database,
  Server,
  BarChart3,
  TrendingUp,
  Brain: () => <div className="w-5 h-5 bg-gradient-to-br from-sky-500 to-blue-500 rounded-full" />,
  Shield: () => <div className="w-5 h-5 bg-gradient-to-br from-sky-500 to-blue-500 rounded-full" />
}

interface BlogLayoutProps {
  blog: any
  children?: React.ReactNode
}

export default function BlogLayout({ blog, children }: BlogLayoutProps) {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const sections = blog.sections.map((section: any) => section.id)
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i])
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [blog.sections])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const IconComponent = iconMap[blog.icon as keyof typeof iconMap]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-sky-100 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <IconComponent />
              <span className="text-xl font-bold text-gray-900">Raju Bandaru</span>
            </div>
            <Button
              variant="outline"
              onClick={() => window.history.back()}
              className="border-sky-200 text-sky-600 hover:bg-sky-50"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Button>
          </div>
        </div>
      </nav>

      {/* Blog Content */}
      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
                             {/* Header */}
               <div className="mb-12">
                 <div className="flex items-center space-x-3 mb-4">
                   <IconComponent />
                   <Badge className="bg-sky-100 text-sky-700 border-sky-200">{blog.badge}</Badge>
                 </div>
                 <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                   {blog.title}
                 </h1>
                 <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                   {blog.subtitle}
                 </p>
                 {blog.heroSubtitle && (
                   <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl">
                     {blog.heroSubtitle}
                   </p>
                 )}
                 <div className="flex items-center space-x-6 text-gray-500">
                   <div className="flex items-center space-x-2">
                     <Calendar className="h-4 w-4" />
                     <span>{blog.publishedDate}</span>
                   </div>
                   <div className="flex items-center space-x-2">
                     <Clock className="h-4 w-4" />
                     <span>{blog.readTime}</span>
                   </div>
                 </div>
               </div>

              {/* Hero Image */}
              <div className="mb-12">
                <Image
                  src={blog.heroImage}
                  alt={blog.title}
                  width={800}
                  height={400}
                  className="w-full rounded-xl shadow-2xl"
                />
              </div>

              {/* Blog Sections */}
              <div className="space-y-16">
                {blog.sections.map((section: any, index: number) => {
                  const SectionIcon = iconMap[section.icon as keyof typeof iconMap]
                  
                  return (
                    <section key={section.id} id={section.id} className="scroll-mt-24">
                      <div className="mb-8">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-blue-500 rounded-xl flex items-center justify-center">
                            <SectionIcon className="h-6 w-6 text-white" />
                          </div>
                          <h2 className="text-3xl font-bold text-gray-900">{section.title}</h2>
                        </div>
                      </div>

                                             <div className="prose prose-lg max-w-none">
                         {section.technologies && (
                           <div className="mb-6">
                             <h3 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used:</h3>
                             <div className="flex flex-wrap gap-2">
                               {section.technologies.map((tech: string) => (
                                 <Badge key={tech} variant="secondary" className="bg-gray-100 text-gray-700">
                                   {tech}
                                 </Badge>
                               ))}
                             </div>
                           </div>
                         )}

                         <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                           {section.content}
                         </p>

                         {/* List Items */}
                         {section.listItems && (
                           <div className="mb-8">
                             <ul className="space-y-4">
                               {section.listItems.map((item: string, index: number) => (
                                 <li key={index} className="flex items-start space-x-3">
                                   <div className="w-2 h-2 bg-sky-500 rounded-full mt-3 flex-shrink-0"></div>
                                   <p className="text-gray-700 leading-relaxed">{item}</p>
                                 </li>
                               ))}
                             </ul>
                           </div>
                         )}

                         {/* Subsections */}
                         {section.subsections && (
                           <div className="space-y-8 mb-8">
                             {section.subsections.map((subsection: any, index: number) => (
                               <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                                 <h4 className="text-xl font-semibold text-gray-900 mb-4">{subsection.title}</h4>
                                 <p className="text-gray-700 mb-4 leading-relaxed">{subsection.content}</p>
                                 {subsection.listItems && (
                                   <ul className="space-y-3">
                                     {subsection.listItems.map((item: string, itemIndex: number) => (
                                       <li key={itemIndex} className="flex items-start space-x-3">
                                         <div className="w-1.5 h-1.5 bg-sky-500 rounded-full mt-2 flex-shrink-0"></div>
                                         <p className="text-gray-700 text-sm leading-relaxed">{item}</p>
                                       </li>
                                     ))}
                                   </ul>
                                 )}
                               </div>
                             ))}
                           </div>
                         )}
                         
                         {/* Section Illustration or Image Placeholder */}
                         <div className="mb-6">
                           {section.imagePlaceholder ? (
                             <div className="bg-gradient-to-br from-sky-500/10 to-blue-500/10 rounded-xl border border-sky-200 p-8 flex items-center justify-center">
                               <div className="text-center">
                                 <div className="w-16 h-16 bg-sky-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                                   <BarChart3 className="h-8 w-8 text-white" />
                                 </div>
                                 <h3 className="text-lg font-semibold text-gray-900 mb-2">Image Placeholder</h3>
                                 <p className="text-gray-600 text-sm mb-4">{section.imagePlaceholder}</p>
                                 <div className="text-xs text-gray-500 bg-white/50 px-3 py-1 rounded-full">
                                   Image will be added here
                                 </div>
                               </div>
                             </div>
                           ) : (
                             <BlogIllustration 
                               type={section.id === "problem-statement" ? "problem" : 
                                     section.id === "introduction" ? "ai-brain" :
                                     section.id === "engineering-goals" ? "data-pipeline" :
                                     section.id === "tech-stack" ? "architecture" :
                                     section.id === "gpt-prompt" ? "ai-brain" :
                                     section.id === "dashboard-features" ? "analytics" :
                                     section.id === "skill-matching" ? "problem" :
                                     section.id === "dashboard-design" ? "analytics" :
                                     section.id === "results" ? "results" :
                                     section.id === "conclusion" ? "problem" : "ai-brain"}
                             />
                           )}
                         </div>

                         {section.metrics && (
                           <div className="bg-gradient-to-r from-sky-50 to-blue-50 p-6 rounded-xl border border-sky-200 mb-6">
                             <h4 className="font-semibold text-gray-900 mb-4">Key Metrics:</h4>
                             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                               {section.metrics.map((metric: any) => (
                                 <div key={metric.label} className="text-center">
                                   <div className="text-3xl font-bold text-sky-600 mb-1">{metric.value}</div>
                                   <div className="text-gray-600 text-sm">{metric.label}</div>
                                 </div>
                               ))}
                             </div>
                           </div>
                         )}

                         {/* Final Note */}
                         {section.finalNote && (
                           <div className="bg-gradient-to-r from-sky-50 to-blue-50 p-6 rounded-xl border border-sky-200 mb-6">
                             <p className="text-gray-700 leading-relaxed italic">{section.finalNote}</p>
                           </div>
                         )}
                       </div>
                    </section>
                  )
                })}
              </div>

              {/* Demo Section */}
              <div className="mt-16 bg-gradient-to-r from-sky-50 to-blue-50 p-8 rounded-xl border border-sky-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Live Demo</h3>
                <p className="text-gray-700 mb-6">
                  Experience the {blog.title.split(':')[0]} in action with our interactive demo.
                </p>
                <Button
                  className="bg-sky-500 hover:bg-sky-600 text-white"
                  onClick={() => window.open(blog.demoUrl, "_blank")}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Live Demo
                </Button>
              </div>
            </div>

            {/* Table of Contents */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <Card className="border-sky-200">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Table of Contents</h3>
                    <nav className="space-y-2">
                      {blog.sections.map((section: any) => {
                        const SectionIcon = iconMap[section.icon as keyof typeof iconMap]
                        
                        return (
                          <button
                            key={section.id}
                            onClick={() => scrollToSection(section.id)}
                            className={`w-full text-left p-3 rounded-lg transition-all duration-200 flex items-center space-x-3 ${
                              activeSection === section.id
                                ? "bg-sky-100 text-sky-700 border border-sky-200"
                                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                            }`}
                          >
                            <SectionIcon className="h-4 w-4 flex-shrink-0" />
                            <span className="text-sm font-medium">{section.title}</span>
                          </button>
                        )
                      })}
                    </nav>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 