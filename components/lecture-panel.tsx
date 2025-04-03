"use client"

import type React from "react"

import { motion } from "framer-motion"
import {
  GraduationCap,
  BookOpen,
  FlaskRoundIcon as Flask,
  Calculator,
  Phone,
  ArrowRight,
  Mail,
  Award,
  Clock,
  MapPin,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

interface LecturerInfo {
  subject: string
  name: string
  qualification: string
  icon: React.ReactNode
  description: string
  experience: string
  specialization: string
  email: string
  phone: string
}

export function LecturePanel() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const lecturers: LecturerInfo[] = [
    {
      subject: "CHEMISTRY",
      name: "DR. H.S. HIFRAS",
      qualification: "BDS(SL)",
      icon: <Flask className="h-10 w-10" />,
      description:
        "Expert in organic and inorganic chemistry with specialized knowledge in chemical bonding and reaction mechanisms.",
      experience: "15+ years teaching experience",
      specialization: "Organic Chemistry, Chemical Bonding",
      email: "hifras@royalacademy.lk",
      phone: "077 227 9337",
    },
    {
      subject: "PHYSICS",
      name: "ENG. F.M. FAZIL",
      qualification: "B.Sc (Eng), Mons, AMIE(SL)",
      icon: <BookOpen className="h-10 w-10" />,
      description:
        "Specialized in mechanics and electromagnetism with a strong background in engineering applications of physics.",
      experience: "12+ years teaching experience",
      specialization: "Mechanics, Electromagnetism",
      email: "fazil@royalacademy.lk",
      phone: "070 115 5333",
    },
    {
      subject: "BIOLOGY",
      name: "MR. J.M. SAJEEN",
      qualification: "B.Sc, BIT",
      icon: <GraduationCap className="h-10 w-10" />,
      description: "Expert in molecular biology and genetics with a focus on cellular processes and human physiology.",
      experience: "10+ years teaching experience",
      specialization: "Molecular Biology, Genetics",
      email: "sajeen@royalacademy.lk",
      phone: "077 364 3186",
    },
    {
      subject: "COM. MATHS",
      name: "ENG. H.S. NAFRAS",
      qualification: "B.Sc (Eng), MSc, AMIE(SL)",
      icon: <Calculator className="h-10 w-10" />,
      description:
        "Specialized in applied mathematics with expertise in calculus, statistics, and mathematical modeling.",
      experience: "14+ years teaching experience",
      specialization: "Calculus, Statistics, Modeling",
      email: "nafras@royalacademy.lk",
      phone: "077 123 4567",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  }

  return (
    <div className="bg-gradient-to-r from-gold-50 via-white to-gold-50 rounded-xl overflow-hidden shadow-xl border border-gold-200">
      <div className="relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

        {/* Gold accent lines */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-300 via-gold-500 to-gold-300"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gold-300 via-gold-500 to-gold-300"></div>

        <div className="relative z-10 p-8 md:p-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center mb-6">
              <div className="h-px w-12 bg-gold-300"></div>
              <div className="px-4">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground mx-auto shadow-lg">
                  <GraduationCap className="h-8 w-8" />
                </div>
              </div>
              <div className="h-px w-12 bg-gold-300"></div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-gold-600 to-gold-800">
              ROYAL ACADEMY OF SCIENCE - PUTTALAM
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-gold-300 via-gold-500 to-gold-300 mx-auto mb-4"></div>
            <div className="inline-block bg-primary text-primary-foreground px-6 py-2 rounded-full text-lg font-semibold mb-8 shadow-md transform hover:scale-105 transition-transform">
              2027 A/L BATCH
            </div>

            <div className="mb-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">THE BEGINNING</h3>
              <p className="text-xl mb-2 font-semibold">சிறந்த அறிவியல் கல்வியைத் தொடங்குங்கள்</p>
              <p className="text-lg text-gold-600 italic">(Sirandha Ariviyal Kalviyaith Thodangungal)</p>
            </div>
          </motion.div>

          {/* Lecturers Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {lecturers.map((lecturer, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative group"
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gold-200 to-gold-100 rounded-xl transform rotate-1 scale-[0.98] opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="relative bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 border border-gold-100 h-full flex flex-col">
                  <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    {lecturer.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-primary mb-2">{lecturer.subject}</h4>
                  <h3 className="text-xl font-bold mb-1">{lecturer.name}</h3>
                  <p className="text-sm text-muted-foreground">{lecturer.qualification}</p>

                  <div className="mt-4 pt-4 border-t border-gold-100 flex-grow">
                    <div
                      className={`overflow-hidden transition-all duration-300 ${activeIndex === index ? "max-h-60" : "max-h-0"}`}
                    >
                      <p className="text-sm text-gray-600 mb-3">{lecturer.description}</p>
                      <div className="flex flex-col gap-2 text-xs text-left mb-4">
                        <div className="flex items-center gap-2">
                          <Clock className="h-3 w-3 text-gold-600" />
                          <span>{lecturer.experience}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Award className="h-3 w-3 text-gold-600" />
                          <span>{lecturer.specialization}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="h-3 w-3 text-gold-600" />
                          <span>{lecturer.email}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="h-3 w-3 text-gold-600" />
                          <span>{lecturer.phone}</span>
                        </div>
                      </div>
                    </div>

                    <button className="text-primary text-sm font-medium hover:text-gold-600 transition-colors flex items-center mx-auto">
                      {activeIndex === index ? "Show less" : "Learn more"}{" "}
                      <ArrowRight
                        className={`ml-1 h-3 w-3 transition-transform duration-300 ${activeIndex === index ? "rotate-90" : ""}`}
                      />
                    </button>
                  </div>

                  {/* Decorative badge */}
                  <div className="absolute -top-2 -right-2 transform rotate-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Badge className="bg-gold-500 text-xs">Expert</Badge>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="bg-gradient-to-r from-gold-50 to-white p-6 rounded-xl border border-gold-100 shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Contact us for enrollment</p>
                  <p className="text-lg font-semibold">0772279337 / 0701155333 / 0773643186</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="outline" className="border-primary text-primary hover:bg-gold-50">
                  <MapPin className="h-4 w-4 mr-2" />
                  Visit Campus
                </Button>
                <Button className="bg-primary hover:bg-gold-600 text-primary-foreground px-8 shadow-md">
                  Enroll Now for 2027 A/L Batch
                </Button>
              </div>
            </div>

            {/* Additional information */}
            <div className="mt-6 pt-6 border-t border-gold-100 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div>
                <h4 className="text-sm font-semibold mb-1">Class Schedule</h4>
                <p className="text-xs text-muted-foreground">Weekdays: 3:30 PM - 6:30 PM</p>
                <p className="text-xs text-muted-foreground">Weekends: 9:00 AM - 4:00 PM</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-1">Enrollment Period</h4>
                <p className="text-xs text-muted-foreground">January 15 - February 28, 2024</p>
                <p className="text-xs text-primary font-medium">Limited seats available</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-1">Location</h4>
                <p className="text-xs text-muted-foreground">123 Main Street, Puttalam</p>
                <p className="text-xs text-muted-foreground">Near Central College</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

