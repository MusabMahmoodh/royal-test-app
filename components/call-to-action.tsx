"use client"
import { ArrowRight } from "lucide-react"

interface CallToActionProps {
  text: string
  onClick?: () => void
  className?: string
}

export function CallToAction({ text, onClick, className = "" }: CallToActionProps) {
  return (
    <div className="text-center">
      <button
        onClick={onClick}
        className={`inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:bg-gold-600 transition-colors cursor-pointer group ${className}`}
      >
        <span>{text}</span>
        <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  )
}

