'use client'

import { useEffect, useState } from 'react'

interface SingleSunflowerProps {
  onBloomComplete?: () => void
  onClick?: () => void
}

export default function SingleSunflower({ onBloomComplete, onClick }: SingleSunflowerProps) {
  const [isBlooming, setIsBlooming] = useState(true) // Start immediately
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    // Call onBloomComplete after all animations finish
    // Outer petals: max delay 0.3 + (19 * 0.05) = 1.25s + 1.5s animation = 2.75s
    // Inner petals: max delay 1.5 + (15 * 0.03) = 1.95s + 1.5s animation = 3.45s
    // Center: delay 2.5s + 1s animation = 3.5s
    const timer = setTimeout(() => {
      onBloomComplete?.()
    }, 5000) // After 5 seconds (enough for all animations)

    return () => clearTimeout(timer)
  }, [onBloomComplete])

  // Outer petals (20 petals)
  const outerPetals = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    angle: (i * 360) / 20,
    delay: 0.3 + (i * 0.05),
  }))

  // Inner petals (16 petals)
  const innerPetals = Array.from({ length: 16 }, (_, i) => ({
    id: i,
    angle: (i * 360) / 16 + 11.25,
    delay: 1.5 + (i * 0.03),
  }))

  return (
    <div 
      className="sunflower-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      style={{ cursor: 'pointer' }}
    >
      {/* Stem */}
      <div className="sunflower-stem" />

      {/* Leaves - left side */}
      <div className="sunflower-leaf leaf-left" />
      {/* Leaves - right side */}
      <div className="sunflower-leaf leaf-right" />

      {/* Flower head */}
      <div className="sunflower-head">
        {/* Outer petals */}
        {outerPetals.map((petal) => (
          <div
            key={`outer-${petal.id}`}
            className="sunflower-petal-wrapper"
            style={{
              transform: `rotate(${petal.angle}deg)`,
            }}
          >
            <div
              className="sunflower-petal outer-petal"
              style={{
                animationDelay: `${petal.delay}s`,
              }}
            />
          </div>
        ))}

        {/* Inner petals */}
        {innerPetals.map((petal) => (
          <div
            key={`inner-${petal.id}`}
            className="sunflower-petal-wrapper"
            style={{
              transform: `rotate(${petal.angle}deg)`,
            }}
          >
            <div
              className="sunflower-petal inner-petal"
              style={{
                animationDelay: `${petal.delay}s`,
              }}
            />
          </div>
        ))}

        {/* Center disk */}
        <div 
          className="sunflower-center"
          style={{
            animationPlayState: isBlooming ? 'running' : 'paused',
          }}
        >
          {/* Seeds pattern */}
          {Array.from({ length: 30 }).map((_, i) => {
            const angle = (i * 360) / 30
            const radius = 10 + (i % 3) * 6
            return (
              <div
                key={`seed-${i}`}
                className="sunflower-seed"
                style={{
                  transform: `rotate(${angle}deg) translateX(${radius}px)`,
                  animationDelay: `${2.5 + i * 0.05}s`,
                  animationPlayState: isBlooming ? 'running' : 'paused',
                }}
              />
            )
          })}
        </div>
      </div>

      {/* Hover glow effect */}
      {isHovered && <div className="sunflower-glow" />}
    </div>
  )
}
