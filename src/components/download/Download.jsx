import React from 'react'
import styles from './Download.module.css'

const Download = () => {
  return (
    <div className={styles.src} id="download">
        <div>
            <img src="./assests/download-app.webp" alt=" " width="80%" />
        </div>

        <div className={styles.text}>
            <h2>Connecting our user with iOS & Android apps. Download from iTune & Play store</h2>
            <p>Pick one of our stock themes, or create your custom theme with the most advanced theme editor on any online survey building tool.<span>We're driven beyond just finishing the projects. We want to find solutions using our website & apps.</span></p>
     
        </div>
            
            
    </div>
  )
}

export default Download