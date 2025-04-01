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
  Apple,
  Play,
  CheckCircle,
  TrendingUp,
  Trophy,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

// Animated text component that cycles through different phrases
function AnimatedText() {
  const phrases = [
    "Expert teachers with decades of experience in science education",
    "State-of-the-art classrooms and laboratory facilities",
    "Exceptional achievers with top university placements",
    "Innovative mobile app for seamless learning experience",
  ]

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsVisible(false)

      setTimeout(() => {
        setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length)
        setIsVisible(true)
      }, 500)
    }, 4000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <p
      className={`max-w-[600px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed transition-opacity duration-500 min-h-[60px] flex items-center ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      {phrases[currentPhraseIndex]}
    </p>
  )
}

// News data
const newsItems = [
  {
    id: 1,
    title: "Royal Academy Students Win National Science Competition",
    excerpt:
      "Our students secured first place in the National Science Olympiad, showcasing exceptional talent in physics and chemistry.",
    date: "June 15, 2023",
    image: "/images/news-1.jpg",
  },
  {
    id: 2,
    title: "New Laboratory Equipment Installed",
    excerpt:
      "State-of-the-art laboratory equipment has been installed to enhance practical learning experiences for our students.",
    date: "July 22, 2023",
    image: "/images/news-2.jpg",
  },
  {
    id: 3,
    title: "Mobile App Updated with New Features",
    excerpt:
      "Our mobile application now includes interactive quizzes, video lectures, and personalized learning paths.",
    date: "August 10, 2023",
    image: "/images/news-3.jpg",
  },
  {
    id: 4,
    title: "Open Day for Prospective Students",
    excerpt: "Join us for an open day to explore our facilities, meet our faculty, and learn about our programs.",
    date: "September 5, 2023",
    image: "/images/news-4.jpg",
  },
]

// Gallery images
const galleryImages = [
  { id: 1, src: "/images/gallery-1.jpg", alt: "Campus Building", caption: "Main Campus Building" },
  { id: 2, src: "/images/gallery-2.jpg", alt: "Science Lab", caption: "Advanced Science Laboratory" },
  { id: 3, src: "/images/gallery-3.jpg", alt: "Library", caption: "Modern Library Facilities" },
  { id: 4, src: "/images/gallery-4.jpg", alt: "Classroom", caption: "Interactive Classroom" },
  { id: 5, src: "/images/gallery-5.jpg", alt: "Computer Lab", caption: "Computer Laboratory" },
  { id: 6, src: "/images/gallery-6.jpg", alt: "Auditorium", caption: "Multipurpose Auditorium" },
]

// Classroom features
const classroomFeatures = [
  {
    id: 1,
    title: "Smart Classrooms",
    description: "Interactive whiteboards, projectors, and digital learning tools for enhanced teaching and learning.",
    icon: (
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
        className="h-10 w-10 text-blue-600"
      >
        <rect width="18" height="12" x="3" y="4" rx="2" ry="2"></rect>
        <line x1="2" x2="22" y1="20" y2="20"></line>
      </svg>
    ),
  },
  {
    id: 2,
    title: "Laboratory Integration",
    description: "Classrooms connected to laboratories for seamless transition between theory and practical sessions.",
    icon: (
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
        className="h-10 w-10 text-blue-600"
      >
        <path d="M10 2v7.31"></path>
        <path d="M14 9.3V1.99"></path>
        <path d="M8.5 2h7"></path>
        <path d="M14 9.3a6.5 6.5 0 1 1-4 0"></path>
        <path d="M5.58 16.5h12.85"></path>
      </svg>
    ),
  },
  {
    id: 3,
    title: "Ergonomic Design",
    description: "Comfortable seating, optimal lighting, and acoustics designed for extended learning sessions.",
    icon: (
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
        className="h-10 w-10 text-blue-600"
      >
        <path d="M18 8a6 6 0 0 0-6-6 6 6 0 0 0-6 6c0 7 6 13 6 13s6-6 6-13Z"></path>
        <circle cx="12" cy="8" r="2"></circle>
      </svg>
    ),
  },
  {
    id: 4,
    title: "Small Class Sizes",
    description: "Limited student numbers per class to ensure personalized attention and effective learning.",
    icon: (
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
        className="h-10 w-10 text-blue-600"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
  },
]

// Success stories data
const successStats = [
  {
    id: 1,
    value: "98%",
    label: "Pass Rate in GCE A/L Examinations",
    icon: <CheckCircle className="h-10 w-10 text-green-500" />,
  },
  {
    id: 2,
    value: "75+",
    label: "University Placements Annually",
    icon: <GraduationCap className="h-10 w-10 text-blue-500" />,
  },
  {
    id: 3,
    value: "25+",
    label: "National Level Award Winners",
    icon: <Trophy className="h-10 w-10 text-amber-500" />,
  },
  {
    id: 4,
    value: "92%",
    label: "Students Achieving A or B Grades",
    icon: <TrendingUp className="h-10 w-10 text-indigo-500" />,
  },
]

const successStories = [
  {
    id: 1,
    name: "Priya Ramachandran",
    achievement: "District First - Biology",
    year: "2022",
    image: "/images/student-1.jpg",
    quote:
      "The dedicated faculty and comprehensive curriculum at Royal Academy prepared me thoroughly for my examinations. The practical sessions were particularly helpful.",
    university: "University of Colombo - Medicine",
  },
  {
    id: 2,
    name: "Karthik Suresh",
    achievement: "National Merit - Physics",
    year: "2021",
    image: "/images/student-2.jpg",
    quote:
      "The practical approach to learning and problem-solving techniques helped me excel in competitive examinations. I'm grateful for the mentorship I received.",
    university: "University of Moratuwa - Engineering",
  },
  {
    id: 3,
    name: "Anita Krishnan",
    achievement: "International Science Olympiad - Silver Medal",
    year: "2023",
    image: "/images/student-3.jpg",
    quote:
      "Royal Academy's special programs for competitive exams gave me the edge I needed. The teachers went above and beyond to support my preparation.",
    university: "University of Peradeniya - Science",
  },
]

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 items-center justify-between">
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
            <Link href="/" className="font-medium transition-colors hover:text-primary">
              Home
            </Link>
            <Link href="/about" className="font-medium text-muted-foreground transition-colors hover:text-primary">
              About
            </Link>
            <Link href="/programs" className="font-medium text-muted-foreground transition-colors hover:text-primary">
              Programs
            </Link>
            <Link
              href="/achievements"
              className="font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Achievements
            </Link>
            <Link href="/facilities" className="font-medium text-muted-foreground transition-colors hover:text-primary">
              Facilities
            </Link>
            <Link href="/news" className="font-medium text-muted-foreground transition-colors hover:text-primary">
              News
            </Link>
            <Link href="/gallery" className="font-medium text-muted-foreground transition-colors hover:text-primary">
              Gallery
            </Link>
            <Link href="/contact" className="font-medium text-muted-foreground transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="hidden md:flex">
              <Download className="mr-2 h-4 w-4" />
              Download App
            </Button>
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

          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4 animate-fadeIn">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Leading Institute for GCE A/L Sciences
                  </h1>
                  <AnimatedText />
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    size="lg"
                    className="bg-white text-blue-900 hover:bg-gray-100 animate-slideInRight"
                    style={{ animationDelay: "0.3s" }}
                  >
                    Explore Programs
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/10 animate-slideInRight bg-transparent"
                    style={{ animationDelay: "0.5s" }}
                  >
                    Learn More
                  </Button>
                </div>
                <div className="flex flex-wrap gap-3 pt-4">
                  <Link
                    href="#faculty"
                    className="inline-flex items-center rounded-full bg-blue-800/60 px-3 py-1 text-sm hover:bg-blue-700/60 transition-colors"
                  >
                    <Users className="mr-1 h-3 w-3" /> Expert Teachers
                  </Link>
                  <Link
                    href="#classrooms"
                    className="inline-flex items-center rounded-full bg-blue-800/60 px-3 py-1 text-sm hover:bg-blue-700/60 transition-colors"
                  >
                    <GraduationCap className="mr-1 h-3 w-3" /> Modern Classrooms
                  </Link>
                  <Link
                    href="#achievements"
                    className="inline-flex items-center rounded-full bg-blue-800/60 px-3 py-1 text-sm hover:bg-blue-700/60 transition-colors"
                  >
                    <Award className="mr-1 h-3 w-3" /> Top Achievers
                  </Link>
                  <Link
                    href="#app"
                    className="inline-flex items-center rounded-full bg-blue-800/60 px-3 py-1 text-sm hover:bg-blue-700/60 transition-colors"
                  >
                    <Download className="mr-1 h-3 w-3" /> Mobile App
                  </Link>
                </div>
              </div>
              <div className="mx-auto lg:ml-auto flex justify-center animate-slideInLeft">
                <div className="relative">
                  <Image
                    alt="Royal Academy Campus"
                    className="rounded-xl object-cover shadow-xl"
                    height={400}
                    src="/images/hero.jpg"
                    width={600}
                  />
                  <div
                    className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-4 rounded-lg shadow-lg animate-bounce"
                    style={{ animationDuration: "3s" }}
                  >
                    <div className="font-bold">Admissions Open</div>
                    <div className="text-sm">Limited Seats Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-900">About Us</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Excellence in Education</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Royal Academy of Science is a premier educational institution dedicated to providing exceptional
                  education in the biological and physical sciences for GCE A/L students in Tamil medium.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Our Mission</h3>
                      <p className="text-muted-foreground">
                        To empower students with knowledge, skills, and values to excel in scientific disciplines and
                        contribute to society.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Our Vision</h3>
                      <p className="text-muted-foreground">
                        To be the leading center of excellence in science education, fostering innovation and academic
                        achievement.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Our Values</h3>
                      <p className="text-muted-foreground">
                        Excellence, integrity, innovation, inclusivity, and commitment to student success.
                      </p>
                    </div>
                  </li>
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
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-900">Our Programs</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Comprehensive Science Education</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore our specialized programs designed to prepare students for academic excellence and future
                  success.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="pb-2">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-900 mb-4">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <CardTitle>Biological Sciences</CardTitle>
                  <CardDescription>Comprehensive biology curriculum</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="text-muted-foreground">
                    In-depth study of biology, chemistry, physics, and mathematics tailored for medical and life science
                    aspirants.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
              <Card className="flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="pb-2">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-900 mb-4">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <CardTitle>Physical Sciences</CardTitle>
                  <CardDescription>Advanced physics and mathematics</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="text-muted-foreground">
                    Rigorous training in physics, chemistry, and mathematics for engineering and technology career
                    paths.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
              <Card className="flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-shadow md:col-span-2 lg:col-span-1">
                <CardHeader className="pb-2">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-900 mb-4">
                    <Award className="h-6 w-6" />
                  </div>
                  <CardTitle>Special Programs</CardTitle>
                  <CardDescription>Specialized courses and workshops</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="text-muted-foreground">
                    Supplementary programs including practical labs, research projects, and competitive exam
                    preparation.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Redesigned Success Stories Section */}
        <section id="achievements" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-900">Achievements</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Success Stories</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Celebrating the remarkable achievements of our students and alumni.
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-6xl py-12">
              {/* Statistics Section */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                {successStats.map((stat) => (
                  <div
                    key={stat.id}
                    className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="mb-4">{stat.icon}</div>
                    <h3 className="text-4xl font-bold text-blue-900 mb-2">{stat.value}</h3>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Student Success Stories */}
              <div className="relative">
                <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-blue-100 hidden md:block"></div>

                {successStories.map((story, index) => (
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
                <h3 className="text-2xl font-bold text-center mb-6">Our Alumni Network</h3>
                <p className="text-muted-foreground text-center mb-8">
                  Our alumni network spans across prestigious universities and organizations worldwide, including:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="flex flex-col items-center p-4 border rounded-lg bg-white">
                    <Image
                      alt="University Logo"
                      className="object-contain mb-2"
                      height={40}
                      src="/images/uni-1.jpg"
                      width={80}
                    />
                    <span className="text-sm text-center">University of Colombo</span>
                  </div>
                  <div className="flex flex-col items-center p-4 border rounded-lg bg-white">
                    <Image
                      alt="University Logo"
                      className="object-contain mb-2"
                      height={40}
                      src="/images/uni-2.jpg"
                      width={80}
                    />
                    <span className="text-sm text-center">University of Peradeniya</span>
                  </div>
                  <div className="flex flex-col items-center p-4 border rounded-lg bg-white">
                    <Image
                      alt="University Logo"
                      className="object-contain mb-2"
                      height={40}
                      src="/images/uni-3.jpg"
                      width={80}
                    />
                    <span className="text-sm text-center">University of Jaffna</span>
                  </div>
                  <div className="flex flex-col items-center p-4 border rounded-lg bg-white">
                    <Image
                      alt="University Logo"
                      className="object-contain mb-2"
                      height={40}
                      src="/images/uni-4.jpg"
                      width={80}
                    />
                    <span className="text-sm text-center">University of Moratuwa</span>
                  </div>
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
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-900">
                  State-of-the-Art Facilities
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Premium Learning Environment</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our high-standard classrooms are designed to provide an optimal learning experience with the latest
                  educational technology.
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-6xl py-12">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
                <div className="relative overflow-hidden rounded-xl">
                  <Image
                    alt="Modern Classroom"
                    className="object-cover w-full h-full"
                    height={400}
                    src="/images/classroom-1.jpg"
                    width={600}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="text-xl font-bold">Advanced Learning Spaces</h3>
                      <p className="text-sm">Equipped with modern technology for interactive learning</p>
                    </div>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-xl">
                  <Image
                    alt="Science Laboratory"
                    className="object-cover w-full h-full"
                    height={400}
                    src="/images/classroom-2.jpg"
                    width={600}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="text-xl font-bold">Integrated Science Labs</h3>
                      <p className="text-sm">State-of-the-art equipment for practical experiments</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-6 mt-12 md:grid-cols-2 lg:grid-cols-4">
                {classroomFeatures.map((feature) => (
                  <Card key={feature.id} className="text-center">
                    <CardHeader>
                      <div className="flex justify-center mb-4">{feature.icon}</div>
                      <CardTitle>{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="flex justify-center mt-10">
                <Button size="lg">
                  Schedule a Tour
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* News Section */}
        <section id="news" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-900">
                  Latest Updates
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">News & Announcements</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Stay updated with the latest happenings, events, and achievements at Royal Academy of Science.
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-6xl py-12">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {newsItems.map((item) => (
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
                  View All News
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-900">Photo Gallery</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Explore Our Campus</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Take a visual tour of our facilities, classrooms, laboratories, and campus life.
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-6xl py-12">
              <Carousel className="w-full">
                <CarouselContent>
                  {galleryImages.map((image) => (
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
                {galleryImages.map((image) => (
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
                  View Full Gallery
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="faculty" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-900">Our Faculty</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Expert Educators</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Meet our team of experienced and dedicated educators committed to student success.
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-6xl py-12">
              {/* Featured Educator */}
              <div className="mb-16 bg-white rounded-xl shadow-xl overflow-hidden">
                <div className="grid md:grid-cols-2 items-center">
                  <div className="relative h-[400px] overflow-hidden">
                    <Image alt="Featured Faculty Member" src="/images/faculty-1.jpg" fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-transparent flex items-center">
                      <div className="p-8 text-white">
                        <h3 className="text-3xl font-bold mb-2">Dr. Rajendran Nair</h3>
                        <p className="text-xl text-blue-100">Head of Biology Department</p>
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
                      <p className="text-muted-foreground">
                        Ph.D. in Molecular Biology with 15+ years of teaching experience at advanced levels. Dr. Nair
                        has published numerous research papers in international journals and has mentored over 500
                        students who have gone on to prestigious universities worldwide.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="text-3xl font-bold text-blue-600 mb-1">15+</div>
                        <div className="text-sm text-muted-foreground">Years Experience</div>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="text-3xl font-bold text-blue-600 mb-1">12</div>
                        <div className="text-sm text-muted-foreground">Research Papers</div>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="text-3xl font-bold text-blue-600 mb-1">500+</div>
                        <div className="text-sm text-muted-foreground">Students Mentored</div>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="text-3xl font-bold text-blue-600 mb-1">8</div>
                        <div className="text-sm text-muted-foreground">Awards Received</div>
                      </div>
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
                {/* Faculty Member 1 */}
                <div className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="aspect-[3/4] relative overflow-hidden">
                    <Image
                      alt="Faculty Member"
                      src="/images/faculty-2.jpg"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <p className="text-white text-sm mb-4">
                          Renowned physicist with research publications and specialized in preparing students for
                          competitive exams. Prof. Chandran has been recognized nationally for her innovative teaching
                          methods.
                        </p>
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
                      <h3 className="text-xl font-bold">Prof. Lakshmi Chandran</h3>
                      <Badge className="bg-blue-100 text-blue-900 hover:bg-blue-200">Physics</Badge>
                    </div>
                    <p className="text-muted-foreground text-sm">Physics Department Chair</p>
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
                      <span className="text-xs text-muted-foreground">12+ years experience</span>
                    </div>
                  </div>
                </div>

                {/* Faculty Member 2 */}
                <div className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="aspect-[3/4] relative overflow-hidden">
                    <Image
                      alt="Faculty Member"
                      src="/images/faculty-3.jpg"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <p className="text-white text-sm mb-4">
                          Award-winning educator with innovative teaching methodologies and practical laboratory
                          expertise. Dr. Kumar has developed several practical experiments that are now used nationwide.
                        </p>
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
                      <h3 className="text-xl font-bold">Dr. Anand Kumar</h3>
                      <Badge className="bg-blue-100 text-blue-900 hover:bg-blue-200">Chemistry</Badge>
                    </div>
                    <p className="text-muted-foreground text-sm">Chemistry Specialist</p>
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
                      <span className="text-xs text-muted-foreground">10+ years experience</span>
                    </div>
                  </div>
                </div>

                {/* Faculty Member 3 */}
                <div className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="aspect-[3/4] relative overflow-hidden">
                    <Image
                      alt="Faculty Member"
                      src="/images/student-3.jpg"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <p className="text-white text-sm mb-4">
                          Mathematics expert with a passion for making complex concepts accessible to all students. Ms.
                          Patel has developed a unique approach to teaching calculus that has improved student outcomes
                          by 35%.
                        </p>
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
                      <h3 className="text-xl font-bold">Ms. Divya Patel</h3>
                      <Badge className="bg-blue-100 text-blue-900 hover:bg-blue-200">Mathematics</Badge>
                    </div>
                    <p className="text-muted-foreground text-sm">Mathematics Coordinator</p>
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
                      <span className="text-xs text-muted-foreground">8+ years experience</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center mt-12">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  View All Faculty Members
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="app" className="w-full py-12 md:py-24 lg:py-32 bg-blue-900 text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-blue-800 px-3 py-1 text-sm">Mobile App</div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Learning at Your Fingertips
                  </h2>
                  <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Download our mobile app for access to study materials, practice tests, and personalized learning
                    paths.
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
                  <div className="text-sm text-gray-300">4.9 Rating (2000+ Reviews)</div>
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
              <div className="mx-auto lg:ml-auto flex justify-center">
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

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-900">Contact Us</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have questions? Reach out to us for more information about our programs and admissions.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2">
              <div className="space-y-4">
                <div className="grid gap-2">
                  <h3 className="text-xl font-bold">Visit Us</h3>
                  <p className="text-muted-foreground">
                    123 Education Avenue
                    <br />
                    Colombo 05
                    <br />
                    Sri Lanka
                  </p>
                </div>
                <div className="grid gap-2">
                  <h3 className="text-xl font-bold">Contact Information</h3>
                  <p className="text-muted-foreground">
                    Phone: +94 11 234 5678
                    <br />
                    Email: info@royalacademy.edu
                    <br />
                    Hours: Monday-Friday, 8:00 AM - 6:00 PM
                  </p>
                </div>
                <div className="grid gap-2">
                  <h3 className="text-xl font-bold">Follow Us</h3>
                  <div className="flex space-x-4">
                    <Link href="#" className="text-muted-foreground hover:text-primary">
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
                        className="h-5 w-5"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                      <span className="sr-only">Facebook</span>
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:text-primary">
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
                        className="h-5 w-5"
                      >
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                      <span className="sr-only">Instagram</span>
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:text-primary">
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
                        className="h-5 w-5"
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                      </svg>
                      <span className="sr-only">Twitter</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="grid gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First name</Label>
                      <Input id="first-name" placeholder="Enter your first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last name</Label>
                      <Input id="last-name" placeholder="Enter your last name" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <textarea
                      id="message"
                      className="min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your message"
                    />
                  </div>
                  <Button size="lg" className="w-full">
                    Send Message
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background py-6 md:py-10">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-10 h-10 rounded-md bg-blue-600 text-white">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold tracking-tight">Royal Academy</span>
                  <span className="text-xs text-muted-foreground">of Science</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Excellence in GCE A/L Biological and Physical Science education in Tamil medium.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/" className="hover:text-primary">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-primary">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/programs" className="hover:text-primary">
                    Programs
                  </Link>
                </li>
                <li>
                  <Link href="/achievements" className="hover:text-primary">
                    Achievements
                  </Link>
                </li>
                <li>
                  <Link href="/faculty" className="hover:text-primary">
                    Faculty
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Resources</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-primary">
                    Student Portal
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Study Materials
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Exam Schedule
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Career Guidance
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Newsletter</h3>
              <p className="text-sm text-muted-foreground">
                Subscribe to our newsletter for updates on programs, events, and achievements.
              </p>
              <div className="flex space-x-2">
                <Input placeholder="Enter your email" />
                <Button type="submit" size="sm">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Royal Academy of Science. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

