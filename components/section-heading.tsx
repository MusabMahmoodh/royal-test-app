interface SectionHeadingProps {
  badge?: string
  title: string
  description?: string
  centered?: boolean
  className?: string
}

export function SectionHeading({ badge, title, description, centered = true, className = "" }: SectionHeadingProps) {
  return (
    <div className={`${centered ? "text-center" : ""} mb-10 ${className}`}>
      {badge && (
        <span className="inline-block px-3 py-1 bg-gold-100 text-gold-800 rounded-full text-sm font-semibold mb-2">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{title}</h2>
      <div className={`w-24 h-1 bg-primary mb-6 ${centered ? "mx-auto" : ""}`}></div>
      {description && <p className={`${centered ? "max-w-2xl mx-auto" : ""} text-muted-foreground`}>{description}</p>}
    </div>
  )
}

