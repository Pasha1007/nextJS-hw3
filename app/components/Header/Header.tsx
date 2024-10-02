"use client";
import { useEffect, useRef } from "react";
import styles from "./Header.module.css";
import Link from "next/link";

export default function Header() {
  const burgerRef = useRef<SVGSVGElement | null>(null);
  const headerListRef = useRef<HTMLUListElement | null>(null);
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const burger = burgerRef.current;
    const headerList = headerListRef.current;
    const header = headerRef.current;

    if (!burger || !headerList || !header) return;

    const handleBurgerClick = () => {
      burger.classList.toggle("ri-close-large-line");
      headerList.classList.toggle(styles.open);
      header.classList.toggle(styles.headerBackground);
    };
    burger.addEventListener("click", handleBurgerClick);
    return () => {
      burger.removeEventListener("click", handleBurgerClick);
    };
  }, []);

  return (
    <header ref={headerRef} className={styles.header}>
      <Link href="/" className={styles.logo}>
        LOGO
      </Link>
      <ul ref={headerListRef} className={styles.headerList}>
        <li>
          <Link href="#">Home</Link>
        </li>
        <li>
          <Link href="#">About</Link>
        </li>
        <li>
          <Link href="#">Content</Link>
        </li>
        <li>
          <Link href="#">Links</Link>
        </li>
        <li>
          <Link href="#">Contacts</Link>
        </li>
      </ul>
      <svg
        ref={burgerRef}
        id="burger-icon"
        className={styles.burgerIcon}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="white"
        aria-label="Toggle menu"
        role="button"
      >
        <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
      </svg>
    </header>
  );
}
