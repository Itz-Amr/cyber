import { showModalCart } from "../../store";
import styles from "./index.module.css";
import test from "../../assets/images/product_1.png";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

export default function ModalCart() {
  const { closeModalCart, productsCart } = showModalCart();
  return (
    <div id={styles.modalCart} onClick={closeModalCart}>
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white p-3 d-flex flex-column gap-3 rounded animate__animated animate__fadeIn"
      >
        <h1 className="col-12 d-flex justify-content-center">Shopping Cart</h1>
        {productsCart.map((el, index) => {
          return (
            <div key={index} id={styles.cart}>
              <IoMdClose className={styles.exitIcon} />
              <img src={test} />

              <h5>Product Name: {el.name}</h5>

              <div>
                <p>{el.price}$</p>
                <div>
                  <FiMinus className={styles.icon} />
                  <span>{el.qty}</span>
                  <FiPlus className={styles.icon} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
