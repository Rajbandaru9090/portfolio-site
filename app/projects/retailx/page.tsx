import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

export default function RetailX() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-4 animate-fadeInUp">
      <h1 className="text-4xl font-bold mb-2 text-sky-600">RetailX</h1>
      <h2 className="text-xl text-gray-700 mb-6">Fraud & Sales Intelligence Dashboard (3M+ Orders)</h2>
      <p className="mb-6 text-gray-800">AI-powered dashboard that processed 3M+ grocery orders using PySpark + Delta Lake, enabling 5x faster query performance and advanced fraud detection with GPT integration.</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {["PySpark", "Delta Lake", "Streamlit", "OpenAI GPT", "Unsupervised ML", "Isolation Forest", "KMeans", "Heatmaps"].map(t => <Badge key={t}>{t}</Badge>)}
      </div>
      <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
        <li>Built RetailX, an AI-powered dashboard that processed 3M+ grocery orders using PySpark + Delta Lake, enabling 5x faster query performance through caching, partitioning, and storage optimization.</li>
        <li>Developed a fraud detection system combining rule-based logic with unsupervised ML (Isolation Forest, KMeans), achieving 92% anomaly detection precision and identifying 2,300+ high-risk transactions.</li>
        <li>Designed a GPT-integrated assistant using OpenAI API to support natural language business queries (e.g., "Top 5 categories with high fraud"), enabling AI-driven decision-making.</li>
        <li>Delivered real-time Streamlit dashboards with advanced filtering (region, category, time, fraud level), fraud heatmaps, and 15+ KPIs like revenue leakage and churn hotspots.</li>
      </ul>
      <div className="flex gap-4 mb-8">
        <Button asChild variant="outline"><a href="https://github.com/Rajbandaru9090/Databricks_Fraud_ai" target="_blank" rel="noopener noreferrer"><Github className="mr-2 h-4 w-4" /> GitHub</a></Button>
      </div>
      <div className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 text-xl">Image Placeholder</div>
    </div>
  )
} 