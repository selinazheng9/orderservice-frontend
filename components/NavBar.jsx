import { useState } from "react";
import styles from "../styles/NavBar.module.css"
import Link from "next/link";


const NavBar = () => {
    
    return (
        <>
        <div className={styles.container}>
          <div className={styles.item}>LOGO</div>

          <div className={styles.item}>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                    <Link href="/customer">Customers</Link>
                </li>
                <li className={styles.listItem}>
                    Orders
                </li>
                <li className={styles.listItem}>
                    Trackings
                </li>
               
              </ul>
          </div>

          <div className={styles.item}>Login/Register</div>

        </div>
         
        </>
    )
}

export default NavBar;