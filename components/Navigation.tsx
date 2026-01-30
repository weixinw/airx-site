'use client'

import { useState, useEffect } from 'react'
import styles from './Navigation.module.css'
import Partner from './Partner'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [partnerOpen, setPartnerOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.container}>
          <div className={styles.logo}>AIRX</div>
          <div className={styles.links}>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#portfolio">Portfolio</a>
            <button
              type="button"
              className={styles.linkButton}
              onClick={() => setPartnerOpen(true)}
            >
              Partners
            </button>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>
      <Partner isOpen={partnerOpen} onClose={() => setPartnerOpen(false)} />
    </>
  )
}
