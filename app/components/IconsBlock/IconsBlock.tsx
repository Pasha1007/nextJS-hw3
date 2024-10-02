"use client";
import { useEffect } from "react";
import styles from "./IconsBlock.module.css";
import ScrollReveal from "scrollreveal";

export default function IconsBlock() {
  useEffect(() => {
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
    console.log("ScrollReveal instance created:", scrollR);

    return () => {
      scrollR.destroy();
    };
  });

  return (
    <div className={styles.icons}>
      <a href="#">
        <img src="icons/vue-icon.svg" alt="Vue Icon" />
      </a>
      <a href="#">
        <img src="icons/react-icon.svg" alt="React Icon" />
      </a>
      <a href="#">
        <img src="icons/nextJS-icon.svg" alt="Next.js Icon" />
      </a>
    </div>
  );
}
