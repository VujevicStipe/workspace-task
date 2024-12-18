"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";
import useDeviceType from "../hooks/useWindowSize";
import { Open_Sans, Inter } from "next/font/google";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import Logo from "@/public/logo.svg";
import scrollBack from "@/public/scroll_arrow.svg";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Footer() {
  const deviceType = useDeviceType();

  return (
    <footer className={`${styles.footerStyles} ${styles[deviceType]}`}>
      <div>
        <Link href="/">
          <Image className={styles.logo} src={Logo} alt="" />
        </Link>
        <Link href="/" className={styles.scrollBack}>
          <Image src={scrollBack} alt="" />
        </Link>
      </div>
      <div>
        <div className={styles.footerLinks}>
          <ul>
            <li className={styles.linkHead}>Programs</li>
            <li className={styles.link}>
              <Link href="">Program 1</Link>
            </li>
            <li className={styles.link}>
              <Link href="">Program 2</Link>
            </li>
            <li className={styles.link}>
              <Link href="">Program 3</Link>
            </li>
            <li className={styles.link}>
              <Link href="">Program 4</Link>
            </li>
          </ul>
          <ul>
            <li className={styles.linkHead}>Find out more</li>
            <li className={styles.link}>
              <Link href="">Link 1</Link>
            </li>
            <li className={styles.link}>
              <Link href="">Link 2</Link>
            </li>
            <li className={styles.link}>
              <Link href="">Link 3</Link>
            </li>
          </ul>
          <ul>
            <li className={styles.linkHead}>Charterag</li>
            <li className={styles.link}>
              <Link href="">Link 1</Link>
            </li>
            <li className={styles.link}>
              <Link href="">Link 2</Link>
            </li>
            <li className={styles.link}>
              <Link href="">Link 3</Link>
            </li>
          </ul>
        </div>
        <div className={styles.footerSocialLinks}>
          <Link href="https://www.instagram.com" passHref>
            <div className={styles.iconCircle}>
              <FaInstagram />
            </div>
          </Link>
          <Link href="https://www.facebook.com" passHref>
            <div className={styles.iconCircle}>
              <FaFacebook />
            </div>
          </Link>
          <Link href="https://www.youtube.com" passHref>
            <div className={styles.iconCircle}>
              <FaYoutube />
            </div>
          </Link>
        </div>
      </div>
      <div className={styles.footerSeparator}></div>
      <div>
        {/* Open sans */}
        <p className={`${styles.footerP} ${openSans.className}`}>
          Copyright © 2024 Charterag Ltd. (company no. 08245801) <br />
          Lorem ipsum dolor sit amet lorem ipsum ipsum, United Kingdom.
        </p>
        <div className={styles.footerTerms}>
          {/* Inter */}
          <Link href="">
            <span className={`${styles.footerSpan} ${inter.className}`}>
              Legal info
            </span>
          </Link>
          <Link href="">
            <span className={`${styles.footerSpan} ${inter.className}`}>
              Terms and conditions
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
