'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useRef } from 'react'

interface OptimizedLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  onClick?: () => void
  prefetch?: boolean
}

const OptimizedLink = ({ 
  href, 
  children, 
  className, 
  onClick, 
  prefetch = true 
}: OptimizedLinkProps) => {
  const router = useRouter()
  const linkRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    if (!prefetch || !linkRef.current) return

    const link = linkRef.current
    
    // Prefetch on hover
    const handleMouseEnter = () => {
      router.prefetch(href)
    }

    // Prefetch on focus
    const handleFocus = () => {
      router.prefetch(href)
    }

    link.addEventListener('mouseenter', handleMouseEnter)
    link.addEventListener('focus', handleFocus)

    return () => {
      link.removeEventListener('mouseenter', handleMouseEnter)
      link.removeEventListener('focus', handleFocus)
    }
  }, [href, prefetch, router])

  return (
    <Link
      ref={linkRef}
      href={href}
      className={className}
      onClick={onClick}
      prefetch={false} // We handle prefetching manually
    >
      {children}
    </Link>
  )
}

export default OptimizedLink
