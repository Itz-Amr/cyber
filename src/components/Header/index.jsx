import logo from "../../assets/images/Logo.png";
import { CiSearch } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { IoCartOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { IoMenu } from "react-icons/io5";
import styles from "./index.module.css";
import SideMenu from "../SideMenu";
import { showModalCart, showSideMenu } from "../../store";

export default function Header() {
  const { value, openSideMenu } = showSideMenu();
  const { openModalCart } = showModalCart();
  return (
    <header className={styles.myHeader}>
      <div className="container d-flex align-items-center justify-content-between">
        <img src={logo} />

        <div className="d-flex position-relative d-md-none d-lg-block">
          <CiSearch className={`${styles.iconSearch} position-absolute`} />
          <input className={styles.input} type="search" placeholder="Search" />
        </div>

        <nav>
          <a className={styles.uniq} href="/">
            Home
          </a>
          <a href="/">About</a>
          <a href="/">Contact Us</a>
          <a href="/">Blog</a>
        </nav>

        <div className={styles.icons}>
          <GoHeart className={styles.icon} />
          <IoCartOutline onClick={openModalCart} className={styles.icon} />
          <FiUser className={styles.icon} />
        </div>
        <IoMenu onClick={openSideMenu} className={styles.searchIcon} />
      </div>

      {value ? <SideMenu /> : null}
    </header>
  );
}
