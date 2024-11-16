'use client'

import { useState, useEffect } from 'react'
import styles from '@/styles/PetalBackground.module.css'

interface CustomCSSProperties extends React.CSSProperties {
  '--translate-x'?: string
  '--translate-y'?: string
}

export function PetalBackground() {
  const [petals, setPetals] = useState<
    {
      id: number
      size: number
      left: string
      translateX: string
      translateY: string
      delay: string
    }[]
  >([])

  useEffect(() => {
    const petalCount = 50
    const initialPetals = Array.from({ length: petalCount }, () => ({
      id: Math.random(),
      size: Math.random() * 10 + 5,
      left: `${Math.random() * 100}%`,
      translateX: `${Math.random() * 100}px`,
      translateY: `${Math.random() * 1000 + 500}px`,
      delay: `${Math.random() * 30}s`,
    }))
    setPetals(initialPetals)
  }, [])

  return (
    <div className={styles.petalContainer}>
      {petals.map((petal) => (
        <div
          key={petal.id}
          className={styles.petal}
          style={
            {
              width: `${petal.size}px`,
              height: `${petal.size}px`,
              left: petal.left,
              '--translate-x': petal.translateX,
              '--translate-y': petal.translateY,
              animationDelay: petal.delay,
            } as CustomCSSProperties
          }
        />
      ))}
    </div>
  )
}
