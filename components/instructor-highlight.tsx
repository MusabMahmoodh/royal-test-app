"use client"

import type React from "react"

import Image from "next/image"
import { useState } from "react"
import { motion } from "framer-motion"
import { GraduationCap, Award, Building, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface StudentEntry {
  name: string
  university: string
}

interface CategoryData {
  title: string
  icon: React.ReactNode
  students: StudentEntry[]
}

export function InstructorHighlight() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>("MEDICINE")

  const toggleCategory = (category: string) => {
    if (expandedCategory === category) {
      setExpandedCategory(null)
    } else {
      setExpandedCategory(category)
    }
  }

  const studentData: Record<string, CategoryData> = {
    ENGINEERING: {
      title: "Engineering",
      icon: <Building className="h-5 w-5" />,
      students: [
        { name: "Shaahid Ahmed", university: "University of Moratuwa" },
        { name: "Lukshan", university: "University of Moratuwa" },
        { name: "Viblash", university: "University of Moratuwa" },
        { name: "Danish Kumar", university: "University of Peradeniya" },
        { name: "Sujeewan", university: "University of Peradeniya" },
        { name: "Sahmy", university: "University of Peradeniya" },
        { name: "Riska", university: "University of Jayawardenapura" },
        { name: "Kalam", university: "University of Jayawardenapura" },
        { name: "Ouff", university: "University of Jayawardenapura" },
        { name: "Saiyaf", university: "University of Ruhunu" },
        { name: "Suvethan", university: "University of Ruhunu" },
        { name: "Thagsheka", university: "University of Ruhunu" },
        { name: "Ayad", university: "University of Ruhunu" },
        { name: "Raja", university: "University of Ruhunu" },
        { name: "Musny", university: "University of Ruhunu" },
        { name: "Asrar", university: "University of Jaffna" },
        { name: "Sujath", university: "University of Jaffna" },
      ],
    },
    "ENGINEERING (TM)": {
      title: "Engineering (TM)",
      icon: <Building className="h-5 w-5" />,
      students: [{ name: "Ilham", university: "University of Moratuwa" }],
    },
    "INFORMATION TECH": {
      title: "Information Technology",
      icon: <Building className="h-5 w-5" />,
      students: [{ name: "Shazan", university: "University of Moratuwa" }],
    },
    "COMPUTER SCIENCE": {
      title: "Computer Science",
      icon: <Building className="h-5 w-5" />,
      students: [{ name: "Shafiya sara", university: "Colombo University" }],
    },
    QS: {
      title: "Quantity Surveying",
      icon: <Building className="h-5 w-5" />,
      students: [{ name: "Hasbi", university: "University of Moratuwa" }],
    },
    "DATA SCIENCES": {
      title: "Data Sciences",
      icon: <Building className="h-5 w-5" />,
      students: [{ name: "Rahana", university: "University of Sabaragamuwa" }],
    },
    MEDICINE: {
      title: "Medicine",
      icon: <GraduationCap className="h-5 w-5" />,
      students: [
        { name: "Azman", university: "University of Colombo" },
        { name: "Rashidha", university: "University of Peradeniya" },
        { name: "Mifran", university: "University of Peradeniya" },
        { name: "Hima", university: "University of Peradeniya" },
        { name: "Thanjan", university: "University of Kelaniya" },
        { name: "Hana", university: "University of Kelaniya" },
        { name: "SAFAA", university: "University of Kelaniya" },
        { name: "Safni", university: "University of Ruhunu" },
        { name: "Hamda zainab", university: "University of Ruhunu" },
        { name: "Ashham", university: "University of Ruhunu" },
        { name: "Najma", university: "University of Ruhunu" },
        { name: "Shima", university: "University of Ruhunu" },
        { name: "Ayra", university: "University of Rajarata" },
        { name: "Nusha", university: "University of Rajarata" },
        { name: "Nuha", university: "University of Rajarata" },
        { name: "Safa", university: "University of Rajarata" },
        { name: "Nusha", university: "University of Rajarata" },
        { name: "Safiya Nazlin", university: "University of Rajarata" },
        { name: "Najeedha", university: "University of Wayamba" },
        { name: "Ifadha", university: "University of Rajarata" },
        { name: "Samha", university: "University of Wayamba" },
        { name: "Rashadh", university: "University of Jaffna" },
        { name: "Shukri", university: "University of Jaffna" },
        { name: "Nuha", university: "University of Jaffna" },
        { name: "Sahma", university: "University of Wayamba" },
        { name: "Rashika", university: "University of Wayamba" },
        { name: "ZUHA", university: "EASTERN UNIVERSITY" },
      ],
    },
    DENTAL: {
      title: "Dental",
      icon: <Award className="h-5 w-5" />,
      students: [
        { name: "Hanna", university: "University of Peradeniya" },
        { name: "Nivedha", university: "University of Peradeniya" },
      ],
    },
  }

  // Count total students
  const totalStudents = Object.values(studentData).reduce((total, category) => total + category.students.length, 0)

  // Count universities
  const universities = new Set()
  Object.values(studentData).forEach((category) => {
    category.students.forEach((student) => {
      universities.add(student.university)
    })
  })

  return (
    <div className="bg-gradient-to-r from-gold-50 to-white rounded-xl shadow-xl overflow-hidden">
      <div className="grid md:grid-cols-2 items-center">
        <div className="p-8 md:p-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-1 w-10 bg-primary"></div>
            <span className="text-primary font-medium">Featured Instructor</span>
          </div>

          <h2 className="text-3xl font-bold mb-4">Dr. H.S. Hifras, BDS(SL)</h2>
          <h3 className="text-xl text-gold-700 mb-6">Chemistry</h3>

          <div className="prose prose-sm text-gray-600 mb-6">
            <p className="italic">
              "Heartiest congratulations to all my amazing students who successfully secured university entrance after
              their hard work and dedication in the 2022 A/L exams! Your perseverance has paid off, and I'm incredibly
              proud of each one of you. Best of luck on this new chapter of your academic journey!"
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-gold-50 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-primary mb-1">{totalStudents}</div>
              <div className="text-sm text-muted-foreground">Students Placed</div>
            </div>
            <div className="bg-gold-50 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-primary mb-1">{universities.size}</div>
              <div className="text-sm text-muted-foreground">Universities</div>
            </div>
            <div className="bg-gold-50 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-primary mb-1">8</div>
              <div className="text-sm text-muted-foreground">Fields of Study</div>
            </div>
          </div>

          <div className="flex gap-3">
            <Button className="bg-primary hover:bg-gold-600">Contact Dr. Hifras</Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-gold-50">
              View Profile
            </Button>
          </div>
        </div>

        <div className="relative h-full bg-gradient-to-r from-gold-800 to-gold-600 flex items-center justify-center p-8 md:p-0">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
            <Image src="/images/dr-hifras.png" alt="Dr. H.S. Hifras" fill className="object-cover" />
          </div>
          <div className="absolute bottom-4 right-4 bg-white px-3 py-1 rounded-full text-xs font-medium shadow-md">
            ACADEMY OF SCIENCE & TECHNOLOGY
          </div>
        </div>
      </div>

      <div className="p-8 bg-white">
        <div className="mb-10">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gold-300"></div>
            <h3 className="text-2xl font-bold text-center">Student Achievements</h3>
            <div className="h-px w-12 bg-gold-300"></div>
          </div>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto">
            Our 2022 A/L Batch students have secured placements at prestigious universities across the country in
            various disciplines, demonstrating our commitment to academic excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Summary Statistics */}
          <motion.div
            className="bg-gradient-to-br from-gold-50 to-white rounded-xl p-6 shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h4 className="text-xl font-semibold mb-6 flex items-center">
              <Award className="h-5 w-5 text-primary mr-2" />
              Achievement Summary
            </h4>

            <div className="grid grid-cols-2 gap-4">
              {Object.entries(studentData).map(([key, category], index) => (
                <div key={key} className="flex items-center gap-3 p-3 rounded-lg bg-white shadow-sm">
                  <div className="bg-primary/10 p-2 rounded-full">{category.icon}</div>
                  <div>
                    <div className="font-bold text-2xl text-primary">{category.students.length}</div>
                    <div className="text-xs text-muted-foreground">{category.title}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-gold-100">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold text-primary">{totalStudents}</div>
                  <div className="text-sm text-muted-foreground">Total Placements</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">{universities.size}</div>
                  <div className="text-sm text-muted-foreground">Universities</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* University Distribution */}
          <motion.div
            className="bg-gradient-to-br from-gold-50 to-white rounded-xl p-6 shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-xl font-semibold mb-6 flex items-center">
              <Building className="h-5 w-5 text-primary mr-2" />
              University Distribution
            </h4>

            <div className="space-y-4">
              {Array.from(universities)
                .slice(0, 5)
                .map((university, index) => {
                  // Count students per university
                  const count = Object.values(studentData).reduce((total, category) => {
                    return total + category.students.filter((student) => student.university === university).length
                  }, 0)

                  // Calculate percentage
                  const percentage = Math.round((count / totalStudents) * 100)

                  return (
                    <div key={index} className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">{university}</span>
                        <span className="text-primary font-semibold">{count} students</span>
                      </div>
                      <div className="w-full bg-gold-100 rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: `${percentage}%` }}></div>
                      </div>
                    </div>
                  )
                })}

              {universities.size > 5 && (
                <div className="text-center mt-4">
                  <Button variant="outline" size="sm" className="text-xs">
                    View All {universities.size} Universities
                  </Button>
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Discipline Tabs */}
        <div className="mb-12">
          <div className="flex overflow-x-auto pb-2 mb-6 scrollbar-hide">
            <div className="flex space-x-2">
              {Object.entries(studentData).map(([key, category]) => (
                <button
                  key={key}
                  onClick={() => setExpandedCategory(key)}
                  className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-colors ${
                    expandedCategory === key
                      ? "bg-primary text-primary-foreground"
                      : "bg-gold-50 text-gray-700 hover:bg-gold-100"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {category.icon}
                    <span>{category.title}</span>
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white/20 text-xs">
                      {category.students.length}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Student Grid */}
          {expandedCategory && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              <div className="bg-white rounded-xl shadow-md p-6 mb-6">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-xl font-semibold flex items-center gap-2">
                    {studentData[expandedCategory].icon}
                    {studentData[expandedCategory].title} Students
                    <Badge className="ml-2 bg-primary">{studentData[expandedCategory].students.length}</Badge>
                  </h4>
                  <Button variant="outline" size="sm" onClick={() => setExpandedCategory(null)}>
                    View All Disciplines
                  </Button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {studentData[expandedCategory].students.map((student, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.03 }}
                      className="bg-gradient-to-br from-gold-50 to-white p-4 rounded-lg border border-gold-100 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start gap-3">
                        <div className="bg-primary/10 rounded-full p-2 text-primary">
                          <GraduationCap className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="font-medium">{student.name}</div>
                          <div className="text-sm text-muted-foreground">{student.university}</div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>

        <div className="flex items-center justify-center gap-6 p-6 bg-gold-50 rounded-xl">
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-2">For inquiries about Chemistry classes</p>
            <div className="font-medium text-primary text-lg">077 227 93 37</div>
          </div>
          <div className="h-12 w-px bg-gold-200"></div>
          <Button className="bg-primary hover:bg-gold-600">
            <Phone className="h-4 w-4 mr-2" />
            Contact Dr. Hifras
          </Button>
        </div>
      </div>
    </div>
  )
}

