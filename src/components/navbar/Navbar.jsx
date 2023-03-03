import React, {useState} from 'react'
import styles from './Navbar.module.css'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import {Link} from 'react-scroll'

const Navbar = (props) => {
    const [nav, setNav] = useState(false)
    const navHandler=()=>{
      setNav(prev=>!prev)
    }
  return (
    <header className={styles.navbar}>
       <img src="./assests/logo.png" alt="/" width="150" />
      <div>
           <ul className={nav ? [styles.menu, styles.active].join(' ') : [styles.menu]}>
              <li>
              <Link className={styles.link} to="home" spy={true} smooth={true} duration={500} onClick={navHandler}>
                Home
              </Link>
              </li>
              <li>
              <Link to="restaurants" spy={true} smooth={true} duration={500} onClick={navHandler}>
                Restaurants
              </Link>
              </li>
              <li>
              <Link to="features" spy={true} smooth={true} duration={500} onClick={navHandler}>
                Features
              </Link>
              </li>
              <li>
              <Link to="testimonials" spy={true} smooth={true} duration={500} onClick={navHandler}>
                Testimonials
              </Link>
              </li>
              <li>
              <Link to="download" spy={true} smooth={true} duration={500} onClick={navHandler}>
                Download
              </Link>
              </li>
             
              <li>
                <button className={styles.btn} onClick={()=>{props.setlogin(true)}}>Login Now</button>
              </li>
              <li>
                <button className={styles.btn1}>Join Free</button>
              </li>
             </ul>
      </div>
      <div onClick={() => setNav(!nav)} className={styles.mobile_btn}>
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>
    </header>
  );
};

export default Navbar
       