"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Calendar } from "lucide-react"

export function About() {
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

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"}`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my background, education, and what drives my passion for frontend development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-1000 delay-200 ${isVisible ? "animate-slide-in-left opacity-100" : "opacity-0"}`}
          >
            <Card className="bg-card border-border hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Personal Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-accent" />
                    <span className="text-card-foreground">Gurugram, India</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-accent" />
                    <span className="text-card-foreground">+91-8053104059</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-accent" />
                    <span className="text-card-foreground">sk6306210@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-accent" />
                    <span className="text-card-foreground">Available Immediately</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div
            className={`transition-all duration-1000 delay-400 ${isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"}`}
          >
            <Card className="bg-card border-border hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Education</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-accent">Bachelor of Technology</h4>
                    <p className="text-card-foreground">Computer Science</p>
                    <p className="text-sm text-muted-foreground">
                      St. Andrews Institute of Technology and Management, Gurgaon
                    </p>
                    <p className="text-sm text-muted-foreground">2021 - 2024 | CGPA: 7.0/10</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-accent">Advanced Diploma in Information Technology</h4>
                    <p className="text-sm text-muted-foreground">Dec 2022 - Present</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-accent">Class XII (CBSE)</h4>
                    <p className="text-sm text-muted-foreground">2020 | 62%</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div
          className={`mt-12 transition-all duration-1000 delay-600 ${isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"}`}
        >
          <Card className="bg-card border-border hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Professional Summary</h3>
              <p className="text-lg text-card-foreground leading-relaxed text-center max-w-4xl mx-auto">
                Frontend Developer specializing in React.js, JavaScript, and UI/UX design. Proven ability to develop
                scalable, high-performance web applications with seamless API integrations. Experienced in version
                control, automation testing, and optimizing UI components to enhance user engagement and performance.
                Passionate about building intuitive, responsive, and dynamic web experiences.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
