import React from 'react'
import styles from "./About.module.css"
import { getImageUrl } from '../../utils'

function About() {
  return (
 <section className={styles.container} id='about'>
    <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}><img src={getImageUrl("about/cursorIcon.png")} alt="Cursor" />
            <div className={styles.aboutItemText}>
                <h3>Fronted Developer</h3>
                <p>I'm a fronted developer with experince in building reponsive and optimized sites  </p>
            </div>
            </li>
            <li className={styles.aboutItem}><img src={getImageUrl("about/serverIcon.png")} alt="Server" />
            <div  className={styles.aboutItemText}>
                <h3>backend Developer</h3>
                <p>I'm a backend developer. I have experince developing fast and optimised and APIs</p>
            </div>
            </li>
            <li className={styles.aboutItem}><img src={getImageUrl("about/uiIcon.png")} alt="UI" />
            <div  className={styles.aboutItemText}>
                <h3>Programmer</h3>
                <p>I have good command on DSA. And proficient in c++ language</p>
            </div>
            </li>
        </ul>
    </div>
   
 </section>
  )
}

export default About
