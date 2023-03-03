import React from 'react'
import styles from './Order.module.css'

const Order = () => {
  return (
   <div className={styles.main}>
      <div className={styles.img}>
        <img src='./assests/gallery-1.webp' alt=" " />
        <img src='./assests/gallery-2.webp' alt=" " />
        <img src='./assests/gallery-3.webp' alt=" " />
        <img src='./assests/gallery-4.webp' alt=" " />
      </div>
      
            
      <div className={styles.text}>
        <h2>Let's take your Delivery Experience to the next level</h2>
        <p>Pick one of our stocks themes, or create your custom theme with the most advanced theme editor on any online survey building tool. Pick of our stock themes, or create your custom theme with the most advanced theme editor on any online survey building tool.</p>
      </div>
      <div className={styles.order}>
          <div>
            <h2>Your order knocking on the door. please receive</h2>
            <p>pick one of our stock theme, or create your custom theme with the most advanced theme editor on any online.</p>
            <button>Order More</button>
          </div>
          <div>
            <img src="./assests/banner 3.png" alt=" " />
          </div>
      </div>
    </div>
  )
}

export default Order