"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Skills() {
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

  const skillCategories = [
    {
      title: "Frontend Technologies",
      skills: ["React.js", "JavaScript", "HTML5", "CSS", "Bootstrap"],
      color: "bg-accent text-accent-foreground",
    },
    {
      title: "Backend & APIs",
      skills: ["Node.js", "REST APIs"],
      color: "bg-chart-2 text-white",
    },
    {
      title: "Databases",
      skills: ["Firebase", "MongoDB"],
      color: "bg-chart-3 text-white",
    },
    {
      title: "Tools & Version Control",
      skills: ["Git", "GitHub", "VS Code"],
      color: "bg-chart-4 text-white",
    },
  ]

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"}`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Technical Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of the technologies and tools I work with to create amazing web experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`transition-all duration-1000 ${isVisible ? "animate-scale-in opacity-100" : "opacity-0"}`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <Card className="bg-card border-accent/20 hover:border-accent/50 hover:shadow-lg transition-all duration-300 hover:scale-105 h-full">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-4 text-center">{category.title}</h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        className={`${category.color} hover:scale-110 transition-transform duration-200 cursor-default`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div
          className={`mt-16 transition-all duration-1000 delay-800 ${isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"}`}
        >
          <Card className="bg-muted border-border">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Additional Details</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center">
                  <h4 className="text-lg font-semibold text-accent mb-3">Languages</h4>
                  <div className="flex justify-center gap-2">
                    <Badge variant="outline" className="border-accent text-accent">
                      English
                    </Badge>
                    <Badge variant="outline" className="border-accent text-accent">
                      Hindi
                    </Badge>
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="text-lg font-semibold text-accent mb-3">Availability</h4>
                  <Badge className="bg-green-500 text-white">Immediate</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
