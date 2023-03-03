import React from 'react'
import styles from './Restaurants.module.css'

const Restaurants = () => {
  return (
    <div>
        <div className={styles.text2} id="restaurants">
        <h2>Available Restaurants Nearby Areas</h2>
        </div>
    <div className={styles.container1}>

    <div>
        <img src="./assests/available-restaurant-1.webp" alt=" "/>
        <h5> Pizza Hut Delicious Pizza</h5>
        <p>American  &#x2022;  Fast Food  &#x2022;  Burgers </p>
    </div>
    <div>
        <img src="./assests/available-restaurant-2.webp" alt=" " />
        <h5>Chipotle Mexican Grill(2675 Geary Boulevard)</h5>
        <p>American &#x2022;  Fast Food  &#x2022;  Burgers </p>
    </div>

    <div>
        <img src="./assests/available-restaurant-3.webp" alt=" " />
        <h5>McDonald's Burger (Fillmore)</h5>
        <p>American  &#x2022; Fast Food  &#x2022;  Burgers </p>
    </div>
    <div>
        <img src="./assests/available-restaurant-4.webp" alt=" " />
        <h5>The Baked Bear San Francisco</h5>
        <p>American &#x2022;  Fast Food   &#x2022; Burgers </p>
    </div>

    <div>
        <img src="./assests/available-restaurant-5.webp" alt=" " />
        <h5>Shake Shack (3060 Fillmore Street)</h5>
        <p> American  &#x2022;  Fast Food   &#x2022;  Burgers  </p>
    </div>

    <div>
        <img src="./assests/available-restaurant-6.webp" alt=" " />
        <h5>Chubby Noodle Chinese Takeout</h5>
        <p>American &#x2022; Fast Food   &#x2022;   Burgers </p>
    </div>
    </div>
    <div className={styles.btn1}>
        <button>Discover More</button>
    </div>


    <div className={styles.text}>
        <h2>Popular categories by food</h2>
    </div>
    <div className={styles.btn2}>
        <button >Pizza</button>
        <button >Breakfast</button>
        <button >Japanese</button>
        <button >Halal</button>
        <button >Desert</button>
        <button >Lebanese</button>
        <button >American</button>
        <button >Sushi</button>
        <button >Greek</button>
        <button >Thai</button>
        <button >Vegetarian</button>
        <button >Italian</button>
        <button >Mexican</button>
        <button >Indian</button>
        <button >Chinese</button>
        <button >Burgers</button>
</div>
       <div className={styles.alt}>
    <h2>Let's see how it works</h2>
    </div> 
<div className={styles.container3}>
    
       
    <div>
        <img src="./assests/become.png" alt="/" />
        <h4> Become a Delivery Man</h4>
        <p>As a delivery driver, you'll make reliable<span>money-working anytime, anywhere.</span></p>
        <h5>Start Earning</h5>
    </div>
    <div>
        <img src="./assests/become_1.png" alt="/" />
        <h4>Become a Partner</h4>
        <p>Grow your business and reach new<span>customers by partnering with us.</span></p>
        <h5>Sign up your store</h5>
    </div>
    <div>
        <img src="./assests/become_2.webp" alt="/" />
        <h4>Try Android/iOS App</h4>
        <p>Get the best DoorDash experience<span>with live order tracking.</span></p>
        <h5>Get the app</h5>
    </div>
</div>
      

        
    <div className={styles.error}>
        <div>
            <img src="./assests/banner 2.webp" alt="/" />
        </div>
        <div>
            <h2>We deliver our products as<br /><span>fast as superman can do</span></h2><br />
            <p>Pick one of our stock themes, or create your custom theme with the <br /><span>most advanced theme editor on any online survey building tool. </span></p><br />
            <h4>Easy to use application</h4><br />
            <p>We're driven beyond just finishing the projects. We want to<br /><span>find solutions using our website & apps.</span></p><br />
            <h4>Deliver Food within 30 min</h4><br />
            <p>We're driven beyond just finishing the projects. We want to<br /><span>find solutions using our website & apps.</span></p><br />
            <h4>100% Reliable with Privacy</h4><br />
            <p>We're driven beyond just finishing the projects. We want to<br/><span>find solutions using our website & apps.</span></p><br />
        </div>
    </div>  
</div>


  )
}

export default Restaurants