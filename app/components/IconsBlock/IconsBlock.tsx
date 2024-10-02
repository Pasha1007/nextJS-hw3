"use client";
import { useEffect } from "react";
import styles from "./IconsBlock.module.css";

export default function IconsBlock() {
  useEffect(() => {
    // Ensure we're in a client-side environment
    if (typeof window !== "undefined") {
      // Dynamically import ScrollReveal to avoid SSR issues
      const ScrollReveal = require("scrollreveal").default;

      const scrollR = ScrollReveal({
        distance: "65px",
        duration: 2600,
        delay: 450,
        reset: true,
      });

      scrollR.reveal(`.${styles.icons}`, {
        delay: 450,
        origin: "left",
      });

      return () => {
        scrollR.destroy();
      };
    }
  }, []);

  return (
    <div className={styles.icons}>
      <a href="#">
        <img src="/icons/vue-icon.svg" alt="Vue Icon" />
      </a>
      <a href="#">
        <img src="/icons/react-icon.svg" alt="React Icon" />
      </a>
      <a href="#">
        <img src="/icons/nextJS-icon.svg" alt="Next.js Icon" />
      </a>
    </div>
  );
}
