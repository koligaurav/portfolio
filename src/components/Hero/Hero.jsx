import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Gaurav</h1>
        <p className={styles.description}>
          I am purshing my Btech degree From IIT Bombay.Currently I'm in 3rd year. I am skilld in web dev. tools like HTML, CSS, JavaScript, Express, MongoDB, NodeJS, and React. Alongth with it I have knowledge of c++ & python language and Operating System. I was media Coordintor at E-Cell IIT Bombay for 1 year.  
        </p>
        <a href="koligauravkoli10@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/me.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
}

export default Hero