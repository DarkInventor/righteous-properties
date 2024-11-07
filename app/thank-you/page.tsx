// 'use client'

// import { useState, useEffect } from 'react'
// import { Button } from "@/components/ui/button"
// import Link from 'next/link'

// export default function ThankYouPage() {
//   const [countdown, setCountdown] = useState(5)

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCountdown((prevCount) => {
//         if (prevCount > 0) {
//           return prevCount - 1
//         }
//         clearInterval(timer)
//         return 0
//       })
//     }, 1000)

//     return () => clearInterval(timer)
//   }, [])

//   const handleClose = () => {
//     window.close()
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-white">
//       <div className="max-w-md w-full text-center p-8 border border-gray-200 rounded-lg shadow-sm">
//         <h1 className="text-2xl font-bold mb-4 text-black">Thank You!</h1>
//         <p className="text-gray-700 mb-4">
//           Thank you for sharing your details. Your details have been received.
//         </p>
//         {countdown > 0 ? (
//           <p className="text-gray-700 mb-6">
//             You will be able to visit our main site in <span className="font-bold">{countdown}s</span>.
//           </p>
//         ) : (
//           <Link 
//             href="https://righteousproperties.ae/"
//             className="inline-block bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded transition duration-300 mb-6"
//           >
//             Visit Our Main Site
//           </Link>
//         )}
//         <p className="text-gray-600 mb-6">
//           Please close the window to exit.
//         </p>
//       </div>
//     </div>
//   )
// }


'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import Script from 'next/script'
import Head from 'next/head'
import Image from 'next/image'

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
    <>
      <Head>
        <noscript>
          <Image 
            height="1" 
            width="1" 
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=467613539576844&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </Head>
      <Script id="facebook-pixel">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '467613539576844');
          fbq('track', 'PageView');
          fbq('track', 'Lead');
        `}
      </Script>
      <div className="min-h-screen flex items-center justify-center bg-white px-4">
        <div className="max-w-md w-full text-center p-8 border border-gray-200 rounded-lg shadow-sm">
          <h1 className="text-2xl font-bold mb-4 text-black">Thank You!</h1>
          <p className="text-gray-700 mb-4">
            Our property experts will get in touch with you shortly.
          </p>
          {countdown > 0 ? (
            <p className="text-gray-700 mb-6">
              You will be able to visit our main site in <span className="font-bold">{countdown}s</span>.
            </p>
          ) : (
            <Link 
              href="https://righteousproperties.ae/"
              className="inline-block bg-green-500 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded transition duration-300 mb-6"
            >
              Visit Our Main Site
            </Link>
          )}
          <p className="text-gray-600 mb-6">
            Please close the window to exit.
          </p>
          {/* <Button 
            onClick={handleClose}
            className="w-full bg-gray-200 hover:bg-gray-300 text-black font-bold py-2 px-4 rounded transition duration-300"
          >
            Close Window
          </Button> */}
        </div>
      </div>
    </>
  )
}