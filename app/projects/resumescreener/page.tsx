import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

export default function ResumeScreener() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-4 animate-fadeInUp">
      <h1 className="text-4xl font-bold mb-2 text-sky-600">AI Resume Screener</h1>
      <h2 className="text-xl text-gray-700 mb-6">GPT, Streamlit, Skill Matching Dashboard</h2>
      <p className="mb-6 text-gray-800">GPT-powered ATS screener to analyze and score resumes against job descriptions using skill extraction, semantic matching, and prompt engineering. Visualizes matched vs missing skills with radar charts.</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {["OpenAI GPT", "Streamlit", "Radar Chart", "PDF Parser", "Batch Processing"].map(t => <Badge key={t}>{t}</Badge>)}
      </div>
      <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
        <li>Developed a GPT-powered ATS screener to analyze and score 20+ resumes against job descriptions using skill extraction, semantic matching, and prompt engineering.</li>
        <li>Built a Streamlit dashboard with advanced filtering, heatmaps, and radar charts to visualize matched vs missing resume keywords.</li>
        <li>Enabled batch processing and CSV downloads with a deployable architecture on Streamlit Cloud — built entirely for data roles (not general AI).</li>
      </ul>
      <div className="flex gap-4 mb-8">
        <Button asChild variant="outline"><a href="https://github.com/Rajbandaru9090/ai-resume-screener" target="_blank" rel="noopener noreferrer"><Github className="mr-2 h-4 w-4" /> GitHub</a></Button>
      </div>
      <div className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 text-xl">Image Placeholder</div>
    </div>
  )
} 