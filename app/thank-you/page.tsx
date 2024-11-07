'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function ThankYouPage() {
  const [countdown, setCountdown] = useState(5)

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCount) => {
        if (prevCount > 0) {
          return prevCount - 1
        }
        clearInterval(timer)
        return 0
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleClose = () => {
    window.close()
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-md w-full text-center p-8 border border-gray-200 rounded-lg shadow-sm">
        <h1 className="text-2xl font-bold mb-4 text-black">Thank You!</h1>
        <p className="text-gray-700 mb-4">
          Thank you for sharing your details. Your details have been received.
        </p>
        {countdown > 0 ? (
          <p className="text-gray-700 mb-6">
            You will be able to visit our main site in <span className="font-bold">{countdown}s</span>.
          </p>
        ) : (
          <Link 
            href="https://righteousproperties.ae/"
            className="inline-block bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded transition duration-300 mb-6"
          >
            Visit Our Main Site
          </Link>
        )}
        <p className="text-gray-600 mb-6">
          Please close the window to exit.
        </p>
        {/* <Button 
          onClick={handleClose}
          className="w-full font-bold py-2 px-4 hover:bg-gray-800" variant="default"
        >
          Close Window
        </Button> */}
      </div>
    </div>
  )
}