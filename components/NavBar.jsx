import { useState } from "react";
import styles from "../styles/NavBar.module.css";
import Link from "next/link";

const NavBar = () => {
  return (
    <>
      <header>
        <Link className={styles.logo} href="/">Orders</Link>

        <input type="checkbox" id="menu-bar" className={styles.menubar}></input>
        <label for="menu-bar">menu</label>

        <nav className={styles.navbar}>
          <ul>
            <li>
              <Link href="/">home</Link>
            </li>
            <li>
              <Link href="/orders">Orders</Link>

            </li>
            <li>
              <Link href="/orders/add">Place Order</Link>
            </li>

            <li>
              <Link href="/about-us">About</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
