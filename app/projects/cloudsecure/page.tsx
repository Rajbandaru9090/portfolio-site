import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function CloudSecure() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-4 animate-fadeInUp">
      <h1 className="text-4xl font-bold mb-2 text-sky-600">CloudSecure</h1>
      <h2 className="text-xl text-gray-700 mb-6">Enterprise AWS Data Architecture</h2>
      <p className="mb-6 text-gray-800">Production-grade AWS architecture using VPC, EC2, RDS, ALB, and NAT Gateway for high-availability, secure, and scalable data deployments.</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {["AWS", "VPC", "EC2", "RDS", "ALB", "S3", "CloudWatch", "Bastion Host", "NAT Gateway"].map(t => <Badge key={t}>{t}</Badge>)}
      </div>
      <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
        <li>Production-grade AWS architecture using VPC with public/private subnets, EC2, RDS, ALB, and NAT Gateway for high-availability deployments.</li>
        <li>Designed a secure 3-tier system with S3 logging and Amazon CloudWatch for monitoring, integrating with internal data pipelines.</li>
        <li>Demonstrates AWS mastery across compute, storage, networking, and monitoring, suitable for large-scale ETL and analytics solutions.</li>
        <li>Includes Bastion Host for secure access, NAT for private EC2, and redundant availability zones.</li>
      </ul>
      <div className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 text-xl">Image Placeholder</div>
    </div>
  )
} 