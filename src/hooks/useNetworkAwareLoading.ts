import { useEffect, useState } from 'react'

interface NetworkConnection {
  effectiveType?: string
}

// Hook for detecting slow internet and showing loading screen
export function useNetworkAwareLoading() {
  // Check if website has already loaded before in this session
  const hasLoadedBefore = sessionStorage.getItem('ritmo-has-loaded')
  const [isLoading, setIsLoading] = useState(!hasLoadedBefore)
  const [progress, setProgress] = useState(0)
  
  useEffect(() => {
    if (hasLoadedBefore) {
      // Already loaded before, don't show loading screen
      return
    }

    let progressInterval: number
    let shouldShowLoading = false
    
    // Test network speed - only for first time visitors
    const detectNetworkSpeed = () => {
      // Test 1: Check navigator connection if available
      if ('connection' in navigator && navigator.connection) {
        const connection = navigator.connection as NetworkConnection
        if (connection && connection.effectiveType) {
          const slowTypes = ['slow-2g', '2g', '3g']
          if (slowTypes.includes(connection.effectiveType)) {
            shouldShowLoading = true
            setIsLoading(true)
            startLoadingProgress()
            return
          }
        }
      }
      
      // Test 2: Image load time test
      const testImage = new Image()
      const imageLoadStart = Date.now()
      
      testImage.onload = () => {
        const loadTime = Date.now() - imageLoadStart
        // Show loading if image takes more than 800ms (slow connection)
        if (loadTime > 800) {
          shouldShowLoading = true
          setIsLoading(true)
          startLoadingProgress()
        } else {
          // Fast connection - mark as loaded and don't show loading
          sessionStorage.setItem('ritmo-has-loaded', 'true')
          setIsLoading(false)
        }
      }
      
      testImage.onerror = () => {
        // Network error - show loading screen
        shouldShowLoading = true
        setIsLoading(true)
        startLoadingProgress()
      }
      
      testImage.src = `data:image/svg+xml,${encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50">
          <rect width="50" height="50" fill="blue"/>
        </svg>
      `)}?t=${Date.now()}`
    }
    
    const startLoadingProgress = () => {
      setProgress(0)
      progressInterval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(progressInterval)
            // Mark as loaded when loading completes
            sessionStorage.setItem('ritmo-has-loaded', 'true')
            setTimeout(() => setIsLoading(false), 500)
            return 100
          }
          return prev + (shouldShowLoading ? 6 : 20)
        })
      }, 150) as unknown as number
    }
    
    detectNetworkSpeed()
    
    // Fallback timeout - mark as loaded after max time
    const fallbackTimeout = setTimeout(() => {
      if (progressInterval) {
        clearInterval(progressInterval)
      }
      sessionStorage.setItem('ritmo-has-loaded', 'true')
      setIsLoading(false)
    }, 3000)
    
    return () => {
      if (progressInterval) {
        clearInterval(progressInterval)
      }
      clearTimeout(fallbackTimeout)
    }
  }, [hasLoadedBefore])
  
  return { isLoading, progress }
}