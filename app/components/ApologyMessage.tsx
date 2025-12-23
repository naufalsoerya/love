'use client'

import { motion } from 'framer-motion'

interface ApologyMessageProps {
  visible: boolean
}

const messages = [
  "Dear Lovena,",
  "Maaf yaa kalo aku ngeselin banget,",
  "Kalo ada apa apa, kita omongin yaaa",
  "From Surya"
]

export default function ApologyMessage({ visible }: ApologyMessageProps) {
  if (!visible) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: 'easeOut' }}
      className="fixed top-[36%] lg:top-[30%] left-[17%] lg:left-[40%] z-30 flex justify-center pointer-events-none"
    >
      <div className="max-w-2xl mx-4">
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="text-center space-y-2"
        >
          {messages.map((line, index) => (
            line && (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.3 }}
                className="text-sm md:text-lg text-white leading-tight drop-shadow-lg"
                style={{ fontFamily: "'Inter', 'Poppins', sans-serif" }}
              >
                {line}
              </motion.p>
            )
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

