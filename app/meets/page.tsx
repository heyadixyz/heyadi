'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function MeetsPage() {
  const router = useRouter()
  const [showMessage, setShowMessage] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(false)
      router.push('https://meet.google.com/ksg-shuf-usg')
    }, 2000)

    return () => clearTimeout(timer)
  }, [router])

  if (!showMessage) {
    return null
  }

  return (
    <div className="flex items-center justify-center h-screen bg-white dark:bg-neutral-900">
      <p className="text-2xl font-bold text-center text-black dark:text-white">
        btw aditya loves to yap 😅
      </p>
    </div>
  )
}

