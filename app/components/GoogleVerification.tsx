'use client'

import { useEffect } from 'react'

export default function GoogleVerification() {
  useEffect(() => {
    // Check if meta tag already exists
    const existingMeta = document.querySelector('meta[name="google-site-verification"]')
    
    if (!existingMeta) {
      const meta = document.createElement('meta')
      meta.name = 'google-site-verification'
      meta.content = 'q021Kxdt-XlMmlEMsW8LMeSppqPXjr3IfMw1llhujFI'
      document.head.appendChild(meta)
    }
  }, [])

  return null
}

