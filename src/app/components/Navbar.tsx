"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";
import useDeviceType from "../hooks/useWindowSize";
import { FaBars } from "react-icons/fa";
import Logo from "@/public/logo.svg";
import Button from "./Button";

export default function Navbar() {
  const deviceType = useDeviceType();

  return (
    <nav className={`${styles.navBarStyles} ${styles[deviceType]}`}>
      <Link href="/">
        <Image src={Logo} alt="" />
      </Link>
      {deviceType === "desktop" ? (
        <>
          <ul className={styles.navLinks}>
            <li>
              <Link href="/destination">Destination</Link>
            </li>
            <li>
              <Link href="">How it works</Link>
            </li>
            <li>
              <Link href="">About</Link>
            </li>
            <li>
              <Link href="">Blog</Link>
            </li>
            <li>
              <Link href="">FAQ</Link>
            </li>
          </ul>
          <ul className={styles.authLinks}>
            <span className={styles.login}>
              <Link href="">Log in</Link>
            </span>
            <Button variant="primary" color="yellow">
              Book Now
            </Button>
          </ul>
        </>
      ) : <FaBars/>}
    </nav>
  );
}
