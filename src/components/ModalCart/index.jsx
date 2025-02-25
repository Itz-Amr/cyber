import { showModalCart } from "../../store";
import styles from "./index.module.css";
import test from "../../assets/images/product_1.png";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";

export default function ModalCart() {
  const { closeModalCart, productsCart } = showModalCart();
  return (
    <div id={styles.modalCart} onClick={closeModalCart}>
      <div
        onClick={(e) => e.stopPropagation()}
        className="col-6 bg-white p-3 d-flex flex-column rounded animate__animated animate__fadeIn"
      >
        <h1 className="col-12 d-flex justify-content-center">Shopping Cart</h1>
        {productsCart.map((el, index) => {
          return (
            <div key={index} className="col-12 d-flex justify-content-between">
              <div>
                <img src={test} />
                <h5>{el.name}</h5>
              </div>

              <span>Price :{el.price}$</span>

              <div className="d-flex gap-2 align-items-center">
                <FiPlus />
                <span>{el.qty}</span>
                <FiMinus />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
