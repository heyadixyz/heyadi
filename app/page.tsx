'use client'

import { useState, useEffect } from 'react'
import { ChevronDown, ChevronUp, Twitter, Linkedin, Dribbble, FileText, Instagram } from 'lucide-react'
import Link from 'next/link'
import './globals.css'

const projects = [
  {
    name: "Autopilott Marketing",
    role: "marketing & ops",
    period: "Feb '23 - Sept '24",
    type: "Full-time",
    details: "Full-time role focusing on marketing strategies and operations."
  },
  {
    name: "Hack4Bengal",
    role: "marketing things",
    period: "Feb '23 - Sept '24",
    type: "Part-time/volunteer"
  },
  {
    name: "Health Essencia",
    role: "design + content work",
    period: "Feb '23 - Sept '24",
    type: "Part-time"
  }
]

export default function Portfolio() {
  const [openStates, setOpenStates] = useState<{ [key: string]: boolean }>({})
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    const initialStates = projects.reduce((acc, _, index) => {
      acc[index] = false
      return acc
    }, {} as { [key: string]: boolean })

    setOpenStates(initialStates)
    setIsMounted(true)
  }, [])

  const toggleOpen = (index: number) => {
    setOpenStates(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  if (!isMounted) {
    return null;
  }

  return (
    <div className="container dark:bg-neutral-900 dark:text-white">
      <nav className="nav">
        <ul className="flex justify-center space-x-6">
          <li>
            <Link href="#" className="text-blue-500 hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="#projects" className="text-blue-500 hover:underline">
              POW
            </Link>
          </li>
          <li>
            <Link href="#" className="text-blue-500 hover:underline">
              Resume
            </Link>
          </li>
          <li>
            <Link href="#" className="text-blue-500 hover:underline">
              Blogs
            </Link>
          </li>
        </ul>
      </nav>
      <div className="content">
        <section className="mb-8">
          <h1 className="text-2xl font-bold mb-4 dark:text-white">
            hey, i'm aditya 
          </h1>
          <p className="mb-2 dark:text-neutral-300">
            at age of 6, i found i could draw iron man well. like really well. ;) & at 
            13, i sold my first "product" ~ a book that i wrote.
          </p>
          <p className="mb-2 dark:text-neutral-300">
            and it's been design + marketing ever since then.
          </p>
          <p className="mb-2 dark:text-neutral-300">
            in 12th grade i started out by designing insta posts for my friend's 
            NGO. later moved into helping a bunch of noida kids promote health and 
            wellbeing topics to genzs on insta i.e. *HealthEssencia*. (ofc it was just remote 
            internships tho).
          </p>
          <p className="mb-2 dark:text-neutral-300">
            After working at HealthEssencia for almost a year, I felt smtg was 
            missing. Just designing wasn't fun.
          </p>
          <p className="mb-2 dark:text-white">
            So, I explored marketing & content too. I also enrolled myself for 
            btech cse alongside ;)
          </p>
          <p className="mb-2 dark:text-white">
            i've worked on a bunch of stuff since, worked (offline) at a 
            marketing agency for abt 1.5 yrs, built communities, started a smol podcast, 
            and sm more.
          </p>
          <p className="mb-2 dark:text-white">
            in 2023, i was introduced to web3 by one of my close friends. 
            couldn't exactly understand then, so didn't go further.
          </p>
          <p className="mb-2 dark:text-white">
            met manish & sammoy bhaiya at H4B S03, clarified my doubts for 
            web3 and now im more bullish than ever.
          </p>
          <p className="mb-2 dark:text-white">
            currently working on myself for BD and marketing roles in web3.
          </p>
        </section>
        <section id="projects" className="mb-8">
          <h2 className="text-xl font-bold mb-4">
            projects i've worked on or am currently working on
          </h2>

          {projects.map((project, index) => (
            <div key={index} className="project mb-4 last:mb-0">
              <div className="flex items-start">
                <div 
                  className="w-12 h-12 bg-gray-200 rounded-full mr-4 flex-shrink-0" 
                  aria-hidden="true"
                />
                <div className="flex-grow">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-bold">{project.name}</div>
                      <div className="text-sm">{project.role}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm">{project.period}</div>
                      <div className="text-xs text-gray-500">{project.type}</div>
                    </div>
                  </div>
                  {project.details && (
                    <>
                      <button
                        onClick={() => toggleOpen(index)}
                        className="flex items-center mt-2 text-sm text-blue-500"
                        aria-expanded={openStates[index]}
                      >
                        {openStates[index] ? "less details" : "more details"}
                        {openStates[index] ? (
                          <ChevronUp className="ml-1" />
                        ) : (
                          <ChevronDown className="ml-1" />
                        )}
                      </button>
                      {openStates[index] && (
                        <div className="mt-2">
                          <p>{project.details}</p>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </section>
        <footer className="text-center mt-8">
          <p className="mb-4">wanna build something with me or just wanna say hi?</p>
          <a 
            href="mailto:aditya03officialny@gmail.com" 
            className="text-blue-500 mb-6 inline-block"
          >
            aditya03officialny@gmail.com
          </a>
          <div className="social-icons flex justify-center space-x-4">
            <a 
              href="#" 
              className="text-gray-600 hover:text-blue-500 transition-colors"
            >
              <Twitter size={24} aria-label="Twitter" />
            </a>
            <a 
              href="#" 
              className="text-gray-600 hover:text-blue-500 transition-colors"
            >
              <Linkedin size={24} aria-label="LinkedIn" />
            </a>
            <a 
              href="#" 
              className="text-gray-600 hover:text-blue-500 transition-colors"
            >
              <Dribbble size={24} aria-label="Dribbble" />
            </a>
            <a 
              href="#" 
              className="text-gray-600 hover:text-blue-500 transition-colors"
            >
              <FileText size={24} aria-label="Medium" />
            </a>
            <a 
              href="#" 
              className="text-gray-600 hover:text-blue-500 transition-colors"
            >
              <Instagram size={24} aria-label="Instagram" />
            </a>
          </div>
        </footer>
      </div> 
    </div>
  )
}

