"use client"

import { useState, useEffect } from "react"
import { Phone, Mail, MessageCircle, X, MessageSquare, ExternalLink } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface FloatingContactProps {
  data: any
}

export function FloatingContact({ data }: FloatingContactProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeMethod, setActiveMethod] = useState<number | null>(null)

  // Close the menu when clicking outside
  useEffect(() => {
    if (!isOpen) return

    const handleClickOutside = (e) => {
      const contactElement = document.getElementById("floating-contact")
      if (contactElement && !contactElement.contains(e.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isOpen])

  // Map icon names to components
  const iconMap = {
    Phone: <Phone className="h-5 w-5" />,
    Mail: <Mail className="h-5 w-5" />,
    MessageCircle: <MessageCircle className="h-5 w-5" />,
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
    exit: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.2,
      },
    },
  }

  const pulseVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      boxShadow: [
        "0 0 0 0 rgba(59, 130, 246, 0.4)",
        "0 0 0 10px rgba(59, 130, 246, 0)",
        "0 0 0 0 rgba(59, 130, 246, 0)",
      ],
      transition: {
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop",
      },
    },
  }

  return (
    <div id="floating-contact" className="fixed bottom-6 right-6 z-50">
      {/* Contact Options */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="flex flex-col gap-3 mb-4 items-end"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {data.methods.map((method, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                onMouseEnter={() => setActiveMethod(index)}
                onMouseLeave={() => setActiveMethod(null)}
                className="relative"
              >
                <a
                  href={method.action}
                  target={method.type === "email" || method.type === "whatsapp" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 px-4 py-3 rounded-full shadow-lg text-white ${method.color} transform transition-all duration-300 ${activeMethod === index ? "pr-12" : ""}`}
                >
                  {iconMap[method.icon]}
                  <span className="text-sm font-medium whitespace-nowrap">
                    {method.label}: {method.value}
                  </span>

                  {activeMethod === index && (
                    <motion.div
                      className="absolute right-2 bg-white text-blue-600 rounded-full p-1"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </motion.div>
                  )}
                </a>

                {/* Animated background */}
                {activeMethod === index && (
                  <motion.div
                    className={`absolute inset-0 -z-10 ${method.color} rounded-full opacity-20 blur-md`}
                    layoutId={`contact-bg-${index}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.2 }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </motion.div>
            ))}

            {/* Contact info */}
            <motion.div
              variants={itemVariants}
              className="bg-white text-gray-700 p-3 rounded-lg shadow-lg text-center text-sm max-w-[250px]"
            >
              <h4 className="font-bold mb-1">{data.title}</h4>
              <p className="text-muted-foreground text-xs">{data.subtitle}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`h-14 w-14 rounded-full shadow-lg ${isOpen ? "bg-gray-700" : "bg-blue-600"} hover:bg-blue-700 transition-colors duration-300 text-white flex items-center justify-center focus:outline-none`}
        variants={pulseVariants}
        animate={!isOpen ? "pulse" : ""}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
      </motion.button>
    </div>
  )
}

