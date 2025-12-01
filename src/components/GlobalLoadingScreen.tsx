import { useEffect, useState } from 'react'
import ritmoLogo from '../assets/ritmo-lgo.png'

interface GlobalLoadingScreenProps {
  isLoading: boolean
  progress?: number
  message?: string
}

export function GlobalLoadingScreen({ 
  isLoading, 
  progress = 0, 
  message = 'Loading...' 
}: GlobalLoadingScreenProps) {
  const [dots, setDots] = useState('')
  
  useEffect(() => {
    if (!isLoading) return
    
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.')
    }, 500)
    
    return () => clearInterval(interval)
  }, [isLoading])
  
  if (!isLoading) return null
  
  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-white/98 backdrop-blur-sm">
      <div className="text-center">
        {/* Main Ritmo Logo - Centered like in your picture */}
        <div className="flex items-center justify-center mb-8">
          <img 
            src={ritmoLogo} 
            alt="Ritmo" 
            className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain"
            style={{
              filter: 'drop-shadow(0 4px 20px rgba(45, 119, 120, 0.15))',
              animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
            }}
          />
        </div>
        
        {/* Loading Text */}
        <div className="mb-6">
          <p className="text-lg md:text-xl font-semibold text-[#2D7778] mb-2">
            {message}{dots}
          </p>
          <p className="text-sm text-gray-500">
            Please wait while we prepare your experience
          </p>
        </div>
        
        {/* Progress Bar - Only show if progress > 0 */}
        {progress > 0 && (
          <div className="w-64 md:w-80 mx-auto">
            <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-linear-to-r from-[#61CCB2] to-[#2D7778] rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-xs text-gray-400 mt-2 text-center">
              {Math.round(progress)}%
            </p>
          </div>
        )}
        
        {/* Subtle animated dots for no progress bar */}
        {progress === 0 && (
          <div className="flex justify-center space-x-2 mt-4">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-2 h-2 bg-[#61CCB2] rounded-full animate-bounce"
                style={{
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: '1.4s'
                }}
              />
            ))}
          </div>
        )}
      </div>
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-2 h-2 bg-[#61CCB2] rounded-full animate-ping" />
        <div className="absolute top-20 right-20 w-1 h-1 bg-[#2D7778] rounded-full animate-ping" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-20 w-1.5 h-1.5 bg-[#61CCB2] rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-10 right-10 w-1 h-1 bg-[#2D7778] rounded-full animate-ping" style={{ animationDelay: '1.5s' }} />
      </div>
    </div>
  )
}