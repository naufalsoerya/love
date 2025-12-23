'use client'

import { useEffect, useState } from 'react'

interface SunflowerFieldProps {
  onFieldReady?: () => void
}

export default function SunflowerField({ onFieldReady }: SunflowerFieldProps) {
  const [flowersBlooming, setFlowersBlooming] = useState(false)

  useEffect(() => {
    // Start staggered blooming
    setTimeout(() => {
      setFlowersBlooming(true)
      setTimeout(() => {
        onFieldReady?.()
      }, 3000)
    }, 500)
  }, [onFieldReady])

  // Generate flower positions
  const flowers = Array.from({ length: 80 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 0.4 + Math.random() * 0.4,
    delay: Math.random() * 2,
    rotation: Math.random() * 360,
  }))

  return (
    <div className="sunflower-field">
      {/* Sky with clouds */}
      <div className="field-sky">
        <div className="cloud cloud-1" />
        <div className="cloud cloud-2" />
        <div className="cloud cloud-3" />
      </div>

      {/* Ground */}
      <div className="field-ground" />

      {/* Grass patches - More grass for better effect */}
      {Array.from({ length: 60 }).map((_, i) => (
        <div
          key={`grass-${i}`}
          className="field-grass"
          style={{
            left: `${Math.random() * 100}%`,
            bottom: '0%',
            height: `${15 + Math.random() * 20}px`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}

      {/* Sunflowers - only in ground area */}
      {flowers.map((flower) => (
        <div
          key={`field-flower-${flower.id}`}
          className="field-sunflower"
          style={{
            left: `${flower.x}%`,
            bottom: `${Math.random() * 30}%`, // Only in bottom 30% (ground area)
            transform: `scale(${flower.size}) rotate(${flower.rotation}deg)`,
            animationDelay: `${flower.delay}s`,
            animationPlayState: flowersBlooming ? 'running' : 'paused',
          }}
        >
          {/* Stem */}
          <div className="field-stem" />

          {/* Flower head */}
          <div className="field-flower-head">
            {/* Petals */}
            {Array.from({ length: 16 }).map((_, i) => {
              const angle = (i * 360) / 16
              return (
                <div
                  key={`petal-${i}`}
                  className="field-petal"
                  style={{
                    transform: `rotate(${angle}deg)`,
                  }}
                />
              )
            })}

            {/* Center */}
            <div className="field-center" />
          </div>
        </div>
      ))}
    </div>
  )
}
