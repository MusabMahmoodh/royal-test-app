"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  ChevronRight,
  Download,
  GraduationCap,
  Award,
  Users,
  BookOpen,
  ArrowRight,
  Calendar,
  CheckCircle,
  TrendingUp,
  Trophy,
  Monitor,
  FlaskRoundIcon as Flask,
  MapPin,
  Activity,
  Ruler,
  Play,
  Apple,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { SuccessStorySection } from "@/components/success-story-section"
import { ContactSection } from "@/components/contact-section"
import { FloatingContact } from "@/components/floating-contact"

// Import content data
import contentData from "@/data/content.json"

// Map icon names to actual components
const iconMap = {
  ChevronRight,
  Download,
  GraduationCap,
  Award,
  Users,
  BookOpen,
  ArrowRight,
  Calendar,
  CheckCircle,
  TrendingUp,
  Trophy,
  Monitor,
  Flask,
  MapPin,
  Activity,
  Ruler,
}

// Animated text component that cycles through different phrases with matching images
function AnimatedText() {
  const content = contentData.hero.content
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsVisible(false)

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % content.length)
        setIsVisible(true)
      }, 500)
    }, 4000)

    return () => clearInterval(intervalId)
  }, [])

  return {
    phrase: (
      <p
        className={`max-w-[600px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed transition-opacity duration-500 min-h-[60px] flex items-center ${isVisible ? "opacity-100" : "opacity-0"}`}
      >
        {content[currentIndex].phrase}
      </p>
    ),
    currentImage: content[currentIndex].image,
    isVisible,
  }
}

// Helper function to get icon component
const getIcon = (iconName) => {
  const IconComponent = iconMap[iconName]
  return IconComponent ? <IconComponent /> : null
}

