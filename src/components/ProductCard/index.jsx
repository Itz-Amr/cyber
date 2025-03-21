import { showModalCart } from "../../store";
import styles from "./index.module.css";

export default function ProductCard({
  productImage,
  productName,
  productPrice,
}) {
  const { openModalCart } = showModalCart();
  return (
    <div className="col-6 col-lg-4 col-md-4 p-4">
      <div className={`${styles.productCard} p-3`}>
        <img src={productImage} />

        <p className="text-center">{productName}</p>

        <span>${productPrice}</span>

        <button onClick={openModalCart} className="p-sm-0">
          Add To Cart
        </button>
      </div>
    </div>
  );
}
