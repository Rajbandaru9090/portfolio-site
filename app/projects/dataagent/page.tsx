import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function DataAgent() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-4 animate-fadeInUp">
      <h1 className="text-4xl font-bold mb-2 text-sky-600">DataAgent</h1>
      <h2 className="text-xl text-gray-700 mb-6">GPT-Powered Sales Intelligence Assistant</h2>
      <p className="mb-6 text-gray-800">Intelligent business data agent using Streamlit + GPT to answer real-time business questions and enable interactive data storytelling for business teams.</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {["Streamlit", "OpenAI GPT", "Charting", "File Upload", "Data Storytelling"].map(t => <Badge key={t}>{t}</Badge>)}
      </div>
      <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
        <li>Built an intelligent business data agent using Streamlit + GPT to answer real-time questions like “Sales trends by region this month.”</li>
        <li>Integrated charting, file upload, and GPT interaction for interactive exploration of structured datasets.</li>
        <li>Designed for business teams to gain insights without writing code — built for data storytelling.</li>
      </ul>
      <div className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 text-xl">Image Placeholder</div>
    </div>
  )
} 