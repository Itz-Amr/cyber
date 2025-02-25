import styles from "./index.module.css";
import ProductsFilter from "../../components/ProductsFilter";
import ProductCard from "../../components/ProductCard";
import { useEffect, useState } from "react";
import axios from "axios";
import ModalCart from "../../components/ModalCart";
import { showModalCart } from "../../store";

export default function HomePage() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setProducts(res.data);
    });
  }, []);

  const { showCart } = showModalCart();

  return (
    <main className="d-flex flex-wrap container">
      {showCart ? <ModalCart /> : null}

      <ProductsFilter className={`col-3 d-sm-none d-md-block`} />
      <div className="col-lg-9 col-sm-12 ps-3">
        <h5 className="px-3">Available Products : {products.length}</h5>
        <div className="d-flex flex-wrap">
          {products.map((el, index) => {
            return (
              <ProductCard
                key={el.id}
                productImage={el.image}
                productName={el.title}
                productPrice={el.price}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}
