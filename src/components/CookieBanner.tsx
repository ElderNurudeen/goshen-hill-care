import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cookie, X } from 'lucide-react'
export function CookieBanner() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const accepted = localStorage.getItem('ghc-cookies-accepted')
    if (!accepted) {
      // Small delay so it doesn't flash on load
      const timer = setTimeout(() => setVisible(true), 800)
      return () => clearTimeout(timer)
    }
  }, [])
  const handleAccept = () => {
    localStorage.setItem('ghc-cookies-accepted', 'true')
    setVisible(false)
  }
  const handleDismiss = () => {
    localStorage.setItem('ghc-cookies-accepted', 'true')
    setVisible(false)
  }
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{
            y: 100,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          exit={{
            y: 100,
            opacity: 0,
          }}
          transition={{
            type: 'spring',
            damping: 25,
            stiffness: 200,
          }}
          className="fixed bottom-0 inset-x-0 z-50 p-4 sm:p-5"
        >
          <div className="max-w-3xl mx-auto bg-slate-800 rounded-xl shadow-2xl border border-slate-700/50 px-5 py-4 sm:px-6 sm:py-4">
            <div className="flex items-start sm:items-center gap-4">
              <div className="bg-lilac-100/10 p-2 rounded-lg shrink-0 hidden sm:flex">
                <Cookie className="w-5 h-5 text-lilac-300" />
              </div>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed flex-1">
                We use cookies to improve your experience on our site. By
                continuing to browse, you agree to our{' '}
                <a
                  href="#"
                  className="text-lilac-300 hover:text-lilac-200 underline underline-offset-2 transition-colors"
                >
                  Cookie Policy
                </a>
                .
              </p>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={handleAccept}
                  className="px-4 py-2 bg-lilac-500 hover:bg-lilac-600 text-white text-xs sm:text-sm font-medium rounded-lg transition-colors duration-200"
                >
                  Accept
                </button>
                <button
                  onClick={handleDismiss}
                  aria-label="Dismiss cookie banner"
                  className="p-1.5 text-slate-400 hover:text-slate-200 transition-colors duration-200"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
