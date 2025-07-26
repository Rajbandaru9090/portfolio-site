"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Mail, Linkedin, Github, Menu, X, Rocket, Database, Cloud, Brain, Shield, BarChart3, ArrowRight, FileText, ExternalLink, Download } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

const LINKEDIN = "https://www.linkedin.com/in/raju-bandaru-216209337"
const GITHUB = "https://github.com/Rajbandaru9090"

const projects = [
  {
    title: "AI Resume Screener",
    icon: <Brain className="mr-3 h-6 w-6 text-sky-500" />,
    badge: "GPT-4",
    description: "AI-powered resume screener with PDF parsing, radar chart skill match, and GPT bullet scoring.",
    tech: ["OpenAI GPT-4", "Streamlit", "PDF Parser", "Radar Chart"],
    demo: "https://ai-resume-screener-gkoqrvoaywyqr39qmxqrtt.streamlit.app/",
    github: `${GITHUB}/ai-resume-screener`,
    slug: "resumescreener",
  },
  {
    title: "RetailX – Fraud & Sales Intelligence Dashboard (3M+ Orders)",
    icon: <Shield className="mr-3 h-6 w-6 text-sky-500" />,
    badge: "Fraud Detection",
    description: "Databricks-powered AI assistant for fraud detection with fraud score visuals and chat UI.",
    tech: ["Databricks", "Apache Spark", "GPT", "Streamlit"],
    demo: "https://databricksfraudai-eabvl6ka4zbnpwegezffec.streamlit.app/",
    github: `${GITHUB}/Databricks_Fraud_ai`,
    slug: "retailx",
  },
  {
    title: "DataAgent – GPT-Powered Sales Intelligence Assistant",
    icon: <BarChart3 className="mr-3 h-6 w-6 text-sky-500" />,
    badge: "Data Agent",
    description: "GPT-integrated business intelligence agent for real-time sales data analysis.",
    tech: ["GPT Integration", "Real-time Data", "Business Intelligence", "Streamlit"],
    demo: "#",
    github: "#",
    slug: "dataagent",
  },
  {
    title: "CloudSecure: Enterprise AWS Data Architecture",
    icon: <Cloud className="mr-3 h-6 w-6 text-sky-500" />,
    badge: "AWS",
    description: "Production-ready AWS cloud infra with badge-style elements for RDS, S3, VPC, EC2, etc.",
    tech: ["EC2", "RDS", "ALB", "VPC", "AWS CLI", "S3"],
    demo: "#",
    github: `${GITHUB}/aws_mini_projects`,
    slug: "cloudsecure",
  },
]

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormData({ name: "", email: "", message: "" })
  }

  const handleResumeDownload = () => {
    // You can replace this with your actual resume URL
    // Option 1: Direct download (add your resume.pdf to public folder)
    // window.open("/resume.pdf", "_blank")
    
    // Option 2: External link (replace with your resume URL)
    window.open("https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing", "_blank")
    
    // Option 3: Show alert for now
    alert("Please add your resume PDF to the public folder or update the URL in the code!")
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="font-sans bg-gradient-to-br from-sky-50 to-gray-100 min-h-screen text-gray-900">
      {/* Navbar */}
      <motion.nav initial={{ y: -80 }} animate={{ y: 0 }} transition={{ duration: 0.6, type: "spring" }} className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur border-b border-sky-100 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
              <Database className="h-8 w-8 text-sky-500" />
              <span className="text-xl font-bold text-gray-900 tracking-tight">Raju Bandaru</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection("hero")} className="nav-link">Home</button>
              <button onClick={() => scrollToSection("projects")} className="nav-link">Projects</button>
              <button onClick={() => scrollToSection("connect")} className="nav-link">Connect</button>
              <Button variant="outline" size="sm" className="border-sky-200 text-sky-600 hover:bg-sky-50 hover:border-sky-300 bg-transparent" onClick={handleResumeDownload}>
                <Download className="mr-2 h-4 w-4" />
                Resume
              </Button>
              <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition"><Linkedin className="h-6 w-6 text-sky-500" /></a>
              <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition"><Github className="h-6 w-6 text-sky-500" /></a>
            </div>
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-sky-500">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
          {isMenuOpen && (
            <div className="md:hidden animate-fadeInDown">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-sky-100">
                <button onClick={() => scrollToSection("hero")} className="block px-3 py-2 nav-link w-full text-left">Home</button>
                <button onClick={() => scrollToSection("projects")} className="block px-3 py-2 nav-link w-full text-left">Projects</button>
                <button onClick={() => scrollToSection("connect")} className="block px-3 py-2 nav-link w-full text-left">Connect</button>
                <button className="block px-3 py-2 w-full text-left hover:text-sky-500 border-t border-sky-100 pt-2 mt-2" onClick={handleResumeDownload}>
                  <Download className="h-5 w-5 inline mr-2 text-sky-500" />
                  Download Resume
                </button>
                <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="block px-3 py-2 w-full text-left hover:text-sky-500"><Linkedin className="h-6 w-6 inline mr-2 text-sky-500" />LinkedIn</a>
                <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="block px-3 py-2 w-full text-left hover:text-sky-500"><Github className="h-6 w-6 inline mr-2 text-sky-500" />GitHub</a>
              </div>
            </div>
          )}
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center min-h-[80vh]">
        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Raju Bandaru
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }} className="text-2xl md:text-3xl text-sky-600 font-semibold mb-6">
          AI x Data Engineer | GPT-Powered App Builder | SQL + Cloud Enthusiast
        </motion.p>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.7 }} className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
          Building real-world AI solutions with Databricks, GPT-4, Streamlit, and AWS. Passionate about transforming data into impact.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.7 }} className="flex space-x-6 mb-8 justify-center">
          <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="hover:shadow-lg hover:scale-110 transition rounded-full p-2 bg-white"><Linkedin className="h-8 w-8 text-sky-500" /></a>
          <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="hover:shadow-lg hover:scale-110 transition rounded-full p-2 bg-white"><Github className="h-8 w-8 text-sky-500" /></a>
        </motion.div>
        <motion.button whileHover={{ scale: 1.08 }} className="px-8 py-3 bg-sky-500 text-white rounded-full font-bold text-lg shadow-lg hover:bg-gradient-to-r from-sky-500 to-blue-500 hover:scale-105 transition border-2 border-transparent hover:border-sky-400" onClick={() => scrollToSection('projects')}>
          Explore Projects
        </motion.button>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-sky-50">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Showcasing end-to-end solutions in AI, cloud architecture, and data engineering</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((proj, idx) => (
              <Link key={proj.title} href={`/projects/${proj.slug}`} className="group block h-full">
                <motion.div whileHover={{ scale: 1.04, boxShadow: "0 8px 32px 0 rgba(14,165,233,0.15)" }} className="h-full">
                  <Card className="bg-white border-2 border-transparent group-hover:border-sky-400 group-hover:shadow-2xl transition-all duration-300 rounded-2xl overflow-hidden flex flex-col h-full">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-2xl text-gray-900 flex items-center">{proj.icon}{proj.title}</CardTitle>
                        <Badge className="bg-sky-100 text-sky-700 border-sky-200">{proj.badge}</Badge>
                      </div>
                      <CardDescription className="text-gray-600 text-lg">{proj.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col justify-between">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {proj.tech.map((t) => (
                          <Badge key={t} className="bg-gray-100 text-gray-700 border border-sky-100">{t}</Badge>
                        ))}
                      </div>
                      <div className="flex space-x-2">
                        {proj.demo && proj.demo !== "#" && (
                          <Button className="flex-1 bg-sky-500 hover:bg-sky-600 text-white" onClick={() => window.open(proj.demo, "_blank")}> <ExternalLink className="mr-2 h-4 w-4" /> Demo </Button>
                        )}
                        {proj.github && proj.github !== "#" && (
                          <Button variant="outline" className="flex-1 border-sky-200 text-sky-600 hover:bg-sky-50 hover:border-sky-300 bg-transparent" onClick={() => window.open(proj.github, "_blank")}> <Github className="mr-2 h-4 w-4" /> GitHub </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Connect Section */}
      <section id="connect" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Let's Connect</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Ready to discuss data science projects, cloud architecture, or AI implementations? Let's build something amazing together.</p>
          </div>
          <div className="grid md:grid-cols-1 gap-12 items-start">
            {/* Contact Info */}
            <div className="space-y-8 animate-fadeInUp">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Get in Touch</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">Open to internships and collaboration opportunities in AI/ML, data science, and cloud architecture.</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-sky-50 rounded-lg border border-sky-100">
                  <Mail className="h-6 w-6 text-sky-500" />
                  <div>
                    <p className="text-gray-900 font-medium">Email</p>
                    <p className="text-gray-600">rajbandaru1201@gmail.com</p>
                  </div>
                </div>
                <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 p-4 bg-sky-50 rounded-lg border border-sky-100 hover:shadow-md transition">
                  <Linkedin className="h-6 w-6 text-sky-500" />
                  <div>
                    <p className="text-gray-900 font-medium">LinkedIn</p>
                    <p className="text-gray-600">Connect for professional networking</p>
                  </div>
                </a>
                <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 p-4 bg-sky-50 rounded-lg border border-sky-100 hover:shadow-md transition">
                  <Github className="h-6 w-6 text-sky-500" />
                  <div>
                    <p className="text-gray-900 font-medium">GitHub</p>
                    <p className="text-gray-600">Explore my code repositories</p>
                  </div>
                </a>
              </div>
              <div className="bg-gradient-to-r from-sky-50 to-blue-50 p-6 rounded-lg border border-sky-100">
                <h4 className="font-semibold text-gray-900 mb-2">Available For:</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Data Science Internships</li>
                  <li>• Cloud Architecture Projects</li>
                  <li>• AI/ML Collaborations</li>
                  <li>• Freelance Consulting</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5 text-sky-500" />
              <span className="text-gray-700">rajbandaru1201@gmail.com</span>
            </div>
            <div className="flex space-x-4">
              <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-sky-500 transition"><Linkedin className="h-5 w-5" /></a>
              <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-sky-500 transition"><Github className="h-5 w-5" /></a>
            </div>
          </div>
          <div className="text-center mt-4">
            <p className="text-gray-500 text-sm">© 2024 Raju Bandaru. Built with passion for data and innovation.</p>
          </div>
        </div>
      </footer>

      {/* Custom Styles for nav-link */}
      <style jsx global>{`
        .nav-link {
          @apply text-gray-600 hover:text-sky-500 transition-colors font-medium relative px-2 py-1;
        }
        .nav-link::after {
          content: '';
          display: block;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #0ea5e9 0%, #6366f1 100%);
          transition: width 0.3s;
          position: absolute;
          left: 0;
          bottom: 0;
        }
        .nav-link:hover::after {
          width: 100%;
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.7s;
        }
        .animate-fadeInDown {
          animation: fadeInDown 0.7s;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-40px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}
