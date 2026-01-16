import { useEffect, useRef, useCallback } from 'react'

export const usePerformance = () => {
  const startTime = useRef<number>(Date.now())
  
  const measureRenderTime = useCallback((componentName: string) => {
    const endTime = Date.now()
    const renderTime = endTime - startTime.current
    console.log(`${componentName} render time: ${renderTime}ms`)
  }, [])

  const measureAsyncOperation = useCallback(async <T>(
    operation: () => Promise<T>,
    operationName: string
  ): Promise<T> => {
    const start = performance.now()
    try {
      const result = await operation()
      const end = performance.now()
      console.log(`${operationName} took: ${end - start}ms`)
      return result
    } catch (error) {
      const end = performance.now()
      console.error(`${operationName} failed after: ${end - start}ms`, error)
      throw error
    }
  }, [])

  const debounce = useCallback(<T extends (...args: any[]) => any>(
    func: T,
    delay: number
  ): T => {
    let timeoutId: NodeJS.Timeout
    return ((...args: Parameters<T>) => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => func(...args), delay)
    }) as T
  }, [])

  const throttle = useCallback(<T extends (...args: any[]) => any>(
    func: T,
    delay: number
  ): T => {
    let lastCall = 0
    return ((...args: Parameters<T>) => {
      const now = Date.now()
      if (now - lastCall >= delay) {
        lastCall = now
        return func(...args)
      }
    }) as T
  }, [])

  useEffect(() => {
    startTime.current = Date.now()
  }, [])

  return {
    measureRenderTime,
    measureAsyncOperation,
    debounce,
    throttle
  }
}
