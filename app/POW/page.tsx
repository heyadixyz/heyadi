'use client'

import Link from 'next/link'
// import { ExternalLink } from 'lucide-react'

// const powItems = [
//   {
//     id: 1,
//     title: "Hosted my first whole-day offline event - DevFest2024",
//     link: "https://x.com/heyadixyz/status/1863220455945187796"
//   },
//   {
//     id: 2,
//     title: "shot a podcast w @hipreeeet (more podcasts here)",
//     link: "https://x.com/heyadixyz/status/1855804040887886195"
//   },
//   {
//     id: 3,
//     title: "Oct '24 recap (crazy month of new exp tho)",
//     link: "https://x.com/heyadixyz/status/1853023204237024514"
//   },
//   {
//     id: 4,
//     title: "Learning Rust from @HackQuest",
//     link: "https://x.com/heyadixyz/status/1849518931142377753"
//   },
//   {
//     id: 5,
//     title: "Hosted a web3 offline session w @Starknet",
//     link: "https://x.com/web3gorkha/status/1836467856273477946"
//   }
// ]


export default function POWPage() {
  return (
    <><div className="container dark:bg-neutral-1000 dark:text-white">
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
            <Link href="/Resume" className="text-blue-500 hover:underline">
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
            I love community + web3 & ofc showing my journey <br />
            here are a few of {"'"}em ;)
            {/* <span style={{ fontWeight: 'normal', fontSize: '0.7em' }}>(looking for BD & Marketing roles)</span> */}
          </h1>
          
          <p className="mb-2 dark:text-neutral-300">
          <Link href="https://x.com/heyadixyz/status/1863220455945187796/">1. Hosted my first whole-day offline event - DevFest2024</Link>
          </p>
          
          <p className="mb-2 dark:text-neutral-300">
          <Link href="https://x.com/heyadixyz/status/1855804040887886195/">2. shot a podcast w @hipreeeet</Link> <Link href="https://youtube.com/@heyadixyz/">(more podcasts here)</Link>
          </p>

          <p className="mb-2 dark:text-neutral-300">
          <Link href="https://x.com/heyadixyz/status/1853023204237029514/">3. Oct ‘24 recap (crazy month of new exp tho)</Link>
          </p>

          <p className="mb-2 dark:text-neutral-300">
          <Link href="https://x.com/heyadixyz/status/1849518931142377753/">4. Learning Rust from @HackQuest</Link>
          </p>

          <p className="mb-2 dark:text-neutral-300">
          <Link href="https://x.com/Web3gorkha/status/1836467856273477946/">5. Hosted a web3 offline session w @Starknet</Link>
          </p>

          <p className="mb-2 dark:text-neutral-300">
          adding more soon...
          </p>
          
        </section>
        
      </div>
    </div></>
  )
}
