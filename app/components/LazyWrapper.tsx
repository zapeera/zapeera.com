'use client'

import { Suspense, lazy, ComponentType, ReactNode } from 'react'
import { cn } from '@/app/lib/utils'

interface LazyWrapperProps {
  children: ReactNode
  fallback?: ReactNode
  className?: string
  minHeight?: string
}

const DefaultFallback = ({ minHeight = '200px' }: { minHeight?: string }) => (
  <div 
    className="flex items-center justify-center bg-muted/30 rounded-lg"
    style={{ minHeight }}
  >
    <div className="flex flex-col items-center space-y-3">
      <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      <p className="text-sm text-muted-foreground">Loading...</p>
    </div>
  </div>
)

const LazyWrapper = ({ 
  children, 
  fallback, 
  className,
  minHeight = '200px' 
}: LazyWrapperProps) => {
  return (
    <div className={cn('w-full', className)}>
      <Suspense fallback={fallback || <DefaultFallback minHeight={minHeight} />}>
        {children}
      </Suspense>
    </div>
  )
}

// Higher-order component for lazy loading
export const withLazyLoading = <P extends Record<string, any>>(
  Component: ComponentType<P>,
  fallback?: ReactNode
) => {
  const LazyComponent = lazy(() => Promise.resolve({ default: Component }))
  
  const WrappedComponent = (props: P) => (
    <LazyWrapper fallback={fallback}>
      <LazyComponent {...(props as any)} />
    </LazyWrapper>
  )
  
  WrappedComponent.displayName = `withLazyLoading(${Component.displayName || Component.name})`
  
  return WrappedComponent
}

export default LazyWrapper
