import React from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <>
    <div className={styles.box}>
        <div>
            WTF
        </div>
        <div className={styles.smallBox}>
            <div>Fitness</div>
            <div>Nutrition</div>
            <div>Gyms</div>
            <div>Become WTF Partner</div>
            <div>About Us</div>
            <div>Login</div>
        </div>
    </div>
    {/* <img src="https://wtfup.me/assets/loader.gif" alt=""/> */}
    </>
  )
}

export default Navbar