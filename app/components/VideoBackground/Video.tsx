import React from "react";
import styles from "./Video.module.css";

export default function Video() {
  return (
    <video className={styles.videoBackground} autoPlay loop muted playsInline>
      <source src="/video/videoplayback.webm" type="video/mp4" />
    </video>
  );
}
