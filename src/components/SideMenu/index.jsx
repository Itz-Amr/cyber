import { showSideMenu } from "../../store";
import ProductsFilter from "../ProductsFilter";
import styles from "./index.module.css";
export default function SideMenu() {
  const { closeSideMenu } = showSideMenu();
  return (
    <div onClick={closeSideMenu} className={styles.sideMenu}>
      <div
        onClick={(e) => e.stopPropagation()}
        className={styles.content + " animate__animated animate__fadeInRight"}
      >
        <nav className="d-flex flex-column p-5">
          <a className={styles.uniq} href="/">
            Home
          </a>
          <a href="/">About</a>
          <a href="/">Contact Us</a>
          <a href="/">Blog</a>
        </nav>

        <ProductsFilter className={`col-12`} />
      </div>
    </div>
  );
}
