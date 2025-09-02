"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Calendar } from "lucide-react"

export function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      title: "MovieFlix – Search Movies & TV Shows",
      description:
        "A user-friendly movie and TV show search application where users can discover, filter, and manage their favorite content with ease.",
      technologies: ["React.js", "APIs", "JavaScript", "CSS"],
      liveDemo: "https://sumit1003.github.io/Movies-Finder-app/",
      github: "https://github.com/Sumit1003/Movies-Finder-app",
      features: [
        "Search functionality for movies and TV shows",
        "Filter and sort content by various criteria",
        "Responsive design for all devices",
        "API integration for real-time data",
      ],
    },
    {
      title: "Quiz App – Feature Expansion & UI Enhancement",
      description:
        "An interactive quiz application with dynamic categories, score tracking, and enhanced user experience through improved UI/UX design.",
      technologies: ["JavaScript", "React.js", "APIs", "LocalStorage"],
      liveDemo: "https://quiz-app-sumit1003s-projects.vercel.app/",
      github: "https://github.com/Sumit1003/Quiz-App",
      features: [
        "Added 10 dynamic quiz categories with unique icons",
        "Built responsive category dashboard using CSS Grid/Flexbox",
        "Implemented category-wise high score tracking using localStorage",
        "Integrated dynamic API calls to fetch category-based questions",
        "Enhanced UI/UX with visual indicators and feedback",
      ],
    },
    {
      title: "Resume Builder — ATS-Ready Resume Maker",
      description:
        "A modern, interactive resume builder for students and new grads. Create professional, ATS-friendly resumes with real-time preview, customizable templates, and built-in guidance.",
      technologies: ["React.js", "Next.js", "Tailwind CSS", "JavaScript"],
      liveDemo: "https://cvcraft-cyan.vercel.app/",
      github: "https://github.com/Sumit1003/cvcraft",
      features: [
        "Step-by-step builder with real-time preview and form validation",
        "4+ ATS-optimized templates with filtering and live template preview",
        "Built-in ATS guide with keyword suggestions, best practices, and pitfalls to avoid",
        "Deep customization: fonts, sizing, color palettes, spacing, header styles",
        "Multi-format export: PDF, DOCX, and HTML (ATS-friendly structure)",
      ],
    },
    {
      title: "Auth UI – Login Page & Dashboard",
      description:
        "A simple and responsive authentication UI built with HTML, CSS, and JavaScript. Includes login, sign-up, and forgot password navigation with clean and minimal design.",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveDemo: "https://sumit1003.github.io/Auth-UI/",
      github: "https://github.com/Sumit1003/Auth-UI",
      features: [
        "Clean, minimal, and mobile-friendly design",
        "Login form with username & password fields",
        "Forgot Password and Sign Up navigation links",
        "Easy to customize (colors, typography, and assets)",
      ],
    },
    {
      title: "Modern MP3 Player",
      description:
        "A beautifully designed, responsive music player built with HTML, CSS, and JavaScript. Mimics popular streaming apps with playlist management, volume control, and media playback.",
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Audio API",
        "Feather Icons",
      ],
      liveDemo: "https://music-player-dshbored.vercel.app/",
      github: "https://github.com/Sumit1003/Music-Player-Dshbored",
      features: [
        "Minimal, modern UI with smooth animations and transitions",
        "Responsive layout with sidebar navigation (Home, Search, Library",
        "FMusic controls: Play/Pause, Next, Previous, Shuffle, Repeat",
        "Playlist management with categories & liked songs",
      ],
    },
    {
      title: "Weather & Task Manager App",
      description:
        "A web-based application combining real-time weather updates with a simple yet effective task manager. Built for productivity with smooth UI, animations, and dark mode support.",
      technologies: ["HTML", "CSS", "JavaScript", "OpenWeatherMap API"],
      liveDemo: "https://weather-app-sumit1003s-projects.vercel.app/",
      github: "https://github.com/Sumit1003/Weather-app",
      features: [
        "Real-time weather data (temperature, humidity, wind, 5-day forecast) via OpenWeatherMap API",
        "City search functionality with dynamic weather icons",
        "Dark/Light mode toggle with smooth transitions",
        "Task management: add, edit, delete tasks with priorities & due dates",
      ],
    },
    {
      title: "Multi-functional Clock",
      description:
        "A web application that combines a digital & analog clock, stopwatch, and countdown timer into one interface. Includes timezone selection, dark/light mode, and full responsiveness across devices.",
      technologies: ["HTML5", "CSS3", "JavaScript(ES6)"],
      liveDemo: "https://multi-functional-clock.vercel.app/",
      github: "https://github.com/Sumit1003/Multi-functional-Clock",
      features: [
        "Digital & analog clock with current date",
        "Timezone selection for viewing different time zones",
        "Stopwatch with start, stop, reset & lap recording",
        "Countdown timer with start, pause & reset controls",
        "Dark/Light mode toggle with smooth transitions",
        "Responsive design for all screen sizes",
      ],
    },
    {
      title: "🍔 FoodDash - Admin Dashboard",
      description:
        "FoodDash is a responsive and interactive admin dashboard designed for food delivery businesses. It provides analytics, order management, and customization features to help streamline business operations.",
      technologies: ["HTML5", "CSS3", "JavaScript(ES6)"],
      liveDemo: "https://sumit1003.github.io/Food-Dash/",
      github: "https://github.com/Sumit1003/Food-Dash",
      features: [
        "📊 Analytics Dashboard – View total sales, orders, and new customers.",
        "📦 Order Management – Track and update order statuses.",
        "⚙ Settings Page – Manage user profile and preferences",
        "🌙 Dark Mode Support (planned)",
        "📱 Responsive Design – Optimized for both desktop and mobile.",
      ],
    },
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"}`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work demonstrating my skills in React.js, JavaScript, and modern web development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`transition-all duration-1000 ${isVisible ? "animate-scale-in opacity-100" : "opacity-0"}`}
              style={{ animationDelay: `${index * 300}ms` }}
            >
              <Card className="bg-card border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300 hover:scale-105 h-full">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl font-bold text-foreground">{project.title}</CardTitle>
                  </div>
                  <p className="text-card-foreground leading-relaxed">{project.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-foreground mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-card-foreground text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-foreground mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          className="bg-accent text-accent-foreground hover:scale-110 transition-transform duration-200"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    {project.liveDemo && (
                      <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground flex-1">
                        <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    <Button
                      asChild
                      variant="outline"
                      className="border-accent text-accent hover:bg-accent hover:text-accent-foreground flex-1 bg-transparent"
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div
          className={`text-center mt-12 transition-all duration-1000 delay-600 ${isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"}`}
        >
          <p className="text-muted-foreground mb-6">Want to see more of my work?</p>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
          >
            <a href="https://github.com/Sumit1003" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
