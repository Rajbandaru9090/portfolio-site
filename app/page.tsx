"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Mail,
  Linkedin,
  Github,
  ExternalLink,
  Menu,
  X,
  Rocket,
  Database,
  Cloud,
  Brain,
  Shield,
  BarChart3,
  ArrowRight,
} from "lucide-react"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", message: "" })
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-sky-100 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Database className="h-8 w-8 text-sky-500" />
              <span className="text-xl font-bold text-gray-900">DataCloud Pro</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-gray-600 hover:text-sky-500 transition-colors font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-gray-600 hover:text-sky-500 transition-colors font-medium"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("connect")}
                className="text-gray-600 hover:text-sky-500 transition-colors font-medium"
              >
                Connect
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-sky-500">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-sky-100">
                <button
                  onClick={() => scrollToSection("hero")}
                  className="block px-3 py-2 text-gray-600 hover:text-sky-500 transition-colors w-full text-left font-medium"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="block px-3 py-2 text-gray-600 hover:text-sky-500 transition-colors w-full text-left font-medium"
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection("connect")}
                  className="block px-3 py-2 text-gray-600 hover:text-sky-500 transition-colors w-full text-left font-medium"
                >
                  Connect
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side Content */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
                  <span className="text-sky-500">Data + Cloud</span>
                  <br />
                  Enthusiast 🚀
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 font-medium mb-6">
                  Transforming Raw Data into Real Impact
                </p>
                <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
                  I'm a passionate data enthusiast skilled in building AI-powered applications and cloud-based
                  infrastructures. I specialize in transforming real-world problems into intelligent systems using
                  scalable pipelines, large-scale datasets, and AWS architectures.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-sky-500" />
                  <span className="text-gray-700 font-medium">rajbandaru1201@gmail.com</span>
                </div>
                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-sky-200 text-sky-600 hover:bg-sky-50 hover:border-sky-300 bg-transparent"
                    onClick={() => window.open("#", "_blank")}
                  >
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-sky-200 text-sky-600 hover:bg-sky-50 hover:border-sky-300 bg-transparent"
                    onClick={() => window.open("#", "_blank")}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Side - Explore Projects Card */}
            <div className="flex justify-center lg:justify-end">
              <Card
                className="w-full max-w-md bg-gradient-to-br from-sky-50 to-blue-50 border-sky-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer group"
                onClick={() => scrollToSection("projects")}
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-sky-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-sky-600 transition-colors">
                      <Rocket className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Explore Projects</h3>
                    <p className="text-gray-600">
                      Discover my latest work in AI, cloud infrastructure, and data engineering
                    </p>
                  </div>
                  <div className="flex items-center justify-center text-sky-500 group-hover:text-sky-600 transition-colors">
                    <span className="font-medium mr-2">View Portfolio</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Showcasing end-to-end solutions in AI, cloud architecture, and data engineering
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Project 1: RetailX AI */}
            <Card className="bg-white border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl text-gray-900 flex items-center">
                    <Shield className="mr-3 h-6 w-6 text-sky-500" />
                    RetailX AI
                  </CardTitle>
                  <Badge className="bg-sky-100 text-sky-700 border-sky-200">Fraud Detection</Badge>
                </div>
                <CardDescription className="text-gray-600 text-lg">Databricks-powered AI Application</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Databricks-powered fraud detection AI app using 3M+ rows Instacart dataset. Features data cleaning,
                  Spark processing, LLM-based fraud reasoning, and GPT dashboard integration.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                    Databricks
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                    Apache Spark
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                    GPT
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                    Streamlit
                  </Badge>
                </div>
                <Button
                  className="w-full bg-sky-500 hover:bg-sky-600 text-white"
                  onClick={() =>
                    window.open("https://databricksfraudai-eabvl6ka4zbnpwegezffec.streamlit.app/", "_blank")
                  }
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </Button>
              </CardContent>
            </Card>

            {/* Project 2: AI Resume Screener */}
            <Card className="bg-white border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl text-gray-900 flex items-center">
                    <Brain className="mr-3 h-6 w-6 text-sky-500" />
                    AI Resume Screener
                  </CardTitle>
                  <Badge className="bg-sky-100 text-sky-700 border-sky-200">GPT-4</Badge>
                </div>
                <CardDescription className="text-gray-600 text-lg">Intelligent Talent Matching System</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  GPT-powered resume scoring app with visual skill match, radar plots, and JD matching. Built with
                  Streamlit, OpenAI API, and advanced PDF parsing capabilities.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                    OpenAI GPT
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                    Streamlit
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                    PDF Parser
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                    Radar Charts
                  </Badge>
                </div>
                <Button
                  className="w-full bg-sky-500 hover:bg-sky-600 text-white"
                  onClick={() =>
                    window.open("https://ai-resume-screener-gkoqrvoaywyqr39qmxqrtt.streamlit.app/", "_blank")
                  }
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </Button>
              </CardContent>
            </Card>

            {/* Project 3: Streamlit Sales Agent */}
            <Card className="bg-white border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl text-gray-900 flex items-center">
                    <BarChart3 className="mr-3 h-6 w-6 text-sky-500" />
                    Streamlit Sales Agent
                  </CardTitle>
                  <Badge className="bg-sky-100 text-sky-700 border-sky-200">Data Agent</Badge>
                </div>
                <CardDescription className="text-gray-600 text-lg">
                  GPT-Integrated Business Intelligence
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  A GPT-integrated data agent that answers business queries based on real-time sales data. Features
                  advanced data cleaning, analysis, and user-driven insights via intuitive UI.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                    GPT Integration
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                    Real-time Data
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                    Business Intelligence
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                    Streamlit
                  </Badge>
                </div>
                <Button
                  className="w-full bg-sky-500 hover:bg-sky-600 text-white"
                  onClick={() => window.open("#", "_blank")}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Demo Coming Soon
                </Button>
              </CardContent>
            </Card>

            {/* Project 4: AWS Cloud Infrastructure */}
            <Card className="bg-white border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl text-gray-900 flex items-center">
                    <Cloud className="mr-3 h-6 w-6 text-sky-500" />
                    AWS Cloud Infra Skeleton
                  </CardTitle>
                  <Badge className="bg-sky-100 text-sky-700 border-sky-200">AWS</Badge>
                </div>
                <CardDescription className="text-gray-600 text-lg">Production-Ready Cloud Architecture</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  A fully functional multi-tier AWS cloud infrastructure project that mimics real-world production
                  setups.
                </p>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Custom VPC (172.30.0.0/16)</li>
                    <li>• Public Subnets for ALB, Bastion Host</li>
                    <li>• Private Subnets for EC2, RDS PostgreSQL</li>
                    <li>• Route Tables, Security Groups, NAT, IGW</li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                    EC2
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                    RDS
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                    ALB
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                    VPC
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                    AWS CLI
                  </Badge>
                </div>
                <Button
                  className="w-full bg-sky-500 hover:bg-sky-600 text-white"
                  onClick={() => window.open("#", "_blank")}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Architecture
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section id="connect" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Let's Connect</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to discuss data science projects, cloud architecture, or AI implementations? Let's build something
              amazing together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <Card className="bg-white border-gray-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Send a Message</CardTitle>
                <CardDescription className="text-gray-600">I'll get back to you within 24 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="border-gray-300 focus:border-sky-500 focus:ring-sky-500"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="border-gray-300 focus:border-sky-500 focus:ring-sky-500"
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="border-gray-300 focus:border-sky-500 focus:ring-sky-500 min-h-[120px]"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-sky-500 hover:bg-sky-600 text-white py-3">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Get in Touch</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Open to internships and collaboration opportunities in AI/ML, data science, and cloud architecture.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-sky-50 rounded-lg border border-sky-100">
                  <Mail className="h-6 w-6 text-sky-500" />
                  <div>
                    <p className="text-gray-900 font-medium">Email</p>
                    <p className="text-gray-600">rajbandaru1201@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-sky-50 rounded-lg border border-sky-100">
                  <Linkedin className="h-6 w-6 text-sky-500" />
                  <div>
                    <p className="text-gray-900 font-medium">LinkedIn</p>
                    <p className="text-gray-600">Connect for professional networking</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-sky-50 rounded-lg border border-sky-100">
                  <Github className="h-6 w-6 text-sky-500" />
                  <div>
                    <p className="text-gray-900 font-medium">GitHub</p>
                    <p className="text-gray-600">Explore my code repositories</p>
                  </div>
                </div>
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
        </div>
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
              <button
                className="text-gray-600 hover:text-sky-500 transition-colors"
                onClick={() => window.open("#", "_blank")}
              >
                <Linkedin className="h-5 w-5" />
              </button>
              <button
                className="text-gray-600 hover:text-sky-500 transition-colors"
                onClick={() => window.open("#", "_blank")}
              >
                <Github className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="text-center mt-4">
            <p className="text-gray-500 text-sm">
              © 2024 Raju Bandaru - DataCloud Pro. Built with passion for data and innovation.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