export default function Home() {
  const animatedContent = AnimatedText()
  const {
    hero,
    announcement,
    about,
    programs,
    achievements,
    classrooms,
    news,
    gallery,
    faculty,
    app,
    footer,
    successStory,
    contact,
    floatingContact,
  } = contentData

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 items-center justify-between  mx-auto">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-10 h-10 rounded-md bg-blue-600 text-white">
              <GraduationCap className="h-6 w-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight">Royal Academy</span>
              <span className="text-xs text-muted-foreground">of Science</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/#" className="font-medium transition-colors hover:text-primary">
              Home
            </Link>
            <Link href="/#about" className="font-medium text-muted-foreground transition-colors hover:text-primary">
              About
            </Link>
            <Link href="/#programs" className="font-medium text-muted-foreground transition-colors hover:text-primary">
              Programs
            </Link>
            <Link
              href="/#achievements"
              className="font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Achievements
            </Link>
            <Link href="/#facilities" className="font-medium text-muted-foreground transition-colors hover:text-primary">
              Facilities
            </Link>
            <Link href="/#news" className="font-medium text-muted-foreground transition-colors hover:text-primary">
              News
            </Link>
            <Link href="/#gallery" className="font-medium text-muted-foreground transition-colors hover:text-primary">
              Gallery
            </Link>
            <Link href="#contact" className="font-medium text-muted-foreground transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
          <Link href="#app" >
          <Button variant="outline" size="sm" className="hidden md:flex">
              <Download className="mr-2 h-4 w-4" />
              Download App
            </Button>
            </Link>
            
            <Button size="sm">Apply Now</Button>
            <Button variant="ghost" size="icon" className="md:hidden">
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
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </div>
      </header>
      {/* Announcement Steps */}
      <div className="w-full bg-blue-50 py-2 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center md:justify-between">
            <div className="flex items-center space-x-1 text-sm text-blue-800 font-medium">
              <span className="bg-blue-600 text-white px-2 py-0.5 rounded-md">New</span>
              <span>{announcement.text}</span>
            </div>
            <div className="flex mt-2 md:mt-0">
              {announcement.steps.map((step, index) => (
                <div key={index} className="flex items-center">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold">
                    {index + 1}
                  </div>
                  <div className="ml-2 text-xs">{step}</div>
                  {index < announcement.steps.length - 1 && <div className="w-8 h-px bg-blue-300 mx-2"></div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden relative">
          {/* Animated background elements */}
          
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-700 rounded-full opacity-20 animate-pulse"></div>
            <div
              className="absolute top-60 -left-20 w-60 h-60 bg-blue-600 rounded-full opacity-10 animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute bottom-0 right-20 w-40 h-40 bg-blue-500 rounded-full opacity-10 animate-pulse"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10 mx-auto">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4 animate-fadeIn">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">{hero.title}</h1>
                  {animatedContent.phrase}
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    size="lg"
                    className="bg-white text-blue-900 hover:bg-gray-100 animate-slideInRight"
                    style={{ animationDelay: "0.3s" }}
                  >
                    {hero.buttons.primary}
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/10 animate-slideInRight bg-transparent"
                    style={{ animationDelay: "0.5s" }}
                  >
                    {hero.buttons.secondary}
                  </Button>
                </div>
                <div className="flex flex-wrap gap-3 pt-4">
                  {hero.tags.map((tag, index) => {
                    const TagIcon = iconMap[tag.icon]
                    return (
                      <Link
                        key={index}
                        href={tag.link}
                        className="inline-flex items-center rounded-full bg-blue-800/60 px-3 py-1 text-sm hover:bg-blue-700/60 transition-colors"
                      >
                        {TagIcon && <TagIcon className="mr-1 h-3 w-3" />} {tag.text}
                      </Link>
                    )
                  })}
                </div>
              </div>
              <div className="mx-auto lg:ml-auto flex justify-center animate-slideInLeft">
                <div className="relative w-[600px] h-[400px]">
                  <Image
                    alt="Royal Academy Campus"
                    className={`rounded-xl object-cover shadow-xl transition-opacity duration-500 ${animatedContent.isVisible ? "opacity-100" : "opacity-0"}`}
                    src={animatedContent.currentImage || "/placeholder.svg"}
                    fill
                    sizes="(max-width: 768px) 100vw, 600px"
                    style={{ objectFit: "cover" }}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Modularized Success Story Section */}
        <SuccessStorySection />

        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-900">{about.badge}</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{about.title}</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {about.description}
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  {about.sections.map((section, index) => (
                    <li key={index}>
                      <div className="grid gap-1">
                        <h3 className="text-xl font-bold">{section.title}</h3>
                        <p className="text-muted-foreground">{section.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mx-auto flex justify-center">
                <Image
                  alt="Academy Values"
                  className="rounded-xl object-cover"
                  height={400}
                  src="/images/about.jpg"
                  width={500}
                />
              </div>
            </div>
          </div>
        </section>

        <section id="programs" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-900">
                  {programs.badge}
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{programs.title}</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {programs.description}
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              {programs.items.map((program, index) => {
                const ProgramIcon = iconMap[program.icon]
                return (
                  <Card
                    key={index}
                    className="flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <CardHeader className="pb-2">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-900 mb-4">
                        {ProgramIcon && <ProgramIcon className="h-6 w-6" />}
                      </div>
                      <CardTitle>{program.title}</CardTitle>
                      <CardDescription>{program.subtitle}</CardDescription>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <p className="text-muted-foreground">{program.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm" className="w-full">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Redesigned Success Stories Section */}
        <section id="achievements" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-900">
                  {achievements.badge}
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{achievements.title}</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {achievements.description}
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-6xl py-12">
              {/* Statistics Section */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                {achievements.stats.map((stat) => {
                  const StatIcon = iconMap[stat.icon]
                  return (
                    <div
                      key={stat.id}
                      className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
                    >
                      <div className="mb-4">{StatIcon && <StatIcon className="h-10 w-10 text-blue-500" />}</div>
                      <h3 className="text-4xl font-bold text-blue-900 mb-2">{stat.value}</h3>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </div>
                  )
                })}
              </div>

              {/* Student Success Stories */}
              <div className="relative">
                <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-blue-100 hidden md:block"></div>

                {achievements.stories.map((story, index) => (
                  <div
                    key={story.id}
                    className={`relative mb-16 md:mb-24 ${index % 2 === 0 ? "md:pr-12 md:text-right md:ml-auto md:mr-[50%]" : "md:pl-12 md:ml-[50%]"}`}
                  >
                    <div
                      className="hidden md:block absolute top-6 w-6 h-6 rounded-full bg-blue-600 z-10 shadow-md"
                      style={{ [index % 2 === 0 ? "right" : "left"]: "-12px" }}
                    ></div>

                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 md:max-w-[90%]">
                      <div className="flex flex-col md:flex-row gap-6 items-center">
                        <div className={`md:w-1/3 ${index % 2 === 1 ? "md:order-1" : "md:order-2"}`}>
                          <Image
                            src={story.image || "/placeholder.svg"}
                            alt={story.name}
                            width={150}
                            height={150}
                            className="rounded-full object-cover mx-auto border-4 border-blue-100"
                          />
                          <div className="mt-4 text-center">
                            <h3 className="text-xl font-bold">{story.name}</h3>
                            <p className="text-blue-600 font-medium">{story.achievement}</p>
                            <Badge className="mt-2">{story.year}</Badge>
                          </div>
                        </div>

                        <div className={`md:w-2/3 ${index % 2 === 1 ? "md:order-2" : "md:order-1"}`}>
                          <div className="mb-4">
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
                              className="h-8 w-8 text-blue-200 mb-2"
                            >
                              <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                              <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                            </svg>
                            <p className="text-muted-foreground italic">{story.quote}</p>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <GraduationCap className="h-4 w-4 text-blue-600" />
                            <span>Now at: {story.university}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Alumni Network */}
              <div className="mt-16 bg-gray-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-center mb-6">{achievements.alumni.title}</h3>
                <p className="text-muted-foreground text-center mb-8">{achievements.alumni.description}</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {achievements.alumni.universities.map((uni, index) => (
                    <div key={index} className="flex flex-col items-center p-4 border rounded-lg bg-white">
                      <Image
                        alt="University Logo"
                        className="object-contain mb-2"
                        height={40}
                        src={uni.image || "/placeholder.svg"}
                        width={80}
                      />
                      <span className="text-sm text-center">{uni.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center mt-10">
                <Button size="lg">
                  View More Success Stories
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Classrooms Section */}
        <section id="classrooms" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-900">
                  {classrooms.badge}
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{classrooms.title}</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {classrooms.description}
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-6xl py-12">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
                {classrooms.images.map((image, index) => (
                  <div key={index} className="relative overflow-hidden rounded-xl">
                    <Image
                      alt={image.alt}
                      className="object-cover w-full h-full"
                      height={400}
                      src={image.src || "/placeholder.svg"}
                      width={600}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                      <div className="p-6 text-white">
                        <h3 className="text-xl font-bold">{image.title}</h3>
                        <p className="text-sm">{image.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid gap-6 mt-12 md:grid-cols-2 lg:grid-cols-4">
                {classrooms.features.map((feature) => {
                  const FeatureIcon = iconMap[feature.icon] || iconMap.Monitor
                  return (
                    <Card key={feature.id} className="text-center">
                      <CardHeader>
                        <div className="flex justify-center mb-4">
                          <FeatureIcon className="h-10 w-10 text-blue-600" />
                        </div>
                        <CardTitle>{feature.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>

              <div className="flex justify-center mt-10">
                <Button size="lg">
                  {classrooms.cta}
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* News Section */}
        <section id="news" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-900">{news.badge}</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{news.title}</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {news.description}
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-6xl py-12">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {news.items.map((item) => (
                  <Card key={item.id} className="overflow-hidden">
                    <div className="relative">
                      <Image
                        alt={item.title}
                        className="object-cover w-full aspect-[4/3]"
                        height={200}
                        src={item.image || "/placeholder.svg"}
                        width={300}
                      />
                      <div className="absolute top-2 right-2">
                        <Badge className="bg-blue-600 hover:bg-blue-700">News</Badge>
                      </div>
                    </div>
                    <CardHeader className="p-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Calendar className="h-4 w-4" />
                        <span>{item.date}</span>
                      </div>
                      <CardTitle className="line-clamp-2 text-lg">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <p className="text-muted-foreground text-sm line-clamp-3">{item.excerpt}</p>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button variant="outline" size="sm" className="w-full">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>

              <div className="flex justify-center mt-10">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white hover:bg-gray-100 border-blue-600 text-blue-600"
                >
                  {news.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-900">
                  {gallery.badge}
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{gallery.title}</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {gallery.description}
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-6xl py-12">
              <Carousel className="w-full">
                <CarouselContent>
                  {gallery.images.map((image) => (
                    <CarouselItem key={image.id} className="md:basis-1/2 lg:basis-1/3">
                      <div className="p-1">
                        <div className="overflow-hidden rounded-xl">
                          <Image
                            src={image.src || "/placeholder.svg"}
                            alt={image.alt}
                            width={600}
                            height={400}
                            className="w-full aspect-[3/2] object-cover transition-transform hover:scale-105 duration-300"
                          />
                          <div className="p-3 text-center">
                            <p className="font-medium">{image.caption}</p>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 mt-8">
                {gallery.images.map((image) => (
                  <div key={image.id} className="overflow-hidden rounded-lg">
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      width={200}
                      height={150}
                      className="w-full aspect-square object-cover transition-transform hover:scale-110 duration-300 cursor-pointer"
                    />
                  </div>
                ))}
              </div>

              <div className="flex justify-center mt-10">
                <Button size="lg">
                  {gallery.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="faculty" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-900">
                  {faculty.badge}
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{faculty.title}</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {faculty.description}
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-6xl py-12">
              {/* Featured Educator */}
              <div className="mb-16 bg-white rounded-xl shadow-xl overflow-hidden">
                <div className="grid md:grid-cols-2 items-center">
                  <div className="relative h-[400px] overflow-hidden">
                    <Image
                      alt="Featured Faculty Member"
                      src={faculty.featured.image || "/placeholder.svg"}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-transparent flex items-center">
                      <div className="p-8 text-white">
                        <h3 className="text-3xl font-bold mb-2">{faculty.featured.name}</h3>
                        <p className="text-xl text-blue-100">{faculty.featured.position}</p>
                        <div className="flex gap-3 mt-4">
                          <div className="bg-white/20 p-2 rounded-full">
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
                          </div>
                          <div className="bg-white/20 p-2 rounded-full">
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
                          </div>
                          <div className="bg-white/20 p-2 rounded-full">
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
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="h-1 w-10 bg-blue-600"></div>
                        <span className="text-blue-600 font-medium">Featured Educator</span>
                      </div>
                      <p className="text-muted-foreground">{faculty.featured.description}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {faculty.featured.stats.map((stat, index) => (
                        <div key={index} className="bg-gray-50 p-4 rounded-lg">
                          <div className="text-3xl font-bold text-blue-600 mb-1">{stat.value}</div>
                          <div className="text-sm text-muted-foreground">{stat.label}</div>
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-end">
                      <Button variant="outline" className="mr-2">
                        View Profile
                      </Button>
                      <Button>Book a Consultation</Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Other Faculty Members */}
              <h3 className="text-2xl font-bold mb-8 text-center">Meet Our Other Specialists</h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {faculty.members.map((member, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="aspect-[3/4] relative overflow-hidden">
                      <Image
                        alt={member.name}
                        src={member.image || "/placeholder.svg"}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          <p className="text-white text-sm mb-4">{member.description}</p>
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                            >
                              View Profile
                            </Button>
                            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                              Contact
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold">{member.name}</h3>
                        <Badge className="bg-blue-100 text-blue-900 hover:bg-blue-200">{member.department}</Badge>
                      </div>
                      <p className="text-muted-foreground text-sm">{member.position}</p>
                      <div className="mt-4 flex items-center gap-2">
                        <div className="flex -space-x-2">
                          <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xs">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                              <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
                          </div>
                          <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xs">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <circle cx="12" cy="12" r="10"></circle>
                              <polyline points="12 6 12 12 16 14"></polyline>
                            </svg>
                          </div>
                          <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 text-xs">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                            </svg>
                          </div>
                        </div>
                        <span className="text-xs text-muted-foreground">{member.experience}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-center mt-12">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  {faculty.cta}
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

     <section
          id="app"
          className="w-full py-12 md:py-24 lg:py-32 bg-blue-900 text-white"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid lg:grid-cols-2  items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-blue-800 px-3 py-1 text-sm">
                    Mobile App
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Learning at Your Fingertips
                  </h2>
                  <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Download our mobile app for access to study materials,
                    practice tests, and personalized learning paths.
                  </p>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.fazlurajan.royalacademyputtalam&hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-md bg-black px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    <Play className="mr-2 h-5 w-5" />
                    <div className="flex flex-col">
                      <span className="text-xs">GET IT ON</span>
                      <span>Google Play</span>
                    </div>
                  </a>
                  <a
                    href="https://apps.apple.com/lk/app/royal-academy-of-science/id1546360973"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-md bg-black px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    <Apple className="mr-2 h-5 w-5" />
                    <div className="flex flex-col">
                      <span className="text-xs">Download on the</span>
                      <span>App Store</span>
                    </div>
                  </a>
                </div>
                <div className="flex items-center gap-4 pt-4">
                  <div className="flex items-center gap-1">
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
                      className="h-5 w-5 fill-primary text-yellow-400"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
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
                      className="h-5 w-5 fill-primary text-yellow-400"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
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
                      className="h-5 w-5 fill-primary text-yellow-400"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
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
                      className="h-5 w-5 fill-primary text-yellow-400"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
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
                      className="h-5 w-5 fill-primary text-yellow-400"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  </div>
                  <div className="text-sm text-gray-300">
                    4.9 Rating (2000+ Reviews)
                  </div>
                </div>
                <ul className="space-y-2 mt-4">
                  <li className="flex items-center gap-2">
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
                      className="h-5 w-5 text-green-400"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Access lecture videos anytime, anywhere</span>
                  </li>
                  <li className="flex items-center gap-2">
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
                      className="h-5 w-5 text-green-400"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Download and read PDF notes offline</span>
                  </li>
                  <li className="flex items-center gap-2">
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
                      className="h-5 w-5 text-green-400"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Practice with online tests and quizzes</span>
                  </li>
                </ul>
              </div>
              <div className=" flex justify-center">
                <div className="relative">
                  <Image
                    alt="Mobile App Screenshot"
                    className="rounded-xl object-cover shadow-2xl"
                    height={500}
                    src="/images/app-screenshot.jpg"
                    width={250}
                  />
                  <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                    <div className="text-blue-900 font-bold">10K+</div>
                    <div className="text-sm text-gray-600">Downloads</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <ContactSection data={contact} />
      </main>
      <footer className="w-full border-t bg-background">
        <div className="container py-12 px-4 md:px-6 mx-auto">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-8 h-8 rounded-md bg-blue-600 text-white">
                  <GraduationCap className="h-4 w-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold tracking-tight">Royal Academy</span>
                  <span className="text-xs text-muted-foreground">of Science</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{footer.description}</p>
              <div className="flex items-center space-x-2">
                <a href="#" className="text-gray-400 hover:text-gray-500">
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
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-500">
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
                    className="h-5 w-5"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-500">
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
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <h4 className="text-sm font-semibold">Quick Links</h4>
              {footer.quickLinks.map((link, index) => (
                <Link key={index} href={link.href} className="text-sm text-muted-foreground hover:text-primary">
                  {link.text}
                </Link>
              ))}
            </div>
            <div className="flex flex-col space-y-2">
              <h4 className="text-sm font-semibold">Facilities</h4>
              {footer.facilities.map((facility, index) => (
                <Link key={index} href={facility.href} className="text-sm text-muted-foreground hover:text-primary">
                  {facility.text}
                </Link>
              ))}
            </div>
            <div className="flex flex-col space-y-2">
              <h4 className="text-sm font-semibold">Contact Us</h4>
              <p className="text-sm text-muted-foreground">{footer.contact.address}</p>
              <p className="text-sm text-muted-foreground">Email: {footer.contact.email}</p>
              <p className="text-sm text-muted-foreground">Phone: {footer.contact.phone}</p>
            </div>
          </div>
          <div className="border-t py-6 mt-10 text-center text-sm text-muted-foreground">{footer.copyright}</div>
        </div>
      </footer>

      {/* Floating Contact Button */}
      {/* <FloatingContact data={floatingContact} /> */}
    </div>
  )
}

