"use client"

import { useState, useEffect } from "react"
import { Phone, Mail, MessageCircle, ArrowRight, ExternalLink, Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeading } from "@/components/section-heading"
import { motion } from "framer-motion"

interface ContactSectionProps {
  data: any
}

export function ContactSection({ data }: ContactSectionProps) {
  const [copiedValue, setCopiedValue] = useState<string | null>(null)
  const [isHovering, setIsHovering] = useState<number | null>(null)

  // Reset copied state after 2 seconds
  useEffect(() => {
    if (copiedValue) {
      const timer = setTimeout(() => {
        setCopiedValue(null)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [copiedValue])

  const handleCopy = (value: string) => {
    navigator.clipboard.writeText(value)
    setCopiedValue(value)
  }

  // Map icon names to components
  const iconMap = {
    Phone: <Phone className="h-8 w-8" />,
    Mail: <Mail className="h-8 w-8" />,
    MessageCircle: <MessageCircle className="h-8 w-8" />,
  }

  // Animation variants
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
    <section
      id="contact"
      className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-blue-50 overflow-hidden"
    >
      <div className="container px-4 md:px-6 relative mx-auto">
        {/* Decorative elements */}
        <div className="absolute top-20 left-0 w-64 h-64 bg-blue-100 rounded-full opacity-30 blur-3xl -z-10"></div>
        <div className="absolute bottom-20 right-0 w-80 h-80 bg-green-100 rounded-full opacity-30 blur-3xl -z-10"></div>

        <SectionHeading badge={data.badge} title={data.title} description={data.description} />

        <motion.div
          className="mx-auto max-w-5xl mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="grid gap-8 md:grid-cols-3">
            {data.methods.map((method, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                onMouseEnter={() => setIsHovering(index)}
                onMouseLeave={() => setIsHovering(null)}
                className="relative"
              >
                <Card
                  className={`h-full overflow-hidden transition-all duration-500 hover:shadow-xl ${isHovering === index ? "transform -translate-y-2" : ""}`}
                >
                  <CardContent className="p-0 h-full">
                    <div className="flex flex-col h-full">
                      <div className={`${method.color} p-8 flex items-center justify-center`}>
                        <div className="text-white">{iconMap[method.icon]}</div>
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <h3 className="text-2xl font-bold mb-2">{method.label}</h3>
                        <p className="text-lg font-medium text-blue-600 mb-3">{method.value}</p>
                        <p className="text-sm text-muted-foreground mb-6">{method.description}</p>

                        <div className="mt-auto flex gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleCopy(method.value)}
                            className="flex-1"
                          >
                            {copiedValue === method.value ? (
                              <>
                                <Check className="h-4 w-4 mr-2" />
                                Copied
                              </>
                            ) : (
                              <>
                                <Copy className="h-4 w-4 mr-2" />
                                Copy
                              </>
                            )}
                          </Button>
                          <a
                            href={method.action}
                            target={method.type === "email" || method.type === "whatsapp" ? "_blank" : undefined}
                            rel="noopener noreferrer"
                            className="flex-1"
                          >
                            <Button className={`w-full ${method.color}`} size="sm">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              {method.type === "phone" ? "Call" : method.type === "email" ? "Email" : "Chat"}
                            </Button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Animated decorative elements */}
                <div
                  className={`absolute -z-10 ${method.lightColor} w-full h-full rounded-xl transform rotate-3 -translate-x-2 translate-y-2 opacity-50 transition-transform duration-300 ${isHovering === index ? "rotate-6 -translate-x-4 translate-y-4" : ""}`}
                ></div>
              </motion.div>
            ))}
          </div>

          {/* Additional contact info */}
          <motion.div variants={itemVariants} className="mt-16 bg-white p-8 rounded-xl shadow-md text-center">
            <h3 className="text-2xl font-bold mb-4">Visit Our Campus</h3>
            <p className="text-muted-foreground mb-6">
              Experience our state-of-the-art facilities and meet our expert faculty in person.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <div className="flex items-center justify-center bg-blue-50 p-4 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-blue-600 mr-2"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span className="font-medium">123, Main Street, Colombo, Sri Lanka</span>
              </div>
              <div className="flex items-center justify-center bg-green-50 p-4 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-green-600 mr-2"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                <span className="font-medium">Monday - Friday: 8:00 AM - 6:00 PM</span>
              </div>
            </div>

            <div className="mt-8">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Schedule a Campus Tour
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>

          {/* Social media links */}
          <motion.div variants={itemVariants} className="mt-12 flex flex-wrap justify-center gap-4">
            <a
              href="#"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a
              href="#"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-pink-600 text-white hover:bg-pink-700 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a
              href="#"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-sky-500 text-white hover:bg-sky-600 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
            <a
              href="#"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-red-600 text-white hover:bg-red-700 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
              </svg>
            </a>
            <a
              href="#"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-800 text-white hover:bg-blue-900 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

