"use client";
import { useEffect } from "react";
import styles from "./IconsBlock.module.css";
import Image from "next/image";

export default function IconsBlock() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("scrollreveal").then((ScrollReveal) => {
        const scrollR = ScrollReveal.default({
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
      });
    }
  }, []);

  return (
    <div className={styles.icons}>
      <a href="#">
        <Image
          src="/icons/vue-icon.svg"
          alt="Vue Icon"
          width={30}
          height={30}
        />
      </a>
      <a href="#">
        <Image
          src="/icons/react-icon.svg"
          alt="React Icon"
          width={30}
          height={30}
        />
      </a>
      <a href="#">
        <Image
          src="/icons/nextJs-icon.svg"
          alt="Next.js Icon"
          width={30}
          height={30}
        />
      </a>
    </div>
  );
}
