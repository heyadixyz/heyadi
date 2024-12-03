'use client'

import { useState, useEffect } from 'react'
import { ChevronDown, ChevronUp, Twitter, Linkedin, Dribbble, FileText, Instagram } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import './globals.css'

const projects = [
  {
    name: "Hack4Bengal",
    role: "Marketing Lead",
    period: "Nov '23 - Present",
    type: "Part-time (Community)",
    logo: "/logos/hack4bengal-logo.png",
    details: [
      "- handled their twitter acc of 1.4k (posting, RT, QT, reply, etc)",
      "- created 2 of my best fav. marketing campaigns both on insta & x",
      "- did live event tweeting → engagement++",
      "- hosted a few twitter spaces with ppl like (haimantika, kunal, and more)"
    ] 
  },
  {
    name: "Autopilott Marketing",
    role: "Marketing & Ops",
    period: "Feb '23 - Sept '24",
    type: "Full-time",
    logo: "/logos/autopilott-logo.png",
    details: [
      "- helped 10+ service based biz get 25% more sales within <90 days working w them",
      "- took a few sales calls, 100s of cold calling, outreach + followups",
      "- learnt sm abt sales and marketing; also tried hands with meta ads",
      "- designed + edited 200+ ad creatives & vids for clients"
    ]
  },
  {
    name: "HealthEssencia",
    role: "Design + Content",
    period: "Jun '22 - Jun '23",
    type: "Part-time",
    logo: "/logos/healthessencia-logo.png",
    details: [
      "- made tons of frenz + >30 social media designs",
      "- did 250 → 480 insta followers in 2 weeks",
    ]
  },
  {
    name: "dAppTales",
    role: "Design intern",
    period: "Feb '24 - Mar '24",
    type: "Internship",
    logo: "/logos/dapptales-logo.png",
    details: [
      "- responsible to learn + design web3 focused creatives",
      "- learnt imp of quality work & design ofc",
    ]
  },
  {
    name: "Codelance Devs",
    role: "Design + Content intern",
    period: "Feb '23 - April '23",
    type: "Internship",
    logo: "/logos/codelance-logo.png",
    details: [
      "- made a few socials posts for them",
      "- worked on their brand identity + content side",
    ]
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
    <div className="container dark:bg-neutral-1000 dark:text-white">
      <nav className="nav">
        <ul className="flex justify-center space-x-6">
          <li>
            <Link href="/" className="text-blue-500 hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/POW" className="text-blue-500 hover:underline">
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
            hey, i{"'"}m aditya  👋 <br />
            <span style={{ fontWeight: 'normal', fontSize: '0.7em' }}>(looking for BD & Marketing roles)</span>
          </h1>
          
          <p className="mb-2 dark:text-neutral-300">
            at age of 6, i found i could draw iron man well. like really well ;) <br />
            & at 13, i sold my first {"\""}<Link href="https://www.flipkart.com/hallucination-of-life/p/itmf34sfgchuwgyf?pid=9788193701805&lid=LSTBOK9788193701805IDOGDY&marketplace=FLIPKART&q=hallucination+of+life&store=search.flipkart.com&srno=s_1_1&otracker=search&otracker1=search&fm=organic&iid=14e73f8e-2c38-4d4a-8ee4-e267f9c14146.9788193701805.SEARCH&ppt=hp&ppn=homepage&ssid=l6apy6p3kg0000001733122908953&qH=b9fa622a26eb22ee">product</Link>{"\""}~ a book i wrote
          </p>
          <p className="mb-2 dark:text-neutral-300">
            and it{"'"}s been design + marketing ever since then
          </p>
          <p className="mb-2 dark:text-neutral-300">
            in grade 12 started out <br />
            - designing insta posts for my <Link href="https://instagram.com/do4nation578/">friend{"'"}s NGO</Link> <br />
            - helped a bunch of genz{"'"}s promote health & wellbeing topics to genzs on <Link href="instagram.com/healthessencia/">insta</Link>
          </p>
          <p className="mb-2 dark:text-neutral-300">
            After designing for almost a year, I felt smtg was missing. Just designing wasn{"'"}t so much of fun now
          </p>
          <p className="mb-2 dark:text-white">
          So, I explored marketing & content too & enrolled myself for btech cse alongside
          </p>
          <p className="mb-2 dark:text-white">
            i{"'"}ve worked on a bunch of stuff since, worked (offline) at a marketing agency for abt 1.5 yrs, built communities, started a <Link href="https://www.youtube.com/@heyadixyz/">smol podcast</Link>, and sm more.
          </p>
          <p className="mb-2 dark:text-white">
            in 2023, i was introduced to web3 by one of my close friend. couldn{"'"}t exactly understand then, so didn{"'"}t go further
          </p>
          <p className="mb-2 dark:text-white">
            met <Link href="https://x.com/imanishbarnwal/">Manish</Link> & <Link href="https://x.com/sanmoydam/">Sanmoy</Link> ser <Link href="https://x.com/hack4bengal/">@H4B S03</Link>, clarified my doubts on web3 & now im more bullish than ever
          </p>
          <p className="mb-2 dark:text-white">
          currently in lookout for BD and marketing roles in web3.
          </p>
        </section>
        <section id="projects" className="mb-8">
          <h2 className="text-xl font-bold mb-4">
          A few of my POW on marketing + design
          </h2>

          {projects.map((project, index) => (
            <div key={index} className="project mb-4 last:mb-0">
              <div className="flex items-start">
              {project.logo ? (
                <div className="w-12 h-12 mr-4 flex-shrink-0">
                  <Image 
                    src={project.logo} 
                    alt={`${project.name} logo`} 
                    width={48} 
                    height={48} 
                    className="rounded-full object-cover"
                  />
                </div>
              ) : (
                <div 
                  className="w-12 h-12 bg-gray-200 rounded-full mr-4 flex-shrink-0" 
                  aria-hidden="true"
                />
              )}
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
        {Array.isArray(project.details) ? (
          project.details.map((line, idx) => (
            <p key={idx} className="mb-1">
              {line}
            </p>
          ))
        ) : (
          <p>{project.details}</p>
        )}
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
          <p className="mb-4">i love connecting with cool people and learn, learn, and learn… <br />
          How cool are u? lmk
          </p>
          <a 
            href="mailto:aditya03officialny@gmail.com" 
            className="text-blue-500 mb-6 inline-block"
          >
            aditya03officialny@gmail.com
          </a>
          <div className="social-icons flex justify-center space-x-4">
            <a 
              href="x.com/heyadixyz" 
              className="text-gray-600 hover:text-blue-500 transition-colors"
            >
              <Twitter size={24} aria-label="Twitter" />
            </a>
            <a 
              href="linkedin.com/in/heyadixyz" 
              className="text-gray-600 hover:text-blue-500 transition-colors"
            >
              <Linkedin size={24} aria-label="LinkedIn" />
            </a>
            <a 
              href="dribbble.com/heyadixyz" 
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
              href="instagram.com/heyadixyz" 
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
