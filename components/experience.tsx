"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, TrendingUp } from "lucide-react"

export function Experience() {
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

  const achievements = [
    "Developed responsive React.js UI components, improving user experience by 30%",
    "Integrated REST APIs for seamless frontend-backend communication",
    "Optimized website performance, reducing page load time by 40%",
    "Collaborated with backend teams to ensure smooth API functionality",
    "Worked with Git for version control, participating in code reviews",
  ]

  return (
    <section id="experience" ref={sectionRef} className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"}`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Professional Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My journey in frontend development and the impact I've made in previous roles.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div
            className={`transition-all duration-1000 delay-200 ${isVisible ? "animate-slide-in-left opacity-100" : "opacity-0"}`}
          >
            <Card className="bg-card border-l-4 border-l-accent hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">Frontend Developer Intern</h3>
                    <h4 className="text-xl font-semibold text-accent mb-4">DygnifyVentures Pvt. Ltd.</h4>
                  </div>
                  <div className="flex flex-col md:items-end space-y-2">
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>June 2022 - Aug 2022</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>Remote</span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h5 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2 text-accent" />
                    Key Achievements
                  </h5>
                  <ul className="space-y-3">
                    {achievements.map((achievement, index) => (
                      <li
                        key={index}
                        className={`flex items-start transition-all duration-500 ${
                          isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"
                        }`}
                        style={{ animationDelay: `${(index + 3) * 200}ms` }}
                      >
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-card-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className="text-lg font-semibold text-foreground mb-3">Technologies Used</h5>
                  <div className="flex flex-wrap gap-2">
                    {["React.js", "JavaScript", "REST APIs", "Git", "HTML5", "CSS"].map((tech, index) => (
                      <Badge
                        key={tech}
                        className={`bg-accent text-accent-foreground hover:scale-110 transition-transform duration-200 ${
                          isVisible ? "animate-scale-in" : "opacity-0"
                        }`}
                        style={{ animationDelay: `${(index + 8) * 100}ms` }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div
            className={`mt-12 transition-all duration-1000 delay-600 ${isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"}`}
          >
            <Card className="bg-card border-border">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold text-foreground mb-4">Looking for New Opportunities</h3>
                <p className="text-card-foreground mb-6">
                  I'm actively seeking new challenges in frontend development where I can contribute to innovative
                  projects and continue growing my skills in React.js and modern web technologies.
                </p>
                <Badge className="bg-green-500 text-white text-lg px-4 py-2">Available for Immediate Start</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
