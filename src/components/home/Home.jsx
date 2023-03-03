import React from 'react'
import styles from './Home.module.css'
import { HiLocationMarker, HiArrowRight} from 'react-icons/hi'
import {FaApple, FaGooglePlay } from 'react-icons/fa'

const Home = () => {
  return (
    <div className={styles.find} id="home">
             <div className={styles.container}>
                <div>
              <div className={styles.heading}>
                <div><h1>{"Your favorite food,"}</h1></div>
                <div><h1>{"delivered your home"}</h1></div>
                <p>
                   Food, drinks, groceries, and more available for delivery and pickup

                </p>
              </div>
    
              <form>
                <div className={styles["form-control"]}>
                    <HiLocationMarker className={styles.icon}/>
                    <input type="text" placeholder='Enter your address...' />
                    <HiArrowRight className={styles.icon2} />
                </div>
              </form>
                <div className={styles.download}>
                    <p>Apps Available to download on</p>
                </div>
                <div className={styles.btn}>
                     <button>
                        <FaApple className={styles.icon3}/>
                        <div>
                        
                        <h3 className={styles.one}>{"Download on the"}</h3>
                        <p className={styles.two}>{"App Store"}</p>
                        </div>
                    </button>
                     <button>
                         <FaGooglePlay className={styles.icon4} />
                         <div>
                       < h3 className={styles.one}>{"Download on the"}</h3>
                        <p className={styles.two}>{"Google play"}</p>
                        </div>
                    </button> 
                </div>
                </div>
                <div>
                    <img src="./assests/banner_1.webp" alt="/" width="600" height="500" />
                </div>
              </div>


</div>
  )
}

export default Home