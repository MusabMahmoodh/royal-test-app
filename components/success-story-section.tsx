"use client"

import { SectionHeading } from "@/components/section-heading"
import { SuccessCard } from "@/components/success-card"
import { CallToAction } from "@/components/call-to-action"
import contentData from "@/data/content.json"
import { motion } from "framer-motion"

export function SuccessStorySection() {
  const { successStory } = contentData

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
    <section className="w-full py-12 bg-gradient-to-r from-gold-50 via-white to-gold-50 border-b">
      <div className="container px-4 md:px-6 mx-auto">
        <SectionHeading badge={successStory.badge} title={successStory.title} description={successStory.description} />

        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Decorative elements */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gold-100 -z-10 hidden md:block"></div>
          <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-gold-100 -z-10 hidden md:block"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {successStory.achievements.map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <SuccessCard
                  value={item.value}
                  label={item.label}
                  description={item.description}
                  icon={item.icon}
                  accentColor={item.accentColor}
                  lightColor={item.lightColor}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="mt-12">
          <CallToAction text={successStory.cta} />
        </div>
      </div>
    </section>
  )
}

