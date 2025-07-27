"use client"

import { Brain, Shield, Database, Server, BarChart3, TrendingUp, Target } from "lucide-react"

interface BlogIllustrationProps {
  type: string
  className?: string
}

export default function BlogIllustration({ type, className = "" }: BlogIllustrationProps) {
  const illustrations = {
    "ai-brain": (
      <div className={`w-full h-64 bg-gradient-to-br from-sky-500/10 to-blue-500/10 rounded-xl border border-sky-200 flex items-center justify-center ${className}`}>
        <div className="text-center">
          <Brain className="h-16 w-16 text-sky-500 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Processing</h3>
          <p className="text-gray-600 text-sm">GPT-4 powered analysis</p>
        </div>
      </div>
    ),
    "fraud-detection": (
      <div className={`w-full h-64 bg-gradient-to-br from-sky-500/10 to-blue-500/10 rounded-xl border border-sky-200 flex items-center justify-center ${className}`}>
        <div className="text-center">
          <Shield className="h-16 w-16 text-sky-500 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Hybrid Fraud Detection</h3>
          <p className="text-gray-600 text-sm">Rule-based + ML approach</p>
        </div>
      </div>
    ),
    "data-pipeline": (
      <div className={`w-full h-64 bg-gradient-to-br from-sky-500/10 to-blue-500/10 rounded-xl border border-sky-200 flex items-center justify-center ${className}`}>
        <div className="text-center">
          <Database className="h-16 w-16 text-sky-500 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Data Pipeline</h3>
          <p className="text-gray-600 text-sm">Scalable processing</p>
        </div>
      </div>
    ),
    "architecture": (
      <div className={`w-full h-64 bg-gradient-to-br from-sky-500/10 to-blue-500/10 rounded-xl border border-sky-200 flex items-center justify-center ${className}`}>
        <div className="text-center">
          <Server className="h-16 w-16 text-sky-500 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">System Architecture</h3>
          <p className="text-gray-600 text-sm">Production ready</p>
        </div>
      </div>
    ),
    "analytics": (
      <div className={`w-full h-64 bg-gradient-to-br from-sky-500/10 to-blue-500/10 rounded-xl border border-sky-200 flex items-center justify-center ${className}`}>
        <div className="text-center">
          <BarChart3 className="h-16 w-16 text-sky-500 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Analytics Dashboard</h3>
          <p className="text-gray-600 text-sm">Interactive insights</p>
        </div>
      </div>
    ),
    "results": (
      <div className={`w-full h-64 bg-gradient-to-br from-sky-500/10 to-blue-500/10 rounded-xl border border-sky-200 flex items-center justify-center ${className}`}>
        <div className="text-center">
          <TrendingUp className="h-16 w-16 text-sky-500 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Performance Results</h3>
          <p className="text-gray-600 text-sm">Measurable impact</p>
        </div>
      </div>
    ),
    "problem": (
      <div className={`w-full h-64 bg-gradient-to-br from-sky-500/10 to-blue-500/10 rounded-xl border border-sky-200 flex items-center justify-center ${className}`}>
        <div className="text-center">
          <Target className="h-16 w-16 text-sky-500 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Problem Statement</h3>
          <p className="text-gray-600 text-sm">Clear objectives</p>
        </div>
      </div>
    )
  }

  return illustrations[type as keyof typeof illustrations] || (
    <div className={`w-full h-64 bg-gradient-to-br from-sky-500/10 to-blue-500/10 rounded-xl border border-sky-200 flex items-center justify-center ${className}`}>
      <div className="text-center">
        <div className="h-16 w-16 bg-sky-500 rounded-full mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Illustration</h3>
        <p className="text-gray-600 text-sm">Visual content</p>
      </div>
    </div>
  )
} 