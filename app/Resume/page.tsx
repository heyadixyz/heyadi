'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function ResumePage() {
  const router = useRouter()
  const [showMessage, setShowMessage] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(false)
      router.push('https://drive.google.com/file/d/1FLka7N_vGcGd6kY585Bv1WqVEcfnG7k2/view?usp=sharing')
    }, 2000)

    return () => clearTimeout(timer)
  }, [router])

  if (!showMessage) {
    return null
  }

  return (
    <div className="flex items-center justify-center h-screen bg-white dark:bg-neutral-900">
      <p className="text-2xl font-bold text-center text-black dark:text-white">
        aditya is still learning tho 🫡
      </p>
    </div>
  )
}

