'use client'

import { motion } from 'framer-motion'

interface FlowerAnimationProps {
  type: 'rose' | 'sakura' | 'tulip' | 'dandelion'
  size?: number
  delay?: number
  className?: string
}

export default function FlowerAnimation({ 
  type, 
  size = 200, 
  delay = 0,
  className = '' 
}: FlowerAnimationProps) {
  const petalVariants = {
    hidden: { scale: 0, rotate: -45, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        delay: delay + i * 0.1,
        duration: 0.8,
        ease: 'easeOut',
      },
    }),
  }

  const centerVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: delay + 1.2,
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  if (type === 'rose') {
    return (
      <motion.div
        className={`relative ${className}`}
        style={{ width: size, height: size }}
        initial="hidden"
        animate="visible"
      >
        {/* Outer petals - 12 petals */}
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * 360) / 12
          const radius = size * 0.35
          const x = Math.cos((angle * Math.PI) / 180) * radius
          const y = Math.sin((angle * Math.PI) / 180) * radius
          
          return (
            <motion.div
              key={`outer-${i}`}
              custom={i}
              variants={petalVariants}
              className="absolute"
              style={{
                left: '50%',
                top: '50%',
                transformOrigin: '0 0',
                transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(${angle}deg)`,
              }}
            >
              <div
                className="w-8 h-12 rounded-full"
                style={{
                  background: `linear-gradient(135deg, #FF69B4 0%, #FF1493 100%)`,
                  boxShadow: '0 2px 8px rgba(255, 20, 147, 0.3)',
                }}
              />
            </motion.div>
          )
        })}

        {/* Middle petals - 8 petals */}
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i * 360) / 8 + 22.5
          const radius = size * 0.25
          const x = Math.cos((angle * Math.PI) / 180) * radius
          const y = Math.sin((angle * Math.PI) / 180) * radius
          
          return (
            <motion.div
              key={`middle-${i}`}
              custom={i + 12}
              variants={petalVariants}
              className="absolute"
              style={{
                left: '50%',
                top: '50%',
                transformOrigin: '0 0',
                transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(${angle}deg)`,
              }}
            >
              <div
                className="w-6 h-10 rounded-full"
                style={{
                  background: `linear-gradient(135deg, #FF1493 0%, #DC143C 100%)`,
                  boxShadow: '0 2px 6px rgba(220, 20, 60, 0.3)',
                }}
              />
            </motion.div>
          )
        })}

        {/* Center */}
        <motion.div
          variants={centerVariants}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: size * 0.15,
            height: size * 0.15,
            background: '#8B0000',
            boxShadow: '0 0 10px rgba(139, 0, 0, 0.5)',
          }}
        />
      </motion.div>
    )
  }

  if (type === 'sakura') {
    return (
      <motion.div
        className={`relative ${className}`}
        style={{ width: size, height: size }}
        initial="hidden"
        animate="visible"
      >
        {/* Sakura petals - 5 petals */}
        {Array.from({ length: 5 }).map((_, i) => {
          const angle = (i * 360) / 5
          const radius = size * 0.3
          const x = Math.cos((angle * Math.PI) / 180) * radius
          const y = Math.sin((angle * Math.PI) / 180) * radius
          
          return (
            <motion.div
              key={`petal-${i}`}
              custom={i}
              variants={petalVariants}
              className="absolute"
              style={{
                left: '50%',
                top: '50%',
                transformOrigin: '0 0',
                transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(${angle}deg)`,
              }}
            >
              <div
                className="w-6 h-6 rounded-full"
                style={{
                  background: `linear-gradient(135deg, #FFB6C1 0%, #FFC0CB 100%)`,
                  clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                }}
              />
            </motion.div>
          )
        })}

        {/* Center */}
        <motion.div
          variants={centerVariants}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: size * 0.12,
            height: size * 0.12,
            background: '#FFB6C1',
          }}
        />
      </motion.div>
    )
  }

  if (type === 'tulip') {
    return (
      <motion.div
        className={`relative ${className}`}
        style={{ width: size, height: size }}
        initial="hidden"
        animate="visible"
      >
        {/* Tulip petals - 6 petals */}
        {Array.from({ length: 6 }).map((_, i) => {
          const angle = (i * 360) / 6
          
          return (
            <motion.div
              key={`petal-${i}`}
              custom={i}
              variants={petalVariants}
              className="absolute left-1/2 top-1/2"
              style={{
                transformOrigin: '50% 100%',
                transform: `translate(-50%, -50%) rotate(${angle}deg)`,
              }}
            >
              <div
                className="w-8 h-16 rounded-t-full"
                style={{
                  background: `linear-gradient(135deg, #FF6B9D 0%, #FF1493 100%)`,
                  clipPath: 'polygon(0% 0%, 100% 0%, 80% 100%, 20% 100%)',
                }}
              />
            </motion.div>
          )
        })}

        {/* Center */}
        <motion.div
          variants={centerVariants}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: size * 0.1,
            height: size * 0.1,
            background: '#FFB6C1',
          }}
        />
      </motion.div>
    )
  }

  // Dandelion
  return (
    <motion.div
      className={`relative ${className}`}
      style={{ width: size, height: size }}
      initial="hidden"
      animate="visible"
    >
      {/* Dandelion seeds */}
      {Array.from({ length: 20 }).map((_, i) => {
        const angle = (i * 360) / 20
        const radius = size * 0.4
        const x = Math.cos((angle * Math.PI) / 180) * radius
        const y = Math.sin((angle * Math.PI) / 180) * radius
        
        return (
          <motion.div
            key={`seed-${i}`}
            custom={i}
            variants={petalVariants}
            className="absolute"
            style={{
              left: '50%',
              top: '50%',
              transformOrigin: '0 0',
              transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(${angle}deg)`,
            }}
          >
            <div
              className="w-1 h-8 rounded-full"
              style={{
                background: 'linear-gradient(180deg, #FFF 0%, #F5F5DC 100%)',
              }}
            />
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-white"
              style={{ boxShadow: '0 0 4px rgba(255,255,255,0.8)' }}
            />
          </motion.div>
        )
      })}

      {/* Center */}
      <motion.div
        variants={centerVariants}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-200"
        style={{
          width: size * 0.15,
          height: size * 0.15,
        }}
      />
    </motion.div>
  )
}

