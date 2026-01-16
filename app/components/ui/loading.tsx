'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

interface LoadingProps {
  isLoading?: boolean
  children: React.ReactNode
}

const LoadingSpinner = () => (
  <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center">
    <div className="flex flex-col items-center space-y-4">
      {/* Animated Spinner */}
      <div className="relative">
        <div className="w-16 h-16 border-4 border-primary/20 rounded-full animate-spin">
          <div className="absolute top-0 left-0 w-16 h-16 border-4 border-transparent border-t-primary rounded-full animate-spin"></div>
        </div>
        <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-r-primary/60 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '0.8s' }}></div>
      </div>
      
      {/* Loading Text */}
      <div className="text-center">
        <p className="text-lg font-semibold text-foreground animate-pulse">Loading...</p>
        <p className="text-sm text-muted-foreground">Please wait while we prepare your content</p>
      </div>
      
      {/* Progress Dots */}
      <div className="flex space-x-2">
        <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
        <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
        <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
      </div>
    </div>
  </div>
)

export const Loading = ({ isLoading = false, children }: LoadingProps) => {
  const [isPageLoading, setIsPageLoading] = useState(false)

  // Only show loading for actual data loading, not navigation
  useEffect(() => {
    if (isLoading) {
      setIsPageLoading(true)
    } else {
      setIsPageLoading(false)
    }
  }, [isLoading])

  return (
    <>
      {children}
      {isPageLoading && <LoadingSpinner />}
    </>
  )
}

export default Loading
