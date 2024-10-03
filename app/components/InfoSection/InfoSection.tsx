"use client";
import Image from "next/image";
import styles from "./InfoSection.module.css";
import { useEffect } from "react";
import Video from "../VideoBackground/Video";

export default function InfoSection() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("scrollreveal").then((ScrollReveal) => {
        const scrollR = ScrollReveal.default({
          distance: "65px",
          duration: 2600,
          delay: 450,
          reset: true,
        });

        scrollR.reveal(`.${styles.infoTxt}`, { delay: 200, origin: "top" });
        scrollR.reveal(`.${styles.infoImg}`, { delay: 400, origin: "right" });

        return () => {
          scrollR.destroy();
        };
      });
    }
  }, []);

  return (
    <section className={styles.infoCont}>
      <Video />
      <div className={styles.overlay}></div>
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
      <div className={styles.infoImgCont}>
        <Image
          className={styles.infoImg}
          src="/sprite.png"
          alt="sprite"
          width={400}
          height={600}
          priority={true}
        />
      </div>
    </section>
  );
}
