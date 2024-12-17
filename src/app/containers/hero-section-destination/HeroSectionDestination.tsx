import React from 'react'
import styles from './HeroSectionDesinations.module.css'
import Image from 'next/image'
import texture from '@/public/routes_texture.svg'
import heroImage from '@/public/hero_image_destination.png'

const HeroSectionDestination = () => {
  return (
    <div className={styles.heroSectionDesination}>
        <div className={styles.heroContent}>
            <h2>party route</h2>
            <h1>The best stories are yet to be told</h1>
            <Image src={heroImage} alt='hero-image' />
        </div>
        <Image src={texture} alt='hero-texture' />
    </div>
  )
}

export default HeroSectionDestination