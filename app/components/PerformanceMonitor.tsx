'use client'

import { useEffect } from 'react'

const PerformanceMonitor = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Monitor Largest Contentful Paint (LCP)
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            // Only log if LCP is above 2.5s (poor performance threshold)
            if (entry.startTime > 2500) {
              console.warn('⚠️ LCP (Poor):', entry.startTime, 'ms')
            }
          }
        }
      })
      
      observer.observe({ entryTypes: ['largest-contentful-paint'] })

      // Monitor First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const fidEntry = entry as any
          const fidValue = fidEntry.processingStart - fidEntry.startTime
          // Only log if FID is above 300ms (poor performance threshold)
          if (fidValue > 300) {
            console.warn('⚠️ FID (Poor):', fidValue, 'ms')
          }
        }
      })
      
      fidObserver.observe({ entryTypes: ['first-input'] })

      // Monitor Cumulative Layout Shift (CLS)
      let clsValue = 0
      let lastLoggedCLS = 0
      let clsLogTimeout: NodeJS.Timeout | null = null
      
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value
          }
        }
        
        // Only log if CLS increased significantly (by 0.05) and debounce the logging
        // Also only log if CLS exceeds 0.25 (poor performance threshold)
        if (clsValue - lastLoggedCLS >= 0.05 && clsValue > 0.25) {
          if (clsLogTimeout) {
            clearTimeout(clsLogTimeout)
          }
          
          clsLogTimeout = setTimeout(() => {
            console.warn('⚠️ CLS (Poor):', clsValue)
            lastLoggedCLS = clsValue
          }, 500) // Debounce by 500ms
        }
      })
      
      clsObserver.observe({ entryTypes: ['layout-shift'] })
      
      // Log final CLS when page is hidden or before unload (only if poor)
      const handleVisibilityChange = () => {
        if (document.visibilityState === 'hidden' && clsValue > 0.25) {
          console.warn('⚠️ Final CLS (Poor):', clsValue)
        }
      }
      
      const handleBeforeUnload = () => {
        if (clsValue > 0.25) {
          console.warn('⚠️ Final CLS (Poor):', clsValue)
        }
      }
      
      document.addEventListener('visibilitychange', handleVisibilityChange)
      window.addEventListener('beforeunload', handleBeforeUnload)

      return () => {
        observer.disconnect()
        fidObserver.disconnect()
        clsObserver.disconnect()
        if (clsLogTimeout) {
          clearTimeout(clsLogTimeout)
        }
        document.removeEventListener('visibilitychange', handleVisibilityChange)
        window.removeEventListener('beforeunload', handleBeforeUnload)
      }
    }
  }, [])

  return null
}

export default PerformanceMonitor
