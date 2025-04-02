import { Activity, GraduationCap, Ruler, TrendingUp } from "lucide-react"

interface SuccessCardProps {
  value: string
  label: string
  description: string
  icon: string
  accentColor: string
  lightColor: string
}

export function SuccessCard({ value, label, description, icon, accentColor, lightColor }: SuccessCardProps) {
  // Map icon names to components
  const iconMap = {
    Activity: <Activity className="text-green-600 h-8 w-8" />,
    GraduationCap: <GraduationCap className="text-amber-600 h-8 w-8" />,
    Ruler: <Ruler className="text-blue-600 h-8 w-8" />,
    TrendingUp: <TrendingUp className="text-purple-600 h-8 w-8" />,
  }

  const IconComponent = iconMap[icon] || null

  return (
    <div className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1">
      <div className={`absolute top-0 left-0 w-full h-1 ${accentColor}`}></div>
      <div className="p-6">
        <div
          className={`w-16 h-16 ${lightColor} rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-opacity-70 transition-colors`}
        >
          {IconComponent}
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center">
            <span
              className={`text-5xl font-bold ${accentColor.replace("bg-", "text-")} mr-1 group-hover:scale-110 transition-transform`}
            >
              {value.replace(/[^0-9]/g, "")}
            </span>
            <span className="text-lg text-gray-500">{value.includes("+") ? "+" : value.includes("%") ? "%" : ""}</span>
          </div>
          <h3 className="text-xl font-bold mt-2 mb-1">{label}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
      <div
        className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${accentColor.replace("bg-", "from-").replace("600", "400")} ${accentColor.replace("bg-", "to-")} transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left`}
      ></div>
    </div>
  )
}

