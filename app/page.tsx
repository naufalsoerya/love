'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import SingleSunflower from './components/SingleSunflower'
import SunflowerField from './components/SunflowerField'
import ApologyMessage from './components/ApologyMessage'

export default function Home() {
  const [stage, setStage] = useState<'bouquet' | 'field'>('bouquet')
  const [showMessage, setShowMessage] = useState(false)
  const [showClickHint, setShowClickHint] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Handle sunflower click - transition to field
  const handleBouquetClick = () => {
    setIsTransitioning(true)
    
    // White flash transition
    setTimeout(() => {
      setStage('field')
      setIsTransitioning(false)
    }, 500)
  }

  // Handle bloom complete
  const handleBloomComplete = () => {
    setTimeout(() => {
      setShowClickHint(true)
    }, 500)
  }

  // Handle field ready
  const handleFieldReady = () => {
    setTimeout(() => {
      setShowMessage(true)
    }, 1000)
  }

  // Sparkle particles
  const sparkles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 3,
    size: Math.random() * 3 + 2,
  }))

  return (
    <main className="relative w-full h-screen overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 transition-all duration-1000"
        style={{
          background: stage === 'bouquet' 
            ? 'linear-gradient(to bottom, #FFF8E7, #FFF4D6)'
            : 'linear-gradient(to bottom, #87CEEB, #B0E0E6)'
        }}
      />
      
      {/* Vignette effect for bouquet stage */}
      {stage === 'bouquet' && <div className="vignette" />}
      
      {/* Film grain overlay */}
      <div className="film-grain" />

      {/* Transition flash */}
      {isTransitioning && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 bg-white z-50 pointer-events-none"
        />
      )}

      {/* Sparkle particles - only in bouquet stage */}
      {stage === 'bouquet' && (
        <div className="absolute inset-0 pointer-events-none z-10">
          {sparkles.map((sparkle) => (
            <motion.div
              key={sparkle.id}
              className="absolute rounded-full bg-yellow-300"
              style={{
                left: `${sparkle.x}%`,
                top: `${sparkle.y}%`,
                width: sparkle.size,
                height: sparkle.size,
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
                y: [0, -20, 0],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: sparkle.delay,
              }}
            />
          ))}
        </div>
      )}

      {/* Animated clouds - only in bouquet stage */}
      {stage === 'bouquet' && (
        <div className="absolute inset-0 pointer-events-none z-15 overflow-hidden">
          <div className="cloud cloud-1" />
          <div className="cloud cloud-2" />
          <div className="cloud cloud-3" />
          <div className="cloud cloud-4" />
        </div>
      )}

      {/* Single Sunflower Stage */}
      {stage === 'bouquet' && (
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="large-sunflower-wrapper">
            <SingleSunflower
              onBloomComplete={handleBloomComplete}
              onClick={handleBouquetClick}
            />
          </div>
        </div>
      )}

      {/* Sunflower Field Stage */}
      {stage === 'field' && (
        <div className="absolute inset-0 z-20">
          <SunflowerField onFieldReady={handleFieldReady} />
        </div>
      )}

      {/* Click hint - positioned above the flower */}
      {stage === 'bouquet' && showClickHint && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-[43%] lg:top-[41%] left-[32%] lg:left-[45.5%] -translate-x-1/2 -translate-y-1/2 z-30 text-center pointer-events-none"
        >
          <motion.p
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gray-700 text-sm font-serif"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            click bunganya sayaang
          </motion.p>
        </motion.div>
      )}

      {/* Apology Message */}
      {stage === 'field' && <ApologyMessage visible={showMessage} />}

      {/* Start Over button */}
      {stage === 'field' && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => {
            setStage('bouquet')
            setShowMessage(false)
            setShowClickHint(false)
          }}
          className="fixed bottom-6 left-6 z-40 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-6 py-3 rounded-full transition-colors shadow-lg"
        >
          Start Over
        </motion.button>
      )}
    </main>
  )
}