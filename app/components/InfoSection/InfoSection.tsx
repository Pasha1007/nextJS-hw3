"use client";
import styles from "./InfoSection.module.css";
import { useEffect } from "react";

export default function InfoSection() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const ScrollReveal = require("scrollreveal").default;

      const scrollR = ScrollReveal({
        distance: "65px",
        duration: 2600,
        delay: 450,
        reset: true,
      });

      scrollR.reveal(`.${styles.infoTxt}`, { delay: 200, origin: "top" });
      scrollR.reveal(`.${styles.infoImg}`, {
        delay: 400,
        origin: "right",
      });

      return () => {
        scrollR.destroy();
      };
    }
  }, []);

  return (
    <section className={styles.infoCont}>
      <div className={styles.infoTxt}>
        <p>#1 Product</p>
        <p>By Kramar Pavlo</p>
        <h1>Warhammer</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
          tenetur, quasi alias quod, magni vel labore maiores
        </p>
        <a href="#">Watch</a>
        <a href="#" className={styles.compIcon}>
          Compare
        </a>
      </div>
      <div className={styles.infoImg}>
        <img src="sprite.png" alt="sprite" />
      </div>
    </section>
  );
}
